// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        Welcome to the Diet Tracker project
      </Typography>
      <Typography variant="h5" gutterBottom>
        your Diet, your priority
      </Typography>
       <Box mt={4}>
        <Button 
          component={Link} 
          to="/person-list" // Updated to link to the ShowBookList component
          color="primary" 
          variant="contained"
        >
          View Persons
        </Button>
        <Button 
          component={Link} 
          to="/person-export" // Link to the Export page component
          color="primary" 
          variant="contained"
        >
          Export-list
        </Button>
      </Box> 
    </Container>
  );
};

export default HomePage;