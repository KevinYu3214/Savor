import React, { useEffect, useState } from 'react';
import { getToken, fetchTopTracks, fetchUserProfile, ensureValidToken, storeSpotifyTokens, getSpotifyTokens, refreshSpotifyToken } from '../spotify/Spotify';
import { getAuth } from "firebase/auth";
import { auth } from '../firebase/firebase';

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState('');
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchSpotifyProfile = async () => {
            const userId = auth.currentUser.uid; // Assuming you're using Firebase Auth
            const accessToken = await ensureValidToken(userId);
            const profile = await fetchUserProfile(accessToken);
            setUserProfile(profile);
        };
        fetchSpotifyProfile();
    }, []);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        const handleSpotifyAuthFlow = async () => {
    const user = auth.currentUser;
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (user && code) {
        try {
            const tokenData = await getToken(code);
            await storeSpotifyTokens(user.uid, tokenData.access_token, tokenData.refresh_token, tokenData.expires_in);
            setProfileAndTracks(tokenData.access_token);
            // Clear URL parameters to prevent reuse of the code
            window.history.pushState({}, null, window.location.pathname);
        } catch (err) {
            setError(`Failed to exchange code for token: ${err.message}`);
        }
    }
};


        const setProfileAndTracks = (accessToken) => {
            fetchUserProfile(accessToken).then(userProfile => {
                setProfileName(userProfile.display_name);
            });
            fetchTopTracks(accessToken).then(tracksData => {
                setTopTracks(tracksData.items);
            });
        };

        handleSpotifyAuthFlow();
    }, []);

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
        </div>
    );
}

export default Stats;
