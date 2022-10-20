import React from "react";
import ReactDOM from "react-dom/client";
import classes from "./Mainheader.module.css";
import Container from "@mui/material/Container";


const MainHeader = () => {
  return (
    <div className={classes.page1Container}>
    <div className={classes.page1ContentsContainer}>
        <div className={classes.Page1textContainer}>
            <h1><span>Best</span> Car</h1>
            <h4>SERVİCES</h4>
            <p>A regular service schedule can help keep your car running at it’s best. A regular service schedule can help keep your car running at it’s best.</p>
            <div className={classes.buttonContainer}>read more</div>
        </div>
    </div>
</div>
  
  );
};

export default MainHeader;
