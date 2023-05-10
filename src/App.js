
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App =()=> {
  return(
    <Router>
      <Routes>
        <Route path="/user" element ={<Users />} />
        <Route path="/newplaces/add" element ={<NewPlaces />} />
        
      </Routes>
    </Router>

  );
  
}

export default App;
