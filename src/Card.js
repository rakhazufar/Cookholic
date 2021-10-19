import React from "react";
import Food from "./assets/food.jpg";

function Card({
  title = "Food not Found",
  image = Food,
  summary = "Sorry, I guess something wrong here",
}) {
  const caption = summary.slice(0, 50) + "...see recipe for more";
  const cleanText = caption.replace(/<\/?[^>]+(>|$)/g, "");
  const newTitle = title.slice(0, 20) + "...";
  return (
    <>
      {title && (
        <div className="card">
          <img src={image} alt="" />
          <div className="blur-effect"></div>
          <div className="caption">
            <h3>{newTitle}</h3>
            <p>{cleanText}</p>
          </div>
          <button>
            <span>See Recipe</span>
          </button>
        </div>
      )}
    </>
  );
}

export default Card;
