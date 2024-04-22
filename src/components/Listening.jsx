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
import { Exception } from "sass";

const Listening = () => {
    const { currentUser } = useAuth();
    const [error, setError] = useState("");
    const [songList, setSongList] = useState([]);
    const [songIDList, setSongIDList] = useState([]);
    const [rankingList, setRankingList] = useState([]);
    const [rankingSongList, setRankingSongList] = useState([]);
    const email= currentUser ? currentUser.email: "";

    const songCollectionList = collection(db, "Song");
    const rankingCollectionList = collection(db, "Ranking");

    useEffect(() => {
        getRankAndSongList();
     }, []);

     useEffect(() => {
        console.log("there was a change");
     }, [rankingSongList]);

    const getRankAndSongList = async () => {
        try {
            setError("Unknown error")
            //Query to get all the rankings for a user
            const rankingQuery = query(
                rankingCollectionList,
                where("userId", "==", auth.currentUser.uid)
            );
            const rankingQuerySnapshot = await getDocs(rankingQuery);
            setRankingList(rankingQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            //Query for finding all the songs that were ranked
            setSongIDList(rankingQuerySnapshot.docs.map((doc) => (doc.data().songId)));
            console.log(songIDList.length);
            if(songIDList.length != 0){
                const songQuery = query(
                    songCollectionList,
                    where("songId", "in", songIDList)
                );
                const songQuerySnapshot = await getDocs(songQuery);
                setSongList(songQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
                if (songList.length == 0){
                    setError("No songs were fetched!")
                }
                makeRankingSong();
            } else {
                setError("No rankings were fetched!");
            }
            console.log("finished");
            console.log(rankingSongList);
        }
        catch{
            console.log("Fetching user ranking and song information incomplete: " + error)
        }
    };

    const makeRankingSong = () => {
        var newRankingSongList = [];

        for(let i = 0; i < rankingList.length; i++){
            var song = songList.find((song) => song.songId === rankingList[i].songId)
            newRankingSongList.push({id: rankingList[i].id, songId: rankingList[i].songId,
            title: song.title, artists: song.artist, album: song.album,
            image: song.image, ranking: rankingList[i].ranking, date: rankingList[i].date,
            notes: rankingList[i].notes, status: rankingList[i].status});
        }

        setRankingSongList(newRankingSongList)
        console.log(rankingSongList)
    };


    return (
    <>
        <div className="l_conatiner"> 
            <div className="listen_list_container">
                <div className="listen_list_header">Ranked Songs</div>
                <div className="listen_list_boxes">
                    {rankingSongList.map((rankingSong) =>
                        <div className="listen_list_box">
                            <div>{rankingSong.title}</div>
                            <div>{rankingSong.artists[0]}</div>
                            <div>{rankingSong.album}</div>
                            <div>{rankingSong.ranking}</div>
                            <div>{rankingSong.date}</div>
                            <div>{rankingSong.notes}</div>
                            <div>{rankingSong.status}</div>
                        </div>
                    )}  
                </div>
            </div>
        </div> 
    </>
  );
};

export default Listening;