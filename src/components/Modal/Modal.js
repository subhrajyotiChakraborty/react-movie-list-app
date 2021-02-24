import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

import * as classes from "./Modal.module.css";
import default_image from "../../assets/media/images/default_image.png";
import Person from "../Person/Person";

const CustomModal = ({ show, handleClose, ...props }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{props.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Row>
            <Col sm={4}>
              <div
                className={classes.moviePoster}
                style={{
                  backgroundImage: `url(${
                    props.Poster === "N/A" ? default_image : props.Poster
                  })`,
                }}
              ></div>
            </Col>
            <Col sm={8} className={classes.moviePlotWrapper}>
              <div>{props.Plot}</div>
            </Col>
          </Row>
        </div>
        <div className={classes.sectionSeparator}>
          <Row>
            {props.Ratings.map(({ Source, Value }) => {
              return (
                <Col key={Source}>
                  <p>
                    {Source}: {Value}
                  </p>
                </Col>
              );
            })}
          </Row>
        </div>
        <div
          className={[classes.sectionSeparator, classes.personsContainer].join(
            " "
          )}
        >
          {props.Actors.split(", ").map((actor) => {
            return <Person key={actor} name={actor} />;
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
