import React, { useState, useEffect } from "react";
import "../components/Star.scss";

const Star = ({ song_id, onRankingClick, startValue }) => {
  const [selectedValue, setSelectedValue] = useState(startValue);

  useEffect(() => {
    // Update selectedValue when startValue changes
    setSelectedValue(startValue);
  }, [startValue]);

  // Inside handleClick function
  const handleClick = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);
    setSelectedValue(value);
    onRankingClick(value); // Pass the selected rating back to the parent component
  };

  return (
    <span className={`star__container song_${song_id}`} onChange={(e) => handleClick(e)}>
      {[1, 2, 3, 4, 5].map((value) => (
        <React.Fragment key={value}>
          <input
            type="radio"
            name={`rating_${song_id}`}
            value={value}
            id={`star-${value}_${song_id}`}
            className={`star__radio visuhide song_${song_id}`}
            checked={value === selectedValue}
          />
          <label
            className={`star__item song_${song_id}`}
            htmlFor={`star-${value}_${song_id}`}
          >
            <span className="visuhide">{value} star</span>
          </label>
        </React.Fragment>
      ))}
    </span>
  );
};

export default Star;
