import React from "react";
import clapIcon from "/Users/kartik_goel/Desktop/front_end week/blog-post/src/assets/Icons/clapping.svg";
import heartRedIcon from "/Users/kartik_goel/Desktop/front_end week/blog-post/src/assets/Icons/heart-red.svg";
import heartBlankIcon from "/Users/kartik_goel/Desktop/front_end week/blog-post/src/assets/Icons/heart-black.svg";
import { PropTypes } from "prop-types";
import { useState } from "react";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_BLOG_DATA } from "../../constants/apiEndPoints";
import "./Card.css";
function Card({
  id,
  date,
  readingTime,
  title,
  description,
  claps,
  liked,
  image,
}) {
  const [countClap, setCountClap] = useState(claps);
  const [isLiked, setIsLiked] = useState(liked);
  const clickHandler = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(id), {
        data: { claps: countClap + 1 },
      });
      setCountClap(countClap + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const heartClickHandler = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(id), {
        data: { liked: !isLiked },
      });
      setIsLiked(!isLiked);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="card-main">
      <div className="card-image">
        <img src={image} alt="image" />
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

Card.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  claps: PropTypes.number,
  liked: PropTypes.bool,
  image: PropTypes.string,
};

export default Card;
