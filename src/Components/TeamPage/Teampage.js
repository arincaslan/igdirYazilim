import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from "./Teampage.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import cardImage from '../../images/gatoradePortfolyo.jpg';
import '@splidejs/react-splide/css';
import TeamCard from '../Utility/Card/Card';

const TeamPage = () => {
    



    return(
       <div>
        <div id='teamDirect' className={classes.globalContainer}>
        <div className={classes.midContainer}>
        <Splide options={{
            perPage: 3,
             perMove: 1,
        }} aria-label="My Favorite Images">
            <SplideSlide style={{display:'flex', flexDirection:'row'}}>
            <TeamCard/>
            </SplideSlide>
        </Splide>
        </div>
    </div>
    </div> 
    );
}

export default TeamPage;