import React from 'react';
import ReactDOM from 'react-dom/client';
import MainHeader from './MainHeader/MainHeader';
import { Container } from '@mui/system';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const MainPage = () => {


    return(
    <div>
        <div>
            <Navbar/>
            <MainHeader/>
        </div>
        <Services/>
    </div>
    
    );
}

export default MainPage;