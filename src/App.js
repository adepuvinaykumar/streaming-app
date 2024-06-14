// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import TVShows from './TVShows'; // You will need to create this component
import Sports from './Sports';   // You will need to create this component
import Documentaries from './Documentaries'; // You will need to create this component


function App() {
  return (
    <Router>
      <NavBar />
      <Box display="flex">
        <SideNavBar />
        <Box component="main" flexGrow={1} p={3}>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/documentaries" element={<Documentaries />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
