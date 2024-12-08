import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const DetailsDiet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Diet, setDiet] = useState(null);
  const [showNotification, setShowNotification] = useState(null);

  useEffect(() => {
    const fetchDiet = async () => {
      try {
        console.log('Fetching Diet data...');
        const response = await axios.get(`${API_URL}/${id}`);
        console.log('Dietdata:', response.data);
        setDiet(response.data);
      } catch (error) {
        console.error('Error fetching Diet:', error.response || error.message);
        setShowNotification({ type: 'error', text: 'Error loading Diet details.' });
      }
    };
    fetchDiet();
  }, [id]);

  const deleteDiet = async () => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setShowNotification({ type: 'success', text: 'Diet deleted successfully!' });
      setTimeout(() => navigate('/'), 1000); // Navigate after showing notification for 3 seconds
    } catch (error) {
      console.error('Error deleting Diet:', error);
      setShowNotification({ type: 'error', text: 'Error deleting Diet.' });
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(null);
  };

  if (!Diet && !showNotification) {
    return <div className="box-container">Loading...</div>;
  }

  if (!Diet && showNotification) {
    return <div className="box-container">Error loading Diet details.</div>;
  }

  return (
    <div className="box-container"><h2>Name: {Diet.name}</h2>
      <div className="Diet-info"><p>Age: {Diet.age}</p>

      <div className="Diet-info"><p>Contact info: {Diet.co_number}</p></div>

      <div className="Diet-info"><p>Gender: {Diet.gender}</p></div> </div>
      <div className="Diet-actions">
        <Link to={`/edit/${Diet.id}`} className="btn btn-update">Edit</Link>

        <button onClick={deleteDiet} className="btn btn-delete">Delete</button>

        <Link to="/list" className="btn btn-back">Back to Home</Link>
      </div>
      {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
    </div>
  );
};

export default DetailsDiet;