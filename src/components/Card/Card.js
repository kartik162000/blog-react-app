import React from "react";
import clapIcon from "/Users/kartik_goel/Desktop/front_end week/blog-post/src/assets/Icons/clapping.svg";
import heartRedIcon from "/Users/kartik_goel/Desktop/front_end week/blog-post/src/assets/Icons/heart-red.svg";
import heartBlankIcon from "/Users/kartik_goel/Desktop/front_end week/blog-post/src/assets/Icons/heart-black.svg";
import { useState } from "react";

import "./Card.css";
function Card({ date, readingTime, title, description, claps, liked, image }) {
  const [countClap, setCountClap] = useState(claps);
  const [isLiked, setIsLiked] = useState(liked);
  const clickHandler = () => {
    setCountClap(countClap + 1);
  };

  const heartClickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card-main">
      <div className="card-image">
        <img src={require(`../../assets/images/${image}`)} alt="image" />
      </div>
      <div className="card-content">
        <div className="card-caption">
          <div className="card-date">{date}</div>
          <div className="card-reading-time">{readingTime}</div>
        </div>
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <hr id="cardLine"></hr>
        <div className="card-footer">
          <div className="card-clap">
            <img src={clapIcon} alt="clap" onClick={clickHandler} />
            <div className="card-clap-count">{countClap}</div>
          </div>
          <div className="card-heart">
            {isLiked ? (
              <img src={heartRedIcon} alt="heart" onClick={heartClickHandler} />
            ) : (
              <img
                src={heartBlankIcon}
                alt="heart"
                onClick={heartClickHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
