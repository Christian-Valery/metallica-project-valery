import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./About.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";
import AbstractGroupe from "./AbstractGroupe";
import RecordLabelGroup from "./RecordLabelGroup";
import MembreActuel from "./MembreActuel";
import MembreAncien from "./MembreAncien";
import ListeChansons from "./ListeChansons";

const GroupeRock = () => {
  console.log(metallica);
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
  ));
  let imageGroupe = metallica.picture.medium;
  let nomGroupe = metallica.name;
  let birthdayGroup = metallica.lifeSpan.begin;
  let locationInfo = metallica.locationInfo[0]+" - "+metallica.locationInfo[1]+" - "+metallica.locationInfo[2];
  let genreMusic = metallica.genres[0] + " - " +metallica.genres[1];
  let genreMusicDB = metallica.dbp_genre;
  let label = metallica.recordLabel[0] + " - " + metallica.recordLabel[1];
  let recordLabel = metallica.recordLabel[0] + " - " + metallica.recordLabel[1] 
  + " - " + metallica.recordLabel[2] + " - " + metallica.recordLabel[3] + " - " + metallica.recordLabel[4]
  + " - " + metallica.recordLabel[5] + " - " + metallica.recordLabel[6] ;
  let deezerFans=metallica.deezerFans;
  let membresActuel = metallica.members.map((m, index) => {
      //console.log("mis ato : "+m+" index : "+index+" valeur : " + m.ended );
      if(m.ended == false){
        return <MembreActuel membre={m} key={index} />
      }     
    }
  );
  let membresAncien = metallica.members.map((m, index) => {
    //console.log("mis ato : "+m+" index : "+index+" valeur : " + m.ended );
    console.log("ny lien azo : "+imageGroupe);
    if(m.ended){
      return <MembreAncien membre={m} key={index} />
      }     
    }
  );
  let listeChansons = metallica.albums.map((m, index) => {
    //console.log("ato @ andrana "+m.songs);
    //console.log("ato @ mamoaka ny picture: "+m.cover);
    
/*
    {m.songs.map((chansons, j) => (
      console.log( chansons.title ))
    )}*/
    //console.log({chansons});
    return <ListeChansons listeSong={m} key={index}/>
  });

  return (
    <TableContainer component={Paper}>
      <p><img alt="Image du groupe" 
        src={imageGroupe}/></p>
      <strong>{nomGroupe}</strong>      
      
      <Table class="classTab" size="small">
        <TableHead>
          <TableRow border="0" >
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody border="0">
            <TableRow border="0" >
                <TableCell border="0" component="th" scope="row">Birthdate</TableCell>
                <TableCell border="0" component="th" scope="row">{birthdayGroup}</TableCell>  
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Location</TableCell>
                <TableCell component="th" scope="row">{locationInfo}</TableCell> 
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Genre</TableCell>
                <TableCell component="th" scope="row">{genreMusic}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Label</TableCell>
                <TableCell component="th" scope="row">{label}</TableCell>  
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Genre Music DB</TableCell>
                <TableCell component="th" scope="row">{genreMusicDB}</TableCell>  
            </TableRow>  
            <TableRow>
                <TableCell component="th" scope="row">record Label</TableCell>
                <TableCell component="th" scope="row">{recordLabel}</TableCell>  
            </TableRow>    
            <TableRow>
                <TableCell component="th" scope="row">deezerFans</TableCell>
                <TableCell component="th" scope="row">{deezerFans}</TableCell>  
            </TableRow>    
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GroupeRock;
