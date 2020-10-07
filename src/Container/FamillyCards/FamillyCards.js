import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./FamillyCards.module.css";
import profile from "../../Components/Constant/Constant";
import { Link, withRouter } from "react-browser-router";
import { Button } from "react-bootstrap";

const FamillyCards = ({ newProfile }) => {
  const info = profile.info;
  const newArr = [...info, ...newProfile];

  return (
    <div>
      <Carousel className={classes.Carousel}>
        {newArr.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <Link to={`/PersonPage/${item.id}`} className={classes.Link}>
                <div className={classes.Container}>
                  <img src={item.img} alt={item.alt} className={classes.Img} />
                  <div className={classes.Caption}>
                    <Carousel.Caption>
                      <h3>{item.name + " " + item.sername}</h3>

                      <p>Подробнее</p>
                    </Carousel.Caption>
                  </div>
                </div>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Link to="/InputForm" className={classes.Link}>
        <div className={classes.BtnArea}>
          <Button variant="primary" size="md">
            <h3>Добавить</h3>
          </Button>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(FamillyCards);
