import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import "../global_styles/Account.scss";

const Account = () => {
  const { logout, currentUser } = useAuth();
  const [missingUser, setMissingUser] = useState(currentUser?false:true)

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
      <div className="a_container">
        <div className="header">
          <div className="profile.img"></div>
          <div className="header_text">Your Account</div>
        </div>
        <hr className="line"></hr>
        <div className="info">
          <button onClick={logOut} className="button">Log out</button>
        </div>
      </div>
    </>
  );
}

export default Account;
