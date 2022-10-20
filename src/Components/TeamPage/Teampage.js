import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from "./Teampage.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardImage from '../../images/gatoradePortfolyo.jpg';
import '@splidejs/react-splide/css';


const TeamPage = () => {


    return(
       <div>
        <div id='teamDirect' className={classes.globalContainer}>
        <div className={classes.midContainer}>
        <Splide aria-label="My Favorite Images">
            <SplideSlide style={{display:'flex', flexDirection:'row'}}>
            <Card className={classes.Card} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt="gatorade"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gatorade
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gatorade web Sitesi için Silikon Vadisi Pepsi Ekibiyle birlikte çalıştık...
                    </Typography>
                 </CardContent>
            </Card>
            <Card className={classes.Card} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt="gatorade"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gatorade
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gatorade web Sitesi için Silikon Vadisi Pepsi Ekibiyle birlikte çalıştık...
                    </Typography>
                 </CardContent>
            </Card>
            <Card className={classes.Card} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt="gatorade"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gatorade
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gatorade web Sitesi için Silikon Vadisi Pepsi Ekibiyle birlikte çalıştık...
                    </Typography>
                 </CardContent>
            </Card>
            </SplideSlide>
            <SplideSlide style={{display:'flex', flexDirection:'row'}}>
            <Card className={classes.Card} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt="gatorade"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gatorade
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gatorade web Sitesi için Silikon Vadisi Pepsi Ekibiyle birlikte çalıştık...
                    </Typography>
                 </CardContent>
            </Card>
            <Card className={classes.Card} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt="gatorade"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gatorade
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gatorade web Sitesi için Silikon Vadisi Pepsi Ekibiyle birlikte çalıştık...
                    </Typography>
                 </CardContent>
            </Card>
            <Card className={classes.Card} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt="gatorade"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gatorade
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gatorade web Sitesi için Silikon Vadisi Pepsi Ekibiyle birlikte çalıştık...
                    </Typography>
                 </CardContent>
            </Card>
            </SplideSlide>
            <SplideSlide>
                <TextField>Element 2</TextField>
            </SplideSlide>
            <SplideSlide>
                <TextField>Element 2</TextField>
            </SplideSlide>
        </Splide>
        </div>
    </div>
    </div> 
    );
}

export default TeamPage;