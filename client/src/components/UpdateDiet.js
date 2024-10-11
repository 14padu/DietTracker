import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const PatientEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({ name: '', age: '' ,co_number:'',gender:''});

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${id}`, patient);
      navigate(`/detail/${id}`); // Redirect to person details page after update
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleCancel = () => {
    navigate(`/detail/${id}`); // Navigate back to the person details page
  };

  const handleHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="box-container">
      <h1>Update Patient</h1>
      <form onSubmit={handleUpdate} className="form-container">
        <input type="text" name="name" placeholder="Name" value={patient.name} onChange={handleChange}
          required className="input-field"/>

        <input type="number" name="age" placeholder="Age" value={patient.age} onChange={handleChange}
          required className="input-field"/>

        <input type="number" placeholder="contact-number" value={patient.co_number} onChange={handleChange} required className="input-field" />
        
        <select type='select' placeholder="Select Gender" value={patient.gender} onChange={handleChange} required className='input-field'>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option> </select>

        <div className="person-actions">
          <button type="submit" className="btn btn-update">Update</button>
          <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn btn-back" onClick={handleHome}>Back to Home</button>
        </div>
      </form>
    </div>
  );
};

export default PatientEdit;