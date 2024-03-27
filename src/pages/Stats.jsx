import React, { useEffect, useState } from 'react';
import { getToken, fetchTopTracks, ensureValidToken, fetchUserProfile } from '../spotify/Spotify';

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const handleAuthorizationFlow = async () => {
            try {
                const accessToken = await ensureValidToken();

                // Fetch user profile with the access token
                const userProfile = await fetchUserProfile(accessToken);
                setProfileName(userProfile.display_name);

                // Fetch top tracks with the access token
                const tracksData = await fetchTopTracks(accessToken);
                setTopTracks(tracksData.items);
            } catch (err) {
                setError(`An error occurred: ${err.message}`);
                console.error('Error:', err);
            }
        };

        handleAuthorizationFlow();
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
