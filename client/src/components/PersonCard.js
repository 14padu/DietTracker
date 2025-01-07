import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PersonCard = ({ person }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Card Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Person Name */}
        <Typography
          variant="h5"
          component="div"
          color="primary"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: '#3f51b5', // Blue color for name
            '&:hover': {
              color: '#1a237e', // Darker blue on hover
              cursor: 'pointer',
            },
          }}
        >
          <Link
            to={`/show-person/${person._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {person.name}
          </Link>
        </Typography>

        {/* Person Age */}
        <Typography variant="subtitle1" color="text.secondary">
          Age: <span style={{ color: '#4caf50' }}>{person.age}</span>
        </Typography>

        {/* Contact Number */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          Contact: <span style={{ color: '#f44336' }}>{person.contact_number}</span>
        </Typography>

        {/* BMI */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          BMI: <span style={{ color: '#4caf50' }}>{person.BMI}</span>
        </Typography>

        {/* Availability */}
        {person.availability && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Availability: <span style={{ color: '#ff9800' }}>{person.availability}</span>
          </Typography>
        )}

      
        {/* Weight */}
        {person.weight && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Weight: <span style={{ color: '#009688' }}>{person.weight}</span>
          </Typography>
        )}
      </CardContent>

      {/* View Details Button */}
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/show-person/${person._id}`}
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          sx={{
            backgroundColor: '#FF4081', // Pink background for button
            '&:hover': {
              backgroundColor: '#F50057', // Darker pink on hover
            },
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default PersonCard;
