import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./FamillyCards.module.css";
import profile from "../../Components/Constant/Constant";
import { Link, withRouter } from "react-browser-router";
import { Button } from "react-bootstrap";

const FamillyCards = ({ newProfile }) => {
  const info = profile.info;
  const newArr = [...info, ...newProfile];
  let renderProfile = [];
  return (
    <div>
      <Carousel className={classes.Carousel}>
        {
          (renderProfile = newArr.map((item, index) => {
            return (
              <Carousel.Item id={index}>
                <Link
                  to={`/PersonPage/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={classes.Container}>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "500px",
                        height: "300px",
                      }}
                    />
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
          }))
        }
      </Carousel>
      <Link to="/InputForm" style={{ textDecoration: "none" }}>
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
