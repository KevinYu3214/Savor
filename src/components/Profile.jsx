import React, { useState } from "react";
import styles from "./Profile.module.scss";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const email= currentUser ? currentUser.email: "";

    const logOut = () => {
        if(currentUser){
            logout()
            .then(() => {})
            .catch((err) => {console.log(err)})
        }
    };

    if(currentUser === null){<Navigate to="/login" />}

    return (
    <>
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.user__text}>Current User: {email}</div>
            </div>
            <div className={styles.spotify}>
                <div className={styles.spotify__text}>Spotify: None</div>
            </div>
            <button className={styles.button} onClick={logOut}>Log Out</button>
        </div>   
    </>
  );
};

export default Profile;