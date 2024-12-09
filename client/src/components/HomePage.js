import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        Welcome To The Diet Tracker Project
      </Typography>
      <Typography variant="h5" gutterBottom>
      Your Diet, Our Priority.
      </Typography>
      <Box mt={4}>
      <Button 
          component={Link} 
          to="/Person-list" 
          color="primary" 
          variant="contained"
        >
          View Diet
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;