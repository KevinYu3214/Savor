import React from "react";
import "./SavedPreference.module.scss";
import { useAuth } from "../contexts/AuthContext";

const SavedPreference = () => {
    const { currentUser } = useAuth();
    const email = currentUser ? currentUser.email: "";
    return (
    <>
        <div className="basic">No saved preferences yet!</div>
    </>
  );
};

export default SavedPreference;