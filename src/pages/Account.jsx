import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import "../global_styles/Account.scss";
import Listening from "../components/Listening";
import Profile from "../components/Profile";
import SavedPreference from "../components/SavedPreference";

const Account = () => {
  const { logout, currentUser } = useAuth();
  const [missingUser, setMissingUser] = useState(currentUser?false:true)

  const [listening, setListening] = useState(true);
  const [profile, setProfile] = useState(false);
  const [preference, setPreference] = useState(false);

  const listenClick = () => {
    setListening(true);
    setProfile(false);
    setPreference(false);
  }
  const profileClick = () => {
    setListening(false);
    setProfile(true);
    setPreference(false);
  }
  const preferenceClick = () => {
    setListening(false);
    setProfile(false);
    setPreference(true);
  }

  const logOut = (e) => {
    e.preventDefault();
    
    setMissingUser(false)
    logout()
      .then(() => setMissingUser(true))
      .catch((err) => console.log(err))
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
              <div className="page_selector" onClick={listenClick}>
                <div className="page_selector__text">
                  Your Music
                </div>
              </div>
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
              {listening && <Listening />}
              {profile && <Profile />}
              {preference && <SavedPreference />}
            </div>
          </div>
    </>
  );
}

export default Account;
