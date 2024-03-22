import React from 'react';
import { getToken } from '../spotify/Spotify'

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');
localStorage.setItem('code', code);

const Stats = () => {
/*
useEffect(() => {
    if (!accessToken) return;
    localStorage.setItem('access_token', accessToken);
}, [accessToken]);
*/

    getToken(localStorage.getItem('code'));
    return (
        <div>
            <h1>Stats</h1>
            { localStorage.getItem('access_token') }
        </div>
    );
}

export default Stats;