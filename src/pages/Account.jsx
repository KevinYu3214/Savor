import { useState } from "react";
import Profile from "../components/Profile";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import styles from "../components/Profile.module.scss"

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
      <Profile />
      <button onClick={logOut} className={styles.button}>Log out</button>
    </>
  );
}

export default Account;
