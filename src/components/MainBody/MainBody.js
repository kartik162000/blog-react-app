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
    <div className="card_area" data-testid="blog-post">
      {blogData.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          date={task.date}
          readingTime={task.readingTime}
          title={task.title}
          description={task.description}
          claps={task.claps}
          liked={task.liked}
          image={task.image}
        />
      ))}
    </div>
  ) : (
    <div className="blogDataLoader">
      {console.log("blogDataLoader")}
      <p>Loading...</p>
    </div>
  );
}

export default MainBody;
