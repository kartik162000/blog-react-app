import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import "./MainBody.css";
function MainBody() {
  const [blogData, setBlogData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    makeRequest(GET_BLOG_DATA)
      .then((response) => {
        setBlogData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return blogData ? (
    <div>
      <div className="card_area">
        {blogData.map((data) => {
          return (
            <Card
              key={data.id}
              date={data.date}
              readingTime={data.readingTime}
              title={data.title}
              description={data.description}
              claps={data.claps}
              liked={data.liked}
              image={data.image}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default MainBody;
