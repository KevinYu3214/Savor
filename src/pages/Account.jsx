import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import "../global_styles/Account.scss";
import Profile from "../components/Profile";
import SavedPreference from "../components/SavedPreference";
import { generateSpotifyAuthRequest, deleteSpotifyTokenFromFirestore, isConnectedToSpotify, getTokenAndSet } from "../spotify/Spotify";

const Account = () => {
  const { logout, currentUser } = useAuth();
  const [missingUser, setMissingUser] = useState(currentUser ? false : true);
  const [profile, setProfile] = useState(true);
  const [preference, setPreference] = useState(false);
  
  const profileClick = () => {
    setProfile(true);
    setPreference(false);
  };
  
  const preferenceClick = () => {
    setProfile(false);
    setPreference(true);
  };

  const logOut = (e) => {
    e.preventDefault();
    setMissingUser(true);
    logout()
      .then(() => setMissingUser(true))
      .catch((err) => console.log(err));
  };
  
  return (
    <>
      {missingUser && <Navigate to="/login" />}
      <div className="lift"></div>
      <div className="a_header">
        <div className="a_header_text">Account</div>
        <button onClick={logOut} className="a_header_button">Log out</button>
      </div>
      <div className="a_container">
        <div className="sidebar">
          <div className="page_selector" onClick={profileClick}>
            <div className="page_selector__text">
              User Info
            </div>
          </div>
          <div className="page_selector" onClick={preferenceClick}>
            <div className="page_selector__text">
              Preferences
            </div>
          </div>
        </div>
        <div className="info">
          {profile && <Profile />}
          {preference && <SavedPreference />}
        </div>
      </div>
    </>
  );
};

export default Account;
