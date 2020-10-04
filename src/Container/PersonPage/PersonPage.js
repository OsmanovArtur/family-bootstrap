import React from "react";
import classes from "../PersonPage/PersonPage.module.css";
import profile from "../../Components/Constant/Constant";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonPage = ({ newProfile, match }) => {
  const info = profile.info;
  const renderProfile = [...newProfile, ...info];
  let newArr = renderProfile.find((item) => {
    return item.id === match.params.id ? item : false;
  });
  let renderPerson = [];
  return (renderPerson = [newArr].map((item, index) => {
    return (
      <div key={index}>
        {item === undefined ? (
          <div className={classes.Error}>USER NOT FOUND</div>
        ) : (
          <Card className={classes.Container} key={index}>
            <div className={classes.PersonName}>
              <a href={item.socialNetworks}>{item.name + " " + item.sername}</a>
            </div>
            <Card.Img variant="top" src={item.img} className={classes.Img} />

            <Card.Body>
              <Card.Text className={classes.CardText}>
                {" "}
                {item.deskription}
              </Card.Text>
            </Card.Body>
            <Link to="/">
              <Button variant="primary" size="lg" className={classes.Btn}>
                Назад
              </Button>
            </Link>
          </Card>
        )}
      </div>
    );
  }));
};

export default withRouter(PersonPage);
