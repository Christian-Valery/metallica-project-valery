import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import List from '@material-ui/core/List';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import "./GroupeRock.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";
import MembreActuel from "./MembreActuel";
import MembreAncien from "./MembreAncien";
import ListeChansons from "./ListeChansons";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));


const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const useStyles3 = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const GroupeRock = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  console.log(metallica);
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
  ));
  let imageGroupe = metallica.picture.medium;
  let nomGroupe = metallica.name;
  let abstractGroup = metallica.abstract;
  let birthdayGroup = metallica.lifeSpan.begin;
  let locationInfo = metallica.locationInfo[0]+" - "+metallica.locationInfo[1]+" - "+metallica.locationInfo[2];
  let genreMusic = metallica.genres[0] + " - " +metallica.genres[1];
  let genreMusicDB = metallica.Elektra[0] + " - " + metallica.Elektra[1];
  
  let labelDBPedia = "";  metallica.recordLabel.map(m => labelDBPedia+=m+" - " );
  labelDBPedia = labelDBPedia.substring(0, labelDBPedia.length - 3);
  
  let label = metallica.labels[0] + " - " + metallica.labels[1] + " - " + metallica.labels[2] + " - " + metallica.labels[3];
  
  let recordLabel; metallica.recordLabel.map(m=>(recordLabel+=m+" - ")); 
  recordLabel = recordLabel.substring(0, recordLabel.length - 3);
  let deezerFans=metallica.deezerFans;
  
  let associatedMusicalArtist =""; metallica.associatedMusicalArtist.map(m=>(associatedMusicalArtist+=m+" - "));
  associatedMusicalArtist=associatedMusicalArtist.substring(0, associatedMusicalArtist.length-3);

  let membresActuel = metallica.members.map((m, index) => {
      //console.log("mis ato : "+m+" index : "+index+" valeur : " + m.ended );
      if(m.ended == false){
        return <MembreActuel membre={m} key={index} />
      }     
    }
  );
  let membresAncien = metallica.members.map((m, index) => {
    //console.log("mis ato : "+m+" index : "+index+" valeur : " + m.ended );
    //console.log("ny lien azo : "+imageGroupe);
    if(m.ended){
      return <MembreAncien membre={m} key={index} />
      }     
    }
  );

let ind = 0; 
let indice = 0;
let listeCover=[];
let paroles="";
metallica.albums.map(m => {
  //console.log("ato @ andrana "+m.songs);
if(m.cover !=null){
  //console.log("ato @ mamoaka ny picture: "+m.cover.big );
  listeCover[indice]=m ;
}
indice++;
});

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} > 
        <Navbar expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/">Accueil</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
            <Button variant="outline-light">Recherche</Button>
          </Form>
        </Navbar>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} ><img alt="Image du groupe" 
        src={imageGroupe}/></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} style={{fontSize:40, fontFamily: 'Roboto,sans-serif', color:'#333', padding:10 }} >{nomGroupe}</Paper>
      </Grid>
            
            

      <Grid item xs={1} >
        <Paper className={classes.paper}  ><a href={metallica.urlWikipedia}><img style={{width:"100%"}} src="https://wasabi.i3s.unice.fr/img/wikipedia_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a  href={metallica.urlFacebook}><img style={{width:"100%"}} src="https://wasabi.i3s.unice.fr/img/facebook_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlTwitter}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/twitter_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlAmazon}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/amazon_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlYouTube}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/youtube_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlSpotify}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/spotify_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlDeezer}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/deezer_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlITunes}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/itunes_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlSoundCloud}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/soundcloud_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlMySpace}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/myspace_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlMusicBrainz}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/musicbrainz_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlOfficialWebsite}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/website_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlAllmusic}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/allmusic_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlDiscogs}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/discogs_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlPureVolume}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/purevolume_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlRateYourMusic}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/rateyourmusic_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlLastFm}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/lastfm_icon.svg" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlWikipedia}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/discoveryhub_icon.png" /></a></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.paper}  ><a href={metallica.urlWikidata}><img style={{width:"100%"}}  src="https://wasabi.i3s.unice.fr/img/lyricswikia_icon.svg" /></a></Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper} style={{background:'#fafafa',padding: '50px 100px',fontSize:'18px',textAlign:'justify', fontFamily: 'Roboto, sans-serif'}} >{abstractGroup}</Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper} style={{fontSize:'18px',textAlign:'justify', fontFamily: 'Roboto, sans-serif'}}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell component="th" scope="row">  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">Birthdate</TableCell>
                <TableCell component="th" scope="row" > {birthdayGroup} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Location</TableCell>
                <TableCell component="th" scope="row"> {locationInfo} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Genre</TableCell>
                <TableCell component="th" scope="row"> {genreMusic} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Genre (DBpedia)</TableCell>
                <TableCell component="th" scope="row"> {genreMusicDB} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Label</TableCell>
                <TableCell component="th" scope="row"> {label} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Label (DBpedia)</TableCell>
                <TableCell component="th" scope="row"> {labelDBPedia} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Number of Deezer fans</TableCell>
                <TableCell component="th" scope="row"> {deezerFans} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Associated artist(s)</TableCell>
                <TableCell component="th" scope="row"> {associatedMusicalArtist} </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
     
      {listeCover.map(m => (
        <Grid container  spacing={6} >
          <Grid item xs={6}>
            <Paper className={classes.paper}><img src={m.cover.medium} /></Paper>
          </Grid>
          <Grid item xs={6}>
            <List className={classes2.root} horizontal={true} subheader={<li />}>
              {m.songs.map(item => (               
                <ListItem key={`${ind++}- ${item.title} - ${paroles=item.lyrics}`}>
                  <ListItemText primary={<a href={item.urlSong}>{ind} {item.title}</a>} />
                </ListItem>
              ))}   {ind=0}            
            </List>
          </Grid>
        </Grid>
      ))};

    <Grid item xs={12}> 
        <Navbar expand="lg" bg="primary" variant="dark">
          <Nav  class="nav_subject style-scope show-categories">
            {metallica.subject.map(m=> (
              <Button variant="outline-light" style={{padding:20, border:'#007bff'}}>{m}</Button>
            ) )}
          </Nav>
        </Navbar>
      </Grid>
    </Grid>


  );
};

export default GroupeRock;
