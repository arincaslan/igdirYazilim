import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './About.module.css';

const About = () => {


    return(
    <div id='aboutDirect' className={classes.page3Container}>
        <div className ={classes.page3textContainer}>
            <h2>We engage positive communication</h2>
                <p><b>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. </b></p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <div class={classes.page3imgContainer}></div>
    </div>
    );
}

export default About;