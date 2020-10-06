import React from "react";
import classes from "../PersonPage/PersonPage.module.css";
import profile from "../../Components/Constant/Constant";
import { withRouter } from "react-router-dom";
import { Card, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonPage = ({ newProfile, match }) => {
  const info = profile.info;
  const renderProfile = [...newProfile, ...info];
  let newArr = renderProfile.find((item) => {
    return item.id === match.params.id ? item : false;
  });
  return (
    <div>
      {newArr === undefined ? (
        <div className={classes.Alert}>
          <Alert variant="danger"> USER NOT FOUND</Alert>
          <Link to="/">
            <Button variant="primary" size="lg" className={classes.Btn}>
              Назад
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <Card className={classes.Container}>
            <div className={classes.PersonName}>
              <a href={newArr.socialNetworks}>
                {newArr.name + " " + newArr.sername}
              </a>
            </div>
            <Card.Img variant="top" src={newArr.img} className={classes.Img} />

            <Card.Body>
              <Card.Text className={classes.CardText}>
                {" "}
                {newArr.deskription}
              </Card.Text>
            </Card.Body>
            <Link to="/">
              <Button variant="primary" size="lg" className={classes.Btn}>
                Назад
              </Button>
            </Link>
          </Card>
          <Link to="/InputForm" style={{ textDecoration: "none" }}>
            <div className={classes.BtnArea}>
              <Button variant="primary" size="md">
                <h3>Добавить</h3>
              </Button>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default withRouter(PersonPage);
