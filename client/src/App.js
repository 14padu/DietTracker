import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Create from './components/CreateDiet';
import ShowDietList from './components/DietList';
import ShowDietdetails from './components/DetailsDiet';
import UpdateDietinfo from './components/UpdateDiet';
import Home from './components/HomePage';
// import AllRoutes from './components/Route';



function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Diet-list' element={<ShowDietList/>}/>
        <Route path='/add' element={<Create/>}/>
        <Route path='/edit-Diet-info/:id' element={<UpdateDietinfo/>}/>
        <Route path='/show-Diet/:id' element={<ShowDietdetails/>} />        
        </Routes>
      </div>
      <Footer />
      </Router>
  );
}

export default App;