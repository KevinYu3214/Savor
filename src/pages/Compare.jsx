import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import CompareButton from "../components/CustomButtons/CompareButton";
import { generateSpotifyAuthRequest, ensureValidToken } from "../spotify/Spotify"; // Assuming this is the adjusted function

const Compare = () => {
    const [spotifyAuthRequest, setSpotifyAuthRequest] = useState('');
    const { logout, currentUser } = useAuth();
    const [missingUser, setMissingUser] = useState(currentUser?false:true);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const checkToken = async () => {
            const tmp = await ensureValidToken();
            setToken(tmp);
        }
        const fetchAuthUrl = async () => {
            const url = await generateSpotifyAuthRequest();
            setSpotifyAuthRequest(url);
        };
        fetchAuthUrl();
    }, []);



    return (
        <>
            {missingUser && <Navigate to="/login" />}
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
