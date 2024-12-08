import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL

const DietAdd = ({ onDietAdd = () => { } }) => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [co_number,setNumber] = useState('')
    const [gender,setGender] = useState('')
    const navigate = useNavigate()
    const [showNotification,setShowNotification] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !age || !co_number || !gender) return

        try {
            const response = await axios.post(API_URL, { name, age, gender, co_number });
            const newDietId = response.data.id;
            
            // Clear form fields
            setName('');
            setAge('');
            setGender('');
            setNumber('');
      
            // Show success notification
            setShowNotification({ type: 'success', text: `Diet "${response.data.name}" added successfully!` });
      
            // Navigate to the new person's detail page
            setTimeout(() => navigate(`/`), 1000); // Wait for 1 seconds before navigating
          } catch (error) {
            console.error('Error adding the Diet:', error);
            setShowNotification({ type: 'error', text: 'Failed to add the Diet. Please try again.' });
          }
        };
      
        const handleCloseNotification = () => {
          setShowNotification(null);
        };
      
      
        return (
          <div className="box-container">
            <h2>Add Diet</h2>
            <form onSubmit={handleSubmit} className="form-container">

              <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} required className="input-field"/>

              <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required className="input-field" />

              <input type="number" placeholder="contact-number" value={co_number} onChange={(e) => setNumber(e.target.value)} required className="input-field" />

              <select value={gender} onChange={(e) => setGender(e.target.value)} required className='input-field'>
            <option value="" disabled>Select Gender</option> {/* Prompt option */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option> </select>

              <div className="button-group">
                <button type="submit" className="btn btn-add">Add Diet</button>
                <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
              </div>
            </form>
            {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
          </div>
        );
      };
      
      export default DietAdd;