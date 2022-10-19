import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Footer.module.css';

const Footer = () => {


    return(
    <div className={classes.footerContainer}>
            <div className={classes.rightContainer}>
                    <div className={classes.iconContainer}></div>
            </div>
            <div className={classes.devider}></div>
            <div className={classes.leftContainer}>
                <div className={classes.textContainer}>
                    <h5> Footer Başlığı </h5>    
                    <p> Footer Yazıları </p>           
                </div>
            </div>
        </div>
    
    );
}

export default Footer;