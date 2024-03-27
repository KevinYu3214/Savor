import React, { useEffect, useState } from 'react';
import { getToken, fetchTopTracks, ensureValidToken, fetchUserProfile } from '../spotify/Spotify';

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code'); // Extract the code from URL
    
        if (code) {
            // Now we have the authorization code, let's get the token
            console.log('Authorization code:', code);
            getToken(code)
                .then(tokenData => {
                    // Now you have tokenData, proceed with fetching user profile and top tracks
                    const accessToken = tokenData.access_token;
                    localStorage.setItem('access_token', accessToken); // Make sure to save the access token
    
                    fetchUserProfile(accessToken).then(userProfile => {
                        setProfileName(userProfile.display_name);
                    });
    
                    fetchTopTracks(accessToken).then(tracksData => {
                        setTopTracks(tracksData.items);
                    });
                })
                .catch(err => {
                    setError(`Failed to exchange code for token: ${err.message}`);
                    console.error('Token exchange error:', err);
                });
        }
    }, []);
    

    return (
        <div>
            <h1>Spotify Profile</h1>
            {error && <p>Error: {error}</p>}
            {profileName && <p>Welcome, {profileName}</p>}
            <h2>Top Tracks</h2>
            <ul>
                {topTracks.length > 0 ? (
                    topTracks.map((track) => (
                        <li key={track.id}>{track.name} by {track.artists.map((artist) => artist.name).join(', ')}</li>
                    ))
                ) : (
                    <p>No top tracks found.</p>
                )}
            </ul>
        </div>
    );
}

export default Stats;
