//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Create from './components/CreateDiet';
import ShowDietList from './components/ShowDietList';
import ShowDietdetails from './components/ShowDietdetails';
import UpdateDietinfo from './components/UpdateDietinfo';
import Home from './components/Homepage';
import AllRoutes from './components/Route';



function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Diet-list' element={<ShowDietList/>}/>
        <Route path='/add-Diet' element={<Create/>}/>
        <Route path='/edit-Diet-info/:id' element={<UpdateDietinfo/>}/>
        <Route path='/show-Diet/:id' element={<ShowDietdetails/>} />
        <Route path='/routes' element={<AllRoutes />} />
        
        </Routes>
      </div>
      <Footer />
      </Router>
  );
}

export default App;