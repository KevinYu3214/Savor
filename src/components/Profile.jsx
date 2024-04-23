import React, { useState } from "react";
import styles from "./Profile.module.scss";
import { useAuth } from "../contexts/AuthContext";
import { isConnectedToSpotify } from "../spotify/Spotify"

const Profile = () => {
    const { currentUser } = useAuth();
    const email= currentUser ? currentUser.email: "";
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const changeEmail = (() => {
        //Do stuff

        setNewEmail("");
    })

    const changePassword = (() => {
        //Do stuff

        setNewEmail("");
    })

    return (
    <>
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.user__text}>Current User: {email}</div>
            </div>
            <div className={styles.info_change}>
            <div className={styles.info_change_label}>Spotify: { isConnectedToSpotify() ? "Connected":"Not Connected" }</div>
                <div className={styles.info_change_button} onClick={changeEmail}>Save</div>
            </div>
            <div className={styles.spotify}>
                
            </div>
            <div className={styles.info_change}>
                <div className={styles.info_change_label}>Change Email: </div>
                <input
                    type="email"
                    placeholder="Enter your new email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                ></input>
                <div className={styles.info_change_button} onClick={changeEmail}>Save</div>
            </div>
            <div className={styles.info_change}>
                <div className={styles.info_change_label}>Change Password: </div>
                <input
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                ></input>
                <div className={styles.info_change_button} onClick={changePassword}>Save</div>
            </div>
        </div>   
    </>
  );
};

export default Profile;