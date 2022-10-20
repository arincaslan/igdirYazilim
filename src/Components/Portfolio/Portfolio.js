import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Portfolio.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardImage from '../../images/gatoradePortfolyo.jpg';
import cardImage2 from '../../images/teamzone.jpg';
import cardImage3 from '../../images/alfahukukPortfolyo.jpg';


const Portfolio = () => {


    return(
    <div id='portfolyo' className={classes.cardsContainer}>
        <div className={classes.textContainer}>
            <h2> Portfolyo </h2>
            <p> İğdir Yazılım A.Ş. olarak, alanımızda iddialıyız. Yapmış olduğumuz birkaç proje örneğini sizile paylaşmaltan gurur duyarız.</p>
        </div>
        <div className={classes.cardAreHere}>
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
                    image={cardImage2}
                    alt="gatorade teamzone"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gatorade TeamZone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gatorade Teamzone web Sitesi için Silikon Vadisi Pepsi Ekibiyle birlikte çalıştık...
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.Card} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage3}
                    alt="alfa hukuk"
                            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Alfa Hukuk
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Alfa Hukuk web sitesini mobil, tablet, web uyumlu olarak hayata geçirdik...
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
    
    );
}

export default Portfolio;