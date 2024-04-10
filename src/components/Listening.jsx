import React from "react";
import "./Listening.module.scss";
import { useAuth } from "../contexts/AuthContext";

const Listening = () => {
    const { currentUser } = useAuth();
    const email= currentUser ? currentUser.email: "";
    return (
    <>
        <div className="l_conatiner"> 
            <div className="listen_list_container">
                <div className="listen_list_header">Plan to Listen</div>
                <div className="listen_list_boxes">
                    <div className="listen_list_box">a</div>
                    <div className="listen_list_box">b</div>
                    <div className="listen_list_box">c</div>
                    <div className="listen_list_box">d</div>
                    <div className="listen_list_box">e</div>
                </div>
            </div>
            <div className="listen_list_container">
                <div className="listen_list_header">Favorites</div>
                <div className="listen_list_boxes">
                    <div className="listen_list_box">a</div>
                    <div className="listen_list_box">b</div>
                    <div className="listen_list_box">c</div>
                    <div className="listen_list_box">d</div>
                    <div className="listen_list_box">e</div>
                </div>
            </div>
            <div className="listen_list_container">
                <div className="listen_list_header">Listened</div>
                <div className="listen_list_boxes">
                    <div className="listen_list_box">a</div>
                    <div className="listen_list_box">b</div>
                    <div className="listen_list_box">c</div>
                    <div className="listen_list_box">d</div>
                    <div className="listen_list_box">e</div>
                </div>
            </div>
        </div> 
    </>
  );
};

export default Listening;