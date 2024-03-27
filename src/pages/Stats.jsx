import React, { useEffect, useState } from 'react';
import { getToken, fetchTopTracks, ensureValidToken } from '../spotify/Spotify';

const Stats = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleAuthorizationFlow = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      
      // If no code is found, directly try to fetch top tracks with existing token
      if (!code) {
        try {
          const accessToken = await ensureValidToken();
          if (!accessToken) {
            setError('Access token is missing. Please re-authenticate.');
            return;
          }
          const tracksData = await fetchTopTracks(accessToken);
          setTopTracks(tracksData.items);
        } catch (error) {
          setError(`Failed to fetch top tracks: ${error.message}`);
          console.error('Error fetching top tracks:', error);
        }
        return;
      }

      try {
        const tokenData = await getToken(code);
        const accessToken = tokenData.access_token;
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('expires_at', Date.now() + tokenData.expires_in * 1000);
        if (tokenData.refresh_token) {
          localStorage.setItem('refresh_token', tokenData.refresh_token);
        }
        const tracksData = await fetchTopTracks(accessToken);
        setTopTracks(tracksData.items);
      } catch (error) {
        setError(`Token exchange error: ${error.message}`);
        console.error('Token exchange error:', error);
      }
    };

    handleAuthorizationFlow();
  }, []);

  return (
    <div>
      <h1>My Top Tracks</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {topTracks.map((track) => (
          <li key={track.id}>{track.name} by {track.artists.map((artist) => artist.name).join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
