import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import CompareButton from "../components/CustomButtons/CompareButton";
import { generateSpotifyAuthRequest } from "../spotify/Spotify"; // Assuming this is the adjusted function

const Compare = () => {
    const [spotifyAuthRequest, setSpotifyAuthRequest] = useState('');

    useEffect(() => {
        const fetchAuthUrl = async () => {
            const url = await generateSpotifyAuthRequest();
            setSpotifyAuthRequest(url);
        };
        fetchAuthUrl();
    }, []);

    return (
        <>
            <mainCompareText>
                Before we get into it... You need to <span>login</span>
            </mainCompareText>
            {spotifyAuthRequest && (
                <a href={spotifyAuthRequest}>
                    <CompareButton text={"Spotify"} />
                </a>
            )}
        </>
    );
}

export default Compare;
