import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowPersonDetails = () => {
  const [person, setPerson] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-14padu-diettracker-0yawcloo8rm.ws-us117.gitpod.io/api/persons/${id}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowPersonDetails');
      });
  }, [id]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://5000-14padu-diettracker-0yawcloo8rm.ws-us117.gitpod.io/${id}`)
      .then((res) => {
        navigate('/person-list');
      })
      .catch((err) => {
        console.log('Error from ShowPersonDetails_deleteClick');
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2017/05/1140-calorie-counting-app.imgcache.rev62ecd194605c05dfff72b7963164dd1d.jpg"
                alt={person.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {person.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              by {person.age}
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            {/* Display book details one after another */}
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" paragraph>
                {person.contact_number}
              </Typography>
              <Typography variant="body1">bmi: {person.bmi}</Typography>
              <Typography variant="body1">weight: {person.weight}</Typography>
              <Typography variant="body1">admit_Date: {person.admit_Date}</Typography>
            </Box>

          </Grid>
        </Grid>
        
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/person-list"
            variant="outlined"
          >
            Back to Person List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit-person/${id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Person
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Person
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Keep the dialog unchanged */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this person? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowPersonDetails;