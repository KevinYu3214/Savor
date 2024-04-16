import React, { useEffect, useState } from 'react';
import { fetchUserProfile, ensureValidToken, fetchTopTracks, suggestPlaylist } from '../spotify/Spotify'; // Import necessary functions from Spotify module

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState('');
    const [suggestedPlaylist, setSuggestedPlaylist] = useState([]);
    const [profileFetched, setProfileFetched] = useState(false);
    const [tracksFetched, setTracksFetched] = useState(false);
    const [playlistFetched, setPlaylistFetched] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        console.log("Fetching data...");
        const fetchData = async () => {
            try {
                // Retrieve access token
                const token = await ensureValidToken();
                if (token) {
                    console.log("Token retrieved:", token);
                    let topTracksData = {};
                    // Fetch user profile if not fetched yet
                    if (!profileFetched) {
                        console.log("Fetching user profile...");
                        const { display_name } = await fetchUserProfile(token);
                        console.log("User profile fetched:", display_name);
                        setProfileName(display_name);
                        setProfileFetched(true);
                        await delay(1000); // Wait for 1 second before making the next request
                    }
                    // Fetch top tracks if not fetched yet
                    if (!tracksFetched) {
                        console.log("Fetching top tracks...");
                        topTracksData = await fetchTopTracks(token);
                        console.log("Top tracks fetched:", topTracksData);
                        setTopTracks(topTracksData.items);
                        setTracksFetched(true);
                        await delay(1000); // Wait for 1 second before making the next request
                    }
                    // Fetch suggested playlist if not fetched yet
                    if (!playlistFetched && !localStorage.getItem('suggested_playlist')) {
                        let suggestedTracks = [];
                        if (topTracksData && topTracksData.items) { // Ensure topTracksData.items is defined
                            console.log("Fetching suggested playlist...");
                            suggestedTracks = await suggestPlaylist(token, topTracksData.items.map(track => track.id));
                            console.log("Suggested playlist fetched:", suggestedTracks);
                            setSuggestedPlaylist(suggestedTracks);
                            localStorage.setItem('suggested_playlist', JSON.stringify(suggestedTracks));
                        }
                        setPlaylistFetched(true);
                        await delay(1000); // Wait for 1 second before making the next request
                    } else if (!playlistFetched) {
                        // Retrieve suggested playlist from local storage if not fetched yet
                        console.log("Fetching suggested playlist from local storage...");
                        const storedSuggestedPlaylist = JSON.parse(localStorage.getItem('suggested_playlist'));
                        console.log("Suggested playlist fetched from local storage:", storedSuggestedPlaylist);
                        setSuggestedPlaylist(storedSuggestedPlaylist);
                        setPlaylistFetched(true);
                        await delay(1000); // Wait for 1 second before making the next request
                    }
                    setError('');
                    setIsLoading(false); // Set loading status to false once data is fetched
                }
            } catch (error) {
                setError(`Failed to fetch data: ${error.message}`);
                setIsLoading(false); // Set loading status to false in case of error
            }
        };
    
        const delay = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        };
    
        fetchData();
    }, [profileFetched, tracksFetched, playlistFetched]);

    console.log("Rendering component...");
    return (
        <div>
            <h1>Spotify Profile</h1>
            {isLoading && <p>Loading...</p>} {/* Display loading message if data is being fetched */}
            {!isLoading && error && <p>Error: {error}</p>} {/* Display error message if there's an error */}
            {!isLoading && profileName && <p>Welcome, {profileName}</p>}   
            {!isLoading && (
                <div>
                    <h2>Top Tracks</h2>
                    <ul>
                        {topTracks.map(track => (
                            <li key={track.id}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
                        ))}
                    </ul>
                </div>
            )}
            {!isLoading && !profileName && <p>Loading profile...</p>} {/* Display loading message for profile */}
            {!isLoading && !topTracks.length && <p>Loading top tracks...</p>} {/* Display loading message for top tracks */}
            {!isLoading && (
                <div>
                    <h2>Suggested Playlist</h2>
                    <ul>
                        {suggestedPlaylist.map(track => (
                            <li key={track.id}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Stats;
