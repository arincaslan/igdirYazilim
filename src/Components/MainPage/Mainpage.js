import React from 'react';
import ReactDOM from 'react-dom/client';
import MainHeader from './MainHeader/MainHeader';
import { Container } from '@mui/system';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import TeamPage from '../TeamPage/Teampage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const MainPage = () => {


    return(
    <div>
        <div>
            <Navbar/>
            <MainHeader/>
        </div>
        <Services/>
        <About/>
        <TeamPage/>
        <Portfolio/>
        <Footer/>
    </div>
    
    );
}

export default MainPage;