import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeartO } from "@fortawesome/free-regular-svg-icons";

import classes from "./Card.module.css";

const Card = ({
  moviePoster,
  movieTitle,
  favHandler,
  isFav,
  removeFromFav,
}) => {
  return (
    <div
      className={classes.cardWrapper}
      style={{ backgroundImage: `url(${moviePoster})` }}
    >
      <FontAwesomeIcon
        className={classes.favIcon}
        icon={isFav ? faHeartBroken : farHeartO}
        color="red"
        size="2x"
        title={
          isFav ? "Remove from your favorite list" : "Add to your favorite list"
        }
        onClick={() => {
          if (isFav) {
            removeFromFav();
          } else {
            favHandler();
          }
        }}
      />
    </div>
  );
};

export default Card;
