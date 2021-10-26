import React from "react";
import Food from "./assets/food.jpg";
import { useHistory } from "react-router";
import { Rating } from "@mui/material";

function Card({
  title = "Food not Found",
  image = Food,
  summary = "Sorry, I guess something wrong here",
  foodID,
  score,
}) {
  const history = useHistory();
  const showDetail = () => {
    //check if food ID is true or not
    if (!foodID) {
      history.push("/noresult");
    }
    history.push("/fullrecipe", { foodID });
  };

  const caption = summary.slice(0, 100) + `<button>...click for more</button>`;
  const cleanText = caption.replace(/<\/?[^>]+(>|$)/g, "");
  let newTitle = title;
  if (title.length > 18) {
    newTitle = title.slice(0, 18) + "...";
  }

  return (
    <>
      {title && (
        <div className="card" onClick={showDetail}>
          <img src={image} alt="" />
          <div className="blur-effect"></div>
          <div className="caption">
            <h3>{newTitle}</h3>
            <p>{cleanText}</p>
            <div className="rating">
              <Rating
                name="read-only"
                value={score / 20}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
