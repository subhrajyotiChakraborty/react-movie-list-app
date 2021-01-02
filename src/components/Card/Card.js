import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeartO } from "@fortawesome/free-regular-svg-icons";

import classes from "./Card.module.css";
import default_image from "../../assets/media/images/default_image.png";

const Card = ({
  moviePoster,
  movieTitle,
  favHandler,
  isFav,
  removeFromFav,
  handleModalOpen,
}) => {
  return (
    <div>
      <div
        className={classes.cardWrapper}
        style={{
          backgroundImage: `url(${
            moviePoster === "N/A" ? default_image : moviePoster
          })`,
        }}
      >
        <div
          className={classes.favIcon}
          onClick={() => {
            if (isFav) {
              removeFromFav();
            } else {
              favHandler();
            }
          }}
        >
          <FontAwesomeIcon
            icon={isFav ? faHeartBroken : farHeartO}
            color="red"
            size="2x"
            title={
              isFav
                ? "Remove from your favorite list"
                : "Add to your favorite list"
            }
          />
        </div>
      </div>
      <p className={classes.movieTitleStyle} onClick={handleModalOpen}>
        {movieTitle}
      </p>
    </div>
  );
};

export default Card;
