import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from "./Teampage.module.css";
import Navbar from '../Navbar/Navbar';



const TeamPage = () => {


    return(
       <div>
        <Navbar></Navbar>



        <div className={classes.globalContainer}>
        <div className={classes.midContainer}>
            <div className={classes.textContainer}>
                <h2> Ekibimiz </h2>
                <p> İğdir Yazılım A.Ş. olarak, alanlarında uzman yazılımcılarla çalışmak için özen gösteriyoruz. 6'sı kadrolu ve 12'si free-lance olarak çalışan yazılımcılarımızla 18 kişilik bir aile oluşturduk. En güncel teknolojileri en iyi şekilde uygulayan 6 yazılım mühendisimizle tanışın...</p>
            </div>
        <div className={classes.cardContainer}>
            <div className={classes.card}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                color='#f93340'>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 7a8.998 8.998 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4.004"></path>
                <path d="M19.5 17a8.998 8.998 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4.004"></path>
                <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
            </svg>
                <h5>AKINTÜRK ARINÇ ASLAN</h5>
                <p>Web ve Mobil yazılım Ekibi Koordinatörü</p>
                <p>Uzmanlık Alanı Front-End</p>
                <p>React, React-Native, NodeJs, Javascript, C#</p>
            </div>
            <div className={classes.card}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile-message" 
                width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                color='#f93340'>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11 3h10v8h-3l-4 2v-2h-3z"></path>
                    <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"></path>
                    <path d="M10 18v.01"></path>
                </svg>
                <h5>SEZER SEZER</h5>
                <p>Sezer Serzer Sezer</p>
                <p>Sezer Serzer Sezer</p>
                <p>Sezer Serzer Sezerbababababababababababba</p>
            </div>
            <div className={classes.card}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seo" 
                width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                color='#f93340'>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                    <path d="M14 16h-4v-8h4"></path>
                    <path d="M11 12h2"></path>
                    <rect x="17" y="8" width="4" height="8" rx="1"></rect>
                </svg>
                <h5>MEHMET EMİN</h5>
                <p>Mehmet Emin Emin</p>
                <p>Mehmet Emin Emin</p>
                <p>Mehmet Emin Emin babababababababbabababbabababababa</p>
            </div>
            <div className={classes.card}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seo" 
                width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                color='#f93340'>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                    <path d="M14 16h-4v-8h4"></path>
                    <path d="M11 12h2"></path>
                    <rect x="17" y="8" width="4" height="8" rx="1"></rect>
                </svg>
                <h5>ŞAFAK ŞAFAK</h5>
                <p>ŞAFAK ŞAFAK</p>
                <p>ŞAFAK ŞAFAK</p>
                <p>ŞAFAK ŞAFAK babababababababbabababbabababababa</p>
            </div>
            <div className={classes.card}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seo" 
                width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                color='#f93340'>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                    <path d="M14 16h-4v-8h4"></path>
                    <path d="M11 12h2"></path>
                    <rect x="17" y="8" width="4" height="8" rx="1"></rect>
                </svg>
                <h5>ALİ GÖRKEM</h5>
                <p>ALİ GÖRKEM</p>
                <p>ALİ GÖRKEM</p>
                <p>ALİ GÖRKEM babababababababbabababbabababababa</p>
            </div>
            <div className={classes.card}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seo" 
                width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                color='#f93340'>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                    <path d="M14 16h-4v-8h4"></path>
                    <path d="M11 12h2"></path>
                    <rect x="17" y="8" width="4" height="8" rx="1"></rect>
                </svg>
                <h5>ZİYA ZİYA</h5>
                <p>ZİYA ZİYA</p>
                <p>ZİYA ZİYA</p>
                <p>ZİYA ZİYA babababababababbabababbabababababa</p>
            </div>
        </div>
        </div>
    </div>
    </div> 
    );
}

export default TeamPage;