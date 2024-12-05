import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const DietEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Diet, setDiet] = useState({ name: '', age: '' ,co_number:'',gender:''});

  useEffect(() => {
    const fetchDiet= async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setDiet(response.data);
      } catch (error) {
        console.error('Error fetching Diet:', error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiet({ ...Diet, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${id}`, Diet);
      navigate(`/detail/${id}`); // Redirect to Diet details page after update
    } catch (error) {
      console.error('Error updating Diet:', error);
    }
  };

  const handleCancel = () => {
    navigate(`/detail/${id}`); // Navigate back to the Diet details page
  };

  const handleHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="box-container">
      <h1>Update Diet</h1>
      <form onSubmit={handleUpdate} className="form-container">
        <input type="text" name="name" placeholder="Name" value={Diet.name} onChange={handleChange}
          required className="input-field"/>

        <input type="number" name="age" placeholder="Age" value={Diet.age} onChange={handleChange}
          required className="input-field"/>

        <input type="number" placeholder="contact-number" value={Diet.co_number} onChange={handleChange} required className="input-field" />
        
        <select type='select' placeholder="Select Gender" value={Diet.gender} onChange={handleChange} required className='input-field'>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option> </select>

        <div className="Diet-actions">
          <button type="submit" className="btn btn-update">Update</button>
          <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn btn-back" onClick={handleHome}>Back to Home</button>
        </div>
      </form>
    </div>
  );
};

export default DietEdit;