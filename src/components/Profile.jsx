import React from "react";
import styles from "./Profile.module.scss";
import { useAuth } from "../contexts/AuthContext";
import { isConnectedToSpotify } from "../spotify/Spotify"

const Profile = () => {
    const { currentUser } = useAuth();
    const email= currentUser ? currentUser.email: "";

    return (
    <>
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.user__text}>Current User: {email}</div>
            </div>
            <div className={styles.spotify}>
                <div className={styles.spotify__text}>Spotify: { isConnectedToSpotify() ? "Connected":"Not Connected" }</div>
            </div>
        </div>   
    </>
  );
};

export default Profile;