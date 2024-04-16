import React, { useEffect, useState } from 'react';
import { fetchUserProfile, ensureValidToken, fetchTopTracks, suggestPlaylist } from '../spotify/Spotify'; // Import necessary functions from Spotify module

const Stats = () => {
    const [profileName, setProfileName] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [suggestedPlaylist, setSuggestedPlaylist] = useState([]);
    const [error, setError] = useState('');
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
                    // Fetch user profile if not fetched yet or stored in localStorage
                    if (!localStorage.getItem('profileName')) {
                        console.log("Fetching user profile...");
                        const { display_name } = await fetchUserProfile(token);
                        console.log("User profile fetched:", display_name);
                        localStorage.setItem('profileName', display_name); // Store profileName in local storage
                        setProfileName(display_name);
                        await delay(1000); // Wait for 1 second before making the next request
                    } else {
                        const display_name = localStorage.getItem('profileName');
                        console.log("User profile fetched from local storage:", display_name);
                        setProfileName(display_name);
                        await delay(1000); // Wait for 1 second before making the next request
                    }
                    // Fetch top tracks if not fetched yet or stored in localStorage
                    if (!localStorage.getItem('topTracks')) {
                        console.log("Fetching top tracks...");
                        topTracksData = await fetchTopTracks(token);
                        console.log("Top tracks fetched:", topTracksData);
                        setTopTracks(topTracksData);
                        localStorage.setItem('topTracks', JSON.stringify(topTracksData.items)); // Store topTracks in local storage
                        await delay(1000); // Wait for 1 second before making the next request
                    } else {
                        const storedTopTracks = JSON.parse(localStorage.getItem('topTracks'));
                        console.log("Top tracks fetched from local storage:", storedTopTracks);
                        setTopTracks(storedTopTracks);
                        await delay(1000); // Wait for 1 second before making the next request
                    }
                    // Fetch suggested playlist if not fetched yet or stored in localStorage
                    if (!localStorage.getItem('suggested_playlist')) {
                        let suggestedTracks = [];
                        if (topTracksData && topTracksData.items) { // Ensure topTracksData.items is defined
                            console.log("Fetching suggested playlist...");
                            suggestedTracks = await suggestPlaylist(token, topTracksData.items.map(track => track.id));
                            console.log("Suggested playlist fetched:", suggestedTracks);
                            localStorage.setItem('suggested_playlist', JSON.stringify(suggestedTracks));
                            setSuggestedPlaylist(suggestedTracks);
                            await delay(1000); // Wait for 1 second before making the next request
                        }
                    } else {
                        const storedSuggestedPlaylist = JSON.parse(localStorage.getItem('suggested_playlist'));
                        console.log("Suggested playlist fetched from local storage:", storedSuggestedPlaylist);
                        setSuggestedPlaylist(storedSuggestedPlaylist);
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
    }, []);
    
    

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
