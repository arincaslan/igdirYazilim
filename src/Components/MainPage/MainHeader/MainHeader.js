import React from "react";
import ReactDOM from "react-dom/client";
import classes from "./Mainheader.module.css";
import headİmage from "../../../images/head-2.jpg";
import Container from "@mui/material/Container";


const MainHeader = () => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.box}></div>
        <div className={classes.car}>
          <div className={classes.img}>
            <img src={headİmage}></img>
          </div>
        </div>
      </div>

    <div className={classes.textContainer}>
        <div className={classes.border}></div>
        <div className={classes.text}>
          <h1>En Kaliteli Yazılım</h1>
          <h3>HİZMETİ</h3>
          <p>
            A regular service schedule can help keep your car running at it’s
            best. A regular service schedule can help keep your car running at
            it’s best.
          </p>
          <div className={classes.button}>read more</div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
