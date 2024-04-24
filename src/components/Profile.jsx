import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import { useAuth } from "../contexts/AuthContext";
import { 
    generateSpotifyAuthRequest, 
    deleteSpotifyTokenFromFirestore, 
    isConnectedToSpotify, 
    getTokenAndSet 
} from "../spotify/Spotify";

const Profile = () => {
    const { currentUser } = useAuth();
    const email = currentUser ? currentUser.email: "";
    const [ connection, setConnection ] = useState("");
    const [spotifyAuthRequest, setSpotifyAuthRequest] = useState('');
    const [spotifyConnected, setSpotifyConnected] = useState(() => {
        // Load spotifyConnected from local storage, default to false if not found
        return localStorage.getItem("spotifyConnected") === "true" ? true : false;
    });
    
    useEffect(() => {
        const fetchAuthUrl = async () => {
            const url = await generateSpotifyAuthRequest();
            setSpotifyAuthRequest(url);
        };
        fetchAuthUrl();
        
        const params = new URLSearchParams(window.location.search);
        if (params.has('code')) {
            handleConnectSpotify();
        }
        fetchSpotifyConnectionStatus();
    }, []);

    const handleConnectSpotify = async () => {
        try {
            await getTokenAndSet()
        } catch (error) {
            console.error('Error refreshing Spotify token:', error);
        }
    };

    const fetchSpotifyConnectionStatus = async () => {
        const connected = await isConnectedToSpotify();
        setSpotifyConnected(connected);
        // Store spotifyConnected in local storage
        localStorage.setItem("spotifyConnected", connected ? "true" : "false");
    };

    const deleteSpotifyToken = async () => {
        // Delete token from Firestore
        try {
            await deleteSpotifyTokenFromFirestore();
            localStorage.setItem("spotifyConnected", "false");
            setSpotifyConnected(false);
        } catch (error) {
            console.error('Error deleting Spotify token:', error);
        }
    };

    useEffect(() => {
        spotifyConnected ? setConnection("Connected"):setConnection("Not Connected");
    }, [spotifyConnected])

    const connect = () => {
        window.location.href = spotifyAuthRequest;
    }

    const disconnect = () => {
        deleteSpotifyToken();
    }

    return (
    <>
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.user__text}>Current User: {email}</div>
            </div>
            <div className={styles.info_change}>
                <div className={styles.info_change_label}>Spotify: {connection}</div>
                {spotifyConnected &&
                    <div className={styles.info_change_button} onClick={disconnect}>Disconnect Spotify</div>}
                {!spotifyConnected && 
                    <div className={styles.info_change_button} onClick={connect}>Connect Spotify</div>}
            </div>
        </div>   
    </>
  );
};

export default Profile;