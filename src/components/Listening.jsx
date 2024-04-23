import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect, useRef } from "react";
import "../components/Song.scss";
import { db, auth } from "../firebase/firebase";
import styles from "./Search/Search.module.scss";
import useOnClickOutside from "./Search/useOnClickOutside"; // Adjust the path as needed
import { getSong } from "../spotify/Spotify";
import Song from "./Song";
import {
  getDocs,
  collection,
  query,
  where
} from "firebase/firestore";

const Listening = ({ }) => {
    //Auth info
    const { currentUser } = useAuth();
    const email = currentUser ? currentUser.email: "";

    //Firebase info
    const [songList, setSongList] = useState([]);
    const [rankingList, setRankingList] = useState([]);
    const [rankingSongList, setRankingSongList] = useState([]);
    const songCollectionList = collection(db, "Song");
    const rankingCollectionList = collection(db, "Ranking");

    //Song component displaying
    const modalRef = useRef(); // Ref for the modal content
    const [currResult, setCurrResult] = useState("");
    const [isShown, setIsShown] = useState(false);

    // Use the hook to close the modal when clicking outside
    useOnClickOutside(modalRef, () => setIsShown(false));

    const handleClick = async (rankingSong) => {
        const result = await getSong(rankingSong.songId);
        setCurrResult(result)
        console.log(currResult)
        setIsShown(true);
    };

    useEffect(() => {
        getRankingList();
    }, [isShown]);

    useEffect(() => {
        getRankingList();
     }, []);

    useEffect(() => {
        if(rankingList.length > 0 ){
            makeRankingSong();
            rankingSongList.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }, [rankingList]);

    const getRankingList = async () => {
        //Query to find rankings
        const rankingQuery = query(
            rankingCollectionList,
            where("userId", "==", auth.currentUser.uid)
        );
        const rankingQuerySnapshot = await getDocs(rankingQuery);   
        const songIDList = rankingQuerySnapshot.docs.map((doc) => doc.data().songId);
            
        //Query to find songs
        if (songIDList.length !== 0) {
            const songQuery = query(
                songCollectionList,
                where("songId", "in", songIDList)
            );
            const songQuerySnapshot = await getDocs(songQuery);
            const songs = songQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSongList(songs);
        }
    
        const rankings = rankingQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setRankingList(rankings);
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
    };
  
    return (
    <>
        <div className="l_conatiner"> 
            <div className="listen_list_container">
                <div className="listen_list_header">Ranked Songs</div>
                <div className="listen_list_boxes">
                    {rankingSongList.length > 0 && rankingSongList.map((rankingSong) =>
                        <div className="listen_list_box" 
                        onClick={() => handleClick(rankingSong)}
                        key={rankingSong.id}>
                            <div className="listen_list_box__song">
                                <img
                                    src={rankingSong.image}
                                    alt="Song"
                                    className="listen_list_box__song__image"/>
                                <div className="listen_list_box__song__contents">
                                    <div className="listen_list_box__song__contents__title">{rankingSong.title}</div>
                                    <div className="listen_list_box__song__contents__artist">{rankingSong.artists}</div>
                                    <div className="listen_list_box__song__contents__album">{rankingSong.album}</div>
                                </div>
                            </div>
                            <div className="listen_list_box__ranking">
                                <div className="listen_list_box__ranking__container">
                                    <div className="listen_list_box__ranking__container__title">Ranking: </div>
                                    <div className="listen_list_box__ranking__container__content">{rankingSong.ranking}</div>
                                </div>
                                <div className="listen_list_box__ranking__container">
                                    <div className="listen_list_box__ranking__container__title">Date: </div>
                                    <div className="listen_list_box__ranking__container__content">{rankingSong.date}</div>
                                </div>
                                <div className="listen_list_box__ranking__container">
                                    <div className="listen_list_box__ranking__container__title">Notes: </div>
                                    <div className="listen_list_box__ranking__container__content">{rankingSong.notes}</div>
                                </div>
                                <div className="listen_list_box__ranking__container">
                                    <div className="listen_list_box__ranking__container__title">Status: </div>
                                    <div className="listen_list_box__ranking__container__content">{rankingSong.status}</div>
                                </div>
                            </div>
                        
                        </div>
                    )}  
                </div>
            </div>
        </div> 
        {isShown && (
        <div className={styles.overlay}>
          {/* Attach the ref to the modal content */}
          <div ref={modalRef}>
            <Song result={currResult} />
          </div>
        </div>
      )}
    </>
  );
};

export default Listening;