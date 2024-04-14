import React, { useEffect, useState } from 'react';
import { getToken, fetchUserProfile, ensureValidToken, storeSpotifyTokens } from '../spotify/Spotify';
import { getAuth } from "firebase/auth";
import { auth } from '../firebase/firebase';

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState('');
    const [suggestedPlaylist, setSuggestedPlaylist] = useState([]);
    const [accessToken, setAccessToken] = useState(null); // State to store access token

    useEffect(() => {
        const fetchSpotifyProfile = async () => {
            try {
                let token = localStorage.getItem('spotify_access_token'); // Check local storage for access token
                if (!token) {
                    const userId = auth.currentUser.uid;
                    token = await ensureValidToken(userId);
                    localStorage.setItem('spotify_access_token', token); // Store access token in local storage
                }
                setAccessToken(token); // Store the access token
    
                const profile = await fetchUserProfile(token);
                setProfileName(profile.display_name);
    
                // Check local storage for top tracks
                const storedTopTracks = localStorage.getItem('spotify_top_tracks');
                if (storedTopTracks) {
                    setTopTracks(JSON.parse(storedTopTracks));
                } else {
                    const topTracksData = await fetchTopTracks(token);
                    setTopTracks(topTracksData.items);
                    localStorage.setItem('spotify_top_tracks', JSON.stringify(topTracksData.items)); // Store top tracks in local storage
                }
            } catch (error) {
                setError(`Failed to fetch profile or top tracks: ${error.message}`);
            }
        };
        fetchSpotifyProfile();
    }, []);
    

    useEffect(() => {
        const handleSpotifyAuthFlow = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                const urlParams = new URLSearchParams(window.location.search);
                const code = urlParams.get('code');

                if (user && code) {
                    const tokenData = await getToken(code);
                    await storeSpotifyTokens(user.uid, tokenData.access_token, tokenData.refresh_token, tokenData.expires_in);
                    setAccessToken(tokenData.access_token); // Store the access token
                    setProfileAndTracks(tokenData.access_token);
                    window.history.pushState({}, null, window.location.pathname);
                }
            } catch (err) {
                setError(`Failed to exchange code for token: ${err.message}`);
            }
        };

        handleSpotifyAuthFlow();
    }, []);

    const setProfileAndTracks = async (token) => {
        try {
            const userProfile = await fetchUserProfile(token);
            setProfileName(userProfile.display_name);
    
            const topTracksData = await fetchTopTracks(token);
            setTopTracks(topTracksData.items);
        } catch (error) {
            setError(`Failed to fetch profile or top tracks: ${error.message}`);
        }
    };
    
    useEffect(() => {
        if (topTracks.length > 0) {
            suggestPlaylist(topTracks.map(track => track.id));
        }
    }, [topTracks]);
    

    async function fetchTopTracks(token) {
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
      
        if (!response.ok) {
            throw new Error(`Failed to fetch top tracks: ${response.status} - ${response.statusText}`);
        }
      
        return await response.json();
    }    
    useEffect(() => {
        if (suggestedPlaylist.length > 0) {
            localStorage.setItem('spotify_suggested_playlist', JSON.stringify(suggestedPlaylist)); // Store suggested playlist in local storage
        }
    }, [suggestedPlaylist]);

    useEffect(() => {
        const storedSuggestedPlaylist = localStorage.getItem('spotify_suggested_playlist');
        if (storedSuggestedPlaylist) {
            setSuggestedPlaylist(JSON.parse(storedSuggestedPlaylist));
        }
    }, []);

    useEffect(() => {
        if (topTracks.length > 0) {
            suggestPlaylist(topTracks.map(track => track.id));
        }
    }, [topTracks]);

    const fetchAndCalculateAverageFeatures = async (seedTracks) => {
        try {
            const featuresResponse = await fetch(`https://api.spotify.com/v1/audio-features/?ids=${seedTracks.join(',')}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
    
            if (!featuresResponse.ok) {
                throw new Error(`Failed to fetch audio features: ${featuresResponse.status} - ${featuresResponse.statusText}`);
            }
    
            const featuresData = await featuresResponse.json();
    
            // Calculate average audio features
            const averageFeatures = {
                danceability: calculateAverage(featuresData.audio_features.map(feature => feature.danceability)),
                energy: calculateAverage(featuresData.audio_features.map(feature => feature.energy)),
                loudness: calculateAverage(featuresData.audio_features.map(feature => feature.loudness)),
                speechiness: calculateAverage(featuresData.audio_features.map(feature => feature.speechiness)),
                acousticness: calculateAverage(featuresData.audio_features.map(feature => feature.acousticness)),
                instrumentalness: calculateAverage(featuresData.audio_features.map(feature => feature.instrumentalness)),
                liveness: calculateAverage(featuresData.audio_features.map(feature => feature.liveness)),
                valence: calculateAverage(featuresData.audio_features.map(feature => feature.valence)),
                tempo: calculateAverage(featuresData.audio_features.map(feature => feature.tempo)),
                duration_ms: calculateAverage(featuresData.audio_features.map(feature => feature.duration_ms)),
            };
    
            return averageFeatures;
        } catch (error) {
            throw new Error(`Failed to fetch and calculate average features: ${error.message}`);
        }
    };

    const suggestPlaylist = async (seedTracks) => {
        try {
            // Fetch and calculate average features of seed tracks
            const averageFeatures = await fetchAndCalculateAverageFeatures(seedTracks);
            
            // Fetch recommendations using seed tracks and average features
            const response = await fetch(`https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${seedTracks.join(',')}&target_danceability=${averageFeatures.danceability}&target_energy=${averageFeatures.energy}&target_loudness=${averageFeatures.loudness}&target_speechiness=${averageFeatures.speechiness}&target_acousticness=${averageFeatures.acousticness}&target_instrumentalness=${averageFeatures.instrumentalness}&target_liveness=${averageFeatures.liveness}&target_valence=${averageFeatures.valence}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
    
            if (!response.ok) {
                throw new Error(`Failed to fetch recommendations: ${response.status} - ${response.statusText}`);
            }
    
            const data = await response.json();
            
            const filteredPlaylist = data.tracks.filter(track => 
                !topTracks.some(topTrack => topTrack.id === track.id) &&
                !topTracks.some(topTrack => topTrack.name === track.name)
            );

            setSuggestedPlaylist(filteredPlaylist);

        } catch (error) {
            setError(`Failed to fetch recommendations: ${error.message}`);
        }
    };

    const calculateAverage = (array) => {
        if (array.length === 0) {
            return 0;
        }
        
        const sum = array.reduce((acc, val) => acc + val, 0);
        return sum / array.length;
    };
    
    return (
        <div>
            <h1>Spotify Profile</h1>
            {error && <p>Error: {error}</p>}
            {profileName && <p>Welcome, {profileName}</p>}
            <h2>Top Tracks</h2>
            <ul>
                {topTracks.map(track => (
                    <li key={track.id}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
                ))}
            </ul>
            <h2>Suggested Playlist</h2>
            <ul>
                {suggestedPlaylist.map(track => (
                    <li key={track.id}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
                ))}
            </ul>
        </div>
    );
}

export default Stats;
