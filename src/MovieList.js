import React, { useState, useEffect } from 'react';
import { fetchMovies } from './Api';
import { Grid, Card, CardMedia, CardContent, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    getMovies();
  }, []);

  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item xs={6} sm={4} md={3} key={movie.id}>
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Rating value={movie.vote_average / 2} precision={0.5} readOnly />
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
