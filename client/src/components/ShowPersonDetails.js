import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowPersonDetails = () => {
  const [person, setPerson] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-14padu-diettracker-3r6s18esjam.ws-us117.gitpod.io/api/diets/${id}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.error('Error fetching person details:', err);
        toast.error('Failed to load person details.', { autoClose: 3000 });
      });
  }, [id]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://5000-14padu-diettracker-3r6s18esjam.ws-us117.gitpod.io/api/diets/${id}`)
      .then(() => {
        toast.success('Person deleted successfully!', { autoClose: 3000 });
        navigate('/person-list');
      })
      .catch((err) => {
        console.error('Error deleting person:', err);
        toast.error('Failed to delete person. Please try again.', { autoClose: 3000 });
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  if (!person) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" color="textSecondary" align="center" sx={{ mt: 4 }}>
          Loading person details...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <ToastContainer />
      <StyledPaper>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h4" gutterBottom>
            {person.name}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">Age: {person.age}</Typography>
          <Typography variant="body1">Contact Number: {person.contact_number}</Typography>
          <Typography variant="body1">BMI: {person.BMI}</Typography>
          <Typography variant="body1">Weight: {person.weight} kg</Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box display="flex" justifyContent="space-between">
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
              to={`/edit-person/${person._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Delete Confirmation Dialog */}
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
