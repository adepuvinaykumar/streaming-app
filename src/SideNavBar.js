// src/SideNavBar.js

import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Movie, Tv, SportsSoccer, Theaters } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <div style={{ width: '200px', background: '#161f19', height: '100vh', color: '#fff' }}>
      <List>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <ListItem button>
            <ListItemIcon>
              <Movie style={{ color: '#34a858' }} />
            </ListItemIcon>
            <ListItemText primary="Movies" />
          </ListItem>
        </Link>
        <Link to="/tvshows" style={{ textDecoration: 'none', color: '#fff' }}>
          <ListItem button>
            <ListItemIcon>
              <Tv style={{ color: '#34a858' }} />
            </ListItemIcon>
            <ListItemText primary="TV Shows" />
          </ListItem>
        </Link>
        <Link to="/sports" style={{ textDecoration: 'none', color: '#fff' }}>
          <ListItem button>
            <ListItemIcon>
              <SportsSoccer style={{ color: '#34a858' }} />
            </ListItemIcon>
            <ListItemText primary="Sports" />
          </ListItem>
        </Link>
        <Link to="/documentaries" style={{ textDecoration: 'none', color: '#fff' }}>
          <ListItem button>
            <ListItemIcon>
              <Theaters style={{ color: '#34a858' }} />
            </ListItemIcon>
            <ListItemText primary="Documentaries" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default SideNavBar;
