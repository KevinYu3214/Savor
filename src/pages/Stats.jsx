import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect, useRef } from "react";
import "../components/Song.scss";
import { db, auth } from "../firebase/firebase";
import "../global_styles/Account.scss";
import styles from "../components/Search/Search.module.scss";
import useOnClickOutside from "../components/Search/useOnClickOutside"; // Adjust the path as needed
import { getSong } from "../spotify/Spotify";
import Song from "../components/Song";
import {
  getDocs,
  collection,
  query,
  where
} from "firebase/firestore";

const Stats = () => {
  const [songList, setSongList] = useState([]);
  const [rankingList, setRankingList] = useState([]);
  const [rankingSongList, setRankingSongList] = useState([]);
  const songCollectionList = collection(db, "Song");
  const rankingCollectionList = collection(db, "Ranking");
  const modalRef = useRef();
  const [currResult, setCurrResult] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [selectedDropdownText, setSelectedDropdownText] = useState("All Songs");

  useEffect(() => {
      getRankingList();
  }, []);

  const getRankingList = async () => {
      try {
          const rankingQuerySnapshot = await getDocs(query(rankingCollectionList, where("userId", "==", auth.currentUser.uid)));
          const rankingData = rankingQuerySnapshot.docs.map((doc) => doc.data());
          const songIds = rankingData.map((ranking) => ranking.songId);
          if (songIds.length > 0) {
              const songQuerySnapshot = await getDocs(query(songCollectionList, where("songId", "in", songIds)));
              const songs = songQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
              setSongList(songs);
          }
          setRankingList(rankingData);
      } catch (error) {
          console.error("Error fetching ranking list:", error);
      }
  };

  const makeRankingSong = (modList) => {
      const newRankingSongList = modList.map((ranking) => {
          const song = songList.find((song) => song.songId === ranking.songId);
          return {
              id: ranking.id,
              songId: ranking.songId,
              title: song.title,
              artists: song.artist,
              album: song.album,
              image: song.image,
              ranking: ranking.ranking,
              date: ranking.date,
              notes: ranking.notes,
              status: ranking.status
          };
      });
      setRankingSongList(newRankingSongList);
  };

  const handleDropdownChange = (text) => {
      setSelectedDropdownText(text);
      switch (text) {
          case "All Songs":
              makeRankingSong([...rankingList]);
              break;
          case "Listened":
          case "Plan to Listen":
          case "Favorites":
              makeRankingSong(rankingList.filter(song => song.status === text));
              break;
          case "Highest Rated":
              makeRankingSong([...rankingList].sort((a, b) => b.ranking - a.ranking));
              break;
          case "Lowest Rated":
              makeRankingSong([...rankingList].sort((a, b) => a.ranking - b.ranking));
              break;
          default:
              break;
      }
  };

  const handleClick = async (rankingSong) => {
      const result = await getSong(rankingSong.songId);
      setCurrResult(result);
      setIsShown(true);
  };

  return (
      <>
          <div className="lift"></div>
          <div className="l_container">
              <div className="listen_list_container">
                  <div className="listen_list_header"> Your Ranked Songs! </div>
                  <input
                      className="dropdown_stats"
                      type="checkbox"
                      id="dropdown_stats"
                      name="dropdown"
                  />
                  <label className="for-dropdown_stats" htmlFor="dropdown_stats">
                      {selectedDropdownText} <i className="uil uil-arrow-down"></i>
                  </label>
                  <div className="section-dropdown_stats">
                      {["All Songs", "Listened", "Plan to Listen", "Favorites", "Highest Rated", "Lowest Rated"].map(
                          (text, index) => (
                              <a
                                  key={index}
                                  href="#"
                                  className={`dropdown-link_stats ${
                                      selectedDropdownText === text ? "active" : ""
                                  }`}
                                  onClick={(e) => {
                                      e.preventDefault();
                                      handleDropdownChange(text);
                                  }}
                              >
                                  {text} <i className="uil uil-plus toggle-icon"></i>
                              </a>
                          )
                      )}
                  </div>
                  <div className="listen_list_boxes">
                      {rankingSongList.length > 0 && rankingSongList.map((rankingSong) =>
                          <div className="listen_list_box"
                              onClick={() => handleClick(rankingSong)}
                              key={rankingSong.id}>
                              <div className="listen_list_box__song">
                                  <img
                                      src={rankingSong.image}
                                      alt="Song"
                                      className="listen_list_box__song__image" />
                                  <div className="listen_list_box__song__contents">
                                      <div className="listen_list_box__song__contents__title">{rankingSong.title}</div>
                                      <div className="listen_list_box__song__contents__artist">{rankingSong.artists}</div>
                                      <div className="listen_list_box__song__contents__album">{rankingSong.album}</div>
                                  </div>
                              </div>
                              <div className="listen_list_box__ranking">
                                  {(rankingSong.ranking != null) && <div className="listen_list_box__ranking__container">
                                      <div className="listen_list_box__ranking__container__title">Ranking: </div>
                                      <div className="listen_list_box__ranking__container__content">{rankingSong.ranking}</div>
                                  </div>}
                                  {(rankingSong.date != "") && <div className="listen_list_box__ranking__container">
                                      <div className="listen_list_box__ranking__container__title">Date: </div>
                                      <div className="listen_list_box__ranking__container__content">{rankingSong.date}</div>
                                  </div>}
                                  {(rankingSong.notes != null) && <div className="listen_list_box__ranking__container">
                                      <div className="listen_list_box__ranking__container__title">Notes: </div>
                                      <div className="listen_list_box__ranking__container__content">{rankingSong.notes}</div>
                                  </div>}
                                  {(rankingSong.status != null) && <div className="listen_list_box__ranking__container">
                                      <div className="listen_list_box__ranking__container__title">Status: </div>
                                      <div className="listen_list_box__ranking__container__content">{rankingSong.status}</div>
                                  </div>}
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
          {isShown && (
              <div className={styles.overlay}>
                  <div ref={modalRef}>
                      <Song result={currResult} />
                  </div>
              </div>
          )}
      </>
  );
}

export default Stats;
