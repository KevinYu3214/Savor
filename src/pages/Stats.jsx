import React, { useEffect, useState } from 'react';
import { getToken, fetchUserProfile, ensureValidToken, storeSpotifyTokens } from '../spotify/Spotify';
import { getAuth } from "firebase/auth";
import { auth } from '../firebase/firebase';

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState('');
    const [suggestedPlaylist, setSuggestedPlaylist] = useState([]);

    useEffect(() => {
        const fetchSpotifyProfile = async () => {
            try {
                const userId = auth.currentUser.uid;
                const accessToken = await ensureValidToken(userId);
                const profile = await fetchUserProfile(accessToken);
                setProfileName(profile.display_name);
            } catch (error) {
                setError(`Failed to fetch profile: ${error.message}`);
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
                    setProfileAndTracks(tokenData.access_token);
                    window.history.pushState({}, null, window.location.pathname);
                }
            } catch (err) {
                setError(`Failed to exchange code for token: ${err.message}`);
            }
        };

        handleSpotifyAuthFlow();
    }, []);

    const setProfileAndTracks = async (accessToken) => {
        try {
            const userProfile = await fetchUserProfile(accessToken);
            setProfileName(userProfile.display_name);

            const topTracksData = await fetchTopTracks(accessToken);
            setTopTracks(topTracksData.items);

            // Call function to suggest playlist based on top tracks
            suggestPlaylist(accessToken, topTracksData.items.map(track => track.id));
        } catch (error) {
            setError(`Failed to fetch profile or top tracks: ${error.message}`);
        }
    };

    async function fetchTopTracks(accessToken) {
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
      
        if (!response.ok) {
            throw new Error(`Failed to fetch top tracks: ${response.status} - ${response.statusText}`);
        }
      
        return await response.json();
    }
    const fetchAndCalculateAverageFeatures = async (accessToken, seedTracks) => {
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
    const suggestPlaylist = async (accessToken, seedTracks) => {
        try {
            // Fetch and calculate average features of seed tracks
            const averageFeatures = await fetchAndCalculateAverageFeatures(accessToken, seedTracks);
            
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
            setSuggestedPlaylist(data.tracks);
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
