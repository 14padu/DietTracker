import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Fade,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added import
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotesIcon from '@mui/icons-material/Notes';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalPersons: 0,
    unique: 0,
    recentPerson: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://diet-track-5chn.onrender.com/api/diets')
      .then((res) => {
        const persons = res.data; // Define `persons`
        const unique = new Set(persons.map((person) => person.contact_Number)).size;
        const recentPerson = persons.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        )[0]; // Assuming `updatedAt` is the correct date field

        setStats({
          totalPersons: persons.length,
          unique,
          recentPerson,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Welcome to Diet Tracker Project
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Your Diet, Your Priority
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <MenuBookIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.totalPersons}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Total Persons
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <PersonIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.unique}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Unique Persons
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Latest Person
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stats.recentPerson?.name || 'No person yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Available Features
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/person-list"
              variant="contained"
              size="large"
              startIcon={<LibraryBooksIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              View Persons
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/create-person"
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Add New Person
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/export"
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Export Data
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/qr-codes"
              variant="contained"
              size="large"
              startIcon={<QrCodeIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              QR Codes
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/notes/home"
              variant="contained"
              size="large"
              startIcon={<NotesIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Notes
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component="a"
              href="https://github.com/14padu/DietTracker.git"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              GitHub
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Search Persons
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default HomePage;
