import React, { useEffect, useState } from 'react';
import { getToken, fetchUserProfile, ensureValidToken, storeSpotifyTokens } from '../spotify/Spotify';
import { getAuth } from "firebase/auth";
import { auth } from '../firebase/firebase';

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState('');
    const [suggestedPlaylist, setSuggestedPlaylist] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    const [playlistAnalyzed, setPlaylistAnalyzed] = useState(false); // New state variable

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = localStorage.getItem('spotify_access_token');
                if (!token) {
                    token = await ensureValidToken(auth.currentUser.uid);
                    localStorage.setItem('spotify_access_token', token);
                }
                setAccessToken(token);
                
                if (token) {
                    const { display_name } = await fetchUserProfile(token);
                    setProfileName(display_name);
                    const storedTopTracks = localStorage.getItem('spotify_top_tracks');
                    if (storedTopTracks) {
                        setTopTracks(JSON.parse(storedTopTracks));
                    } else {
                        const topTracksData = await fetchTopTracks(token);
                        setTopTracks(topTracksData.items);
                        localStorage.setItem('spotify_top_tracks', JSON.stringify(topTracksData.items));
                    }
                    setError('');
                }
            } catch (error) {
                setError(`Failed to fetch profile or top tracks: ${error.message}`);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleSpotifyAuthFlow = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                const code = new URLSearchParams(window.location.search).get('code');
                if (user && code) {
                    const { access_token } = await getToken(code);
                    await storeSpotifyTokens(user.uid, access_token);
                    setAccessToken(access_token);
                    await setProfileAndTracks(access_token);
                    window.history.pushState({}, null, window.location.pathname);
                }
            } catch (err) {
                setError(`Failed to exchange code for token: ${err.message}`);
            }
        };

        handleSpotifyAuthFlow();
    }, []);

    useEffect(() => {
        if (!playlistAnalyzed && topTracks.length > 0) {
            suggestPlaylist(topTracks.map(track => track.id));
            setPlaylistAnalyzed(true);
        }
    }, [topTracks, playlistAnalyzed]); // Added playlistAnalyzed to the dependencies

    useEffect(() => {
        if (suggestedPlaylist.length > 0) {
            localStorage.setItem('spotify_suggested_playlist', JSON.stringify(suggestedPlaylist));
        }
    }, [suggestedPlaylist]);

    useEffect(() => {
        const storedTopTracks = localStorage.getItem('spotify_top_tracks');
        if (storedTopTracks) {
            setTopTracks(JSON.parse(storedTopTracks));
        }
    }, []);
    useEffect(() => {
        const storedSuggestedPlaylist = localStorage.getItem('spotify_suggested_playlist');
        if (storedSuggestedPlaylist) {
            setSuggestedPlaylist(JSON.parse(storedSuggestedPlaylist));
        }
    }, []);

    async function setProfileAndTracks(token) {
        try {
            const { display_name } = await fetchUserProfile(token);
            setProfileName(display_name);
            const topTracksData = await fetchTopTracks(token);
            setTopTracks(topTracksData.items);
        } catch (error) {
            setError(`Failed to fetch profile or top tracks: ${error.message}`);
        }
    }

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

    async function suggestPlaylist(seedTracks) {
        try {
            const { danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence } = await fetchAndCalculateAverageFeatures(seedTracks);
            const response = await fetch(`https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${seedTracks.join(',')}&target_danceability=${danceability}&target_energy=${energy}&target_loudness=${loudness}&target_speechiness=${speechiness}&target_acousticness=${acousticness}&target_instrumentalness=${instrumentalness}&target_liveness=${liveness}&target_valence=${valence}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch recommendations: ${response.status} - ${response.statusText}`);
            }

            const { tracks } = await response.json();
            const filteredPlaylist = tracks.filter(track => !topTracks.some(topTrack => topTrack.id === track.id) && !topTracks.some(topTrack => topTrack.name === track.name));
            setSuggestedPlaylist(filteredPlaylist);
        } catch (error) {
            setError(`Failed to fetch recommendations: ${error.message}`);
        }
    }

    async function fetchAndCalculateAverageFeatures(seedTracks) {
        const response = await fetch(`https://api.spotify.com/v1/audio-features/?ids=${seedTracks.join(',')}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch audio features: ${response.status} - ${response.statusText}`);
        }

        const { audio_features } = await response.json();

        const sum = arr => arr.reduce((acc, val) => acc + val, 0);
        const average = arr => sum(arr) / arr.length;

        return {
            danceability: average(audio_features.map(feature => feature.danceability)),
            energy: average(audio_features.map(feature => feature.energy)),
            loudness: average(audio_features.map(feature => feature.loudness)),
            speechiness: average(audio_features.map(feature => feature.speechiness)),
            acousticness: average(audio_features.map(feature => feature.acousticness)),
            instrumentalness: average(audio_features.map(feature => feature.instrumentalness)),
            liveness: average(audio_features.map(feature => feature.liveness)),
            valence: average(audio_features.map(feature => feature.valence)),
        };
    }

    return (
        <div>
            <h1>Spotify Profile</h1>
            {error && <p>Error: {error}</p>}
            {profileName && <p>Welcome, {profileName}</p>}   
            <div>
                <h2>Top Tracks</h2>
                <ul>
                    {topTracks.map(track => (
                        <li key={track.id}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
                    ))}
                </ul>
            </div>
            {!profileName && <p>Loading profile...</p>}
            {!topTracks.length && <p>Loading top tracks...</p>}
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
