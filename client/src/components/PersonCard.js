import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PersonCard = ({ person }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      {/* Placeholder Image */}
      <img
        src='https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2017/05/1140-calorie-counting-app.imgcache.rev62ecd194605c05dfff72b7963164dd1d.jpg'
        alt='Person'
        style={{ height: 200, objectFit: 'cover', width: '100%' }}
      />

      {/* Card Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Person Name */}
        <Typography variant="h6" component="div" color="primary" gutterBottom>
          <Link
            to={`/show-person/${person._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {person.name}
          </Link>
        </Typography>

        {/* Person Age */}
        <Typography variant="subtitle1" color="text.secondary">
          Age: {person.age}
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
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          Contact: {person.contact_number}
        </Typography>

        {/* BMI */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          BMI: {person.BMI}
        </Typography>

        {/* Availability */}
        {/* <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Availability: {person.availability}
        </Typography> */}
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
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default PersonCard;
