import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import About from "./components/About";
import Albums2 from "./components/Albums2";
import Album from "./components/Album";
import DetailsAlbum from "./components/DetailsAlbum";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


function App() {
  let nom = "Hello Madagascar";

  return (
  <Container fixed>
    <Typography component="div" style={{ backgroundColor: '#fafafa', height: '100vh', textAlign: 'justify' }} >
    <div className="App">
      <BrowserRouter>
        
        <Route exact path="/" component={GroupeRock}></Route>
        <Route path="/a-propos" component={About}></Route>
        <Route path="/details-album/:id" component={DetailsAlbum}></Route>
        
        <Route path="/album" component={Album} />
      </BrowserRouter>
    </div>
    </Typography>
  </Container>
  );
}

export default App;
