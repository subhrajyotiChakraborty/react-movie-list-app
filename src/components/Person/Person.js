import React from "react";
import Avatar from "react-avatar";
import { NavItem } from "react-bootstrap";

import * as classes from "./Person.module.css";

const Person = ({ name }) => {
  return (
    <div className={classes.personWrapper}>
      <div className={classes.avatarStyle}>
        <Avatar name={name} size="40" round />
      </div>
      <div className={classes.nameStyle}>
        <a href={`https://en.wikipedia.org/wiki/${name}`} target="blank">
          {name}
        </a>
      </div>
    </div>
  );
};

export default Person;
