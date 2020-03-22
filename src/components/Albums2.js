import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Album.css";

import metallica from "../data/mettalica";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Albums2() {
  const classes = useStyles();
  console.log(metallica);

  let i = 0;
  let listeCover=[];
  metallica.albums.map((m, index) => {
    //console.log("ato @ andrana "+m.songs);
  if(m.cover !=null){
    console.log("ato @ mamoaka ny picture: "+m.cover.big );
    listeCover[i]=m ;
  }
  i++;
  });
  
  
  return (
    listeCover.map(m => (
    <Card className={classes.root}>
        <CardActionArea>
             <CardMedia
            component="img"
            alt={m.title}
            height="100"
            image={m.cover.big}
            title={m.title}
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {m.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
  </Card>
        )
    )
  )
}
