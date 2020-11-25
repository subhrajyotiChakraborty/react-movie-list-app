import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeartO } from "@fortawesome/free-regular-svg-icons";

import classes from "./Card.module.css";

const Card = ({ moviePoster, movieTitle }) => {
  const [fav, setFav] = useState(false);

  return (
    <div
      className={classes.cardWrapper}
      style={{ backgroundImage: `url(${moviePoster})` }}
    >
      <FontAwesomeIcon
        className={classes.favIcon}
        icon={fav ? faHeart : farHeartO}
        color="red"
        size="2x"
        onClick={() => setFav(!fav)}
      />
    </div>
  );
};

export default Card;
