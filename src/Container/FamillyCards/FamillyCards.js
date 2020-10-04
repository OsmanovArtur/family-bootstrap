import React from "react";
import { Card } from "react-bootstrap";
import classes from "./FamillyCards.module.css";
import profile from "../../Components/Constant/Constant";
import { Link, withRouter } from "react-browser-router";
import { Button } from "react-bootstrap";

const FamillyCards = ({ newProfile }) => {
  const info = profile.info;
  const newArr = [...info, ...newProfile];
  let renderProfile = newArr.map((item, index) => {
    return (
      <div className={classes.Container} key={index}>
        <Link to={`/PersonPage/${item.id}`} style={{ textDecoration: "none" }}>
          <Card bg="Light" className={classes.Card} text="dark">
            <Card.Header className={classes.Header}>
              <h1>{item.name + " " + item.sername}</h1>
            </Card.Header>
            <Card.Title></Card.Title>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <>
      <Link to="/InputForm">
        <Button variant="outline-secondary" className={classes.Btn}>
          <h3 className={classes.BtnText}>Добавить </h3>
        </Button>
      </Link>

      <div className={classes.ContainerArea}>{renderProfile}</div>
    </>
  );
};
export default withRouter(FamillyCards);
