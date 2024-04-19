import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";
import "../components/Song.scss";
import { db, auth } from "../firebase/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

const Listening = () => {
    const { currentUser } = useAuth();
    const [songList, setSongList] = useState([]);
    const [songIDList, setSongIDList] = useState([]);
    const [rankingList, setRankingList] = useState([]);
    const email= currentUser ? currentUser.email: "";

    const songCollectionList = collection(db, "Song");
    const rankingCollectionList = collection(db, "Ranking");

    useEffect(() => {
        getRankAndSongList();
     }, []);

    const getRankAndSongList = async () => {
        try {
            //Query to get all the rankings for a user
            const rankingQuery = query(
                rankingCollectionList,
                where("userId", "==", auth.currentUser.uid)
            );
            const rankingQuerySnapshot = await getDocs(rankingQuery);
            setRankingList(rankingQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            //Query for finding all the songs that were ranked
            setSongIDList(rankingQuerySnapshot.docs.map((doc) => (doc.data().songId)));
            const songQuery = query(
                songCollectionList,
                where("songId", "in", songIDList)
            );
            const songQuerySnapshot = await getDocs(songQuery);
            setSongList(songQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
        catch{
            console.log("Fetching user ranking and song information incomplete")
        }
    };


    return (
    <>
        <div className="l_conatiner"> 
            <div className="listen_list_container">
                <div className="listen_list_header">Plan to Listen</div>
                <div className="listen_list_boxes">
                    {rankingList.map((song) =>
                        <div className="listen_list_box">
                            <div>{song.notes}</div>
                        </div>
                    )}
                    {/* <div className="listen_list_box">a</div>
                    <div className="listen_list_box">b</div>
                    <div className="listen_list_box">c</div>
                    <div className="listen_list_box">d</div>
                    <div className="listen_list_box">e</div> */}
                </div>
            </div>
        </div> 
    </>
  );
};

export default Listening;