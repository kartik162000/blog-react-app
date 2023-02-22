import React from "react";
import Card from "../Card/Card";
import { stockData } from "../../assets/data";

import "./MainBody.css";
function MainBody() {
  return (
    <div>
      <div className="card_area">
        {stockData.map((data) => {
          return (
            <Card
              date={data.date}
              readingTime={data.readingTime}
              title={data.title}
              description={data.description}
              claps={data.claps}
              liked={data.liked}
              image={data.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainBody;
