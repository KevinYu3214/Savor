import React from "react";
import "../components/Star.scss";

const Star = ({ song_id }) => {
  return (
    <span className={`star__container song_${song_id}`}>
      <input
        type="radio"
        name={`rating_${song_id}`}
        value="1"
        id={`star-1_${song_id}`}
        className={`star__radio visuhide song_${song_id}`}
      ></input>
      <input
        type="radio"
        name={`rating_${song_id}`}
        value="2"
        id={`star-2_${song_id}`}
        className={`star__radio visuhide song_${song_id}`}
      ></input>
      <input
        type="radio"
        name={`rating_${song_id}`}
        value="3"
        id={`star-3_${song_id}`}
        className={`star__radio visuhide song_${song_id}`}
      ></input>
      <input
        type="radio"
        name={`rating_${song_id}`}
        value="4"
        id={`star-4_${song_id}`}
        className={`star__radio visuhide song_${song_id}`}
      ></input>
      <input
        type="radio"
        name={`rating_${song_id}`}
        value="5"
        id={`star-5_${song_id}`}
        className={`star__radio visuhide song_${song_id}`}
      ></input>

      <label
        className={`star__item song_${song_id}`}
        htmlFor={`star-1_${song_id}`}
      >
        <span className="visuhide">1 star</span>
      </label>
      <label
        className={`star__item song_${song_id}`}
        htmlFor={`star-2_${song_id}`}
      >
        <span className="visuhide">2 stars</span>
      </label>
      <label
        className={`star__item song_${song_id}`}
        htmlFor={`star-3_${song_id}`}
      >
        <span className="visuhide">3 stars</span>
      </label>
      <label
        className={`star__item song_${song_id}`}
        htmlFor={`star-4_${song_id}`}
      >
        <span className="visuhide">4 stars</span>
      </label>
      <label
        className={`star__item song_${song_id}`}
        htmlFor={`star-5_${song_id}`}
      >
        <span className="visuhide">5 stars</span>
      </label>
    </span>
  );
};

export default Star;
