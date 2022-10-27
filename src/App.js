import React from 'react';
import './App.css'
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainIndex } from './components/Main/MainIndex';
import { Politics } from './components/Private/Politics';


export const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <MainIndex/> } />
            <Route path='/privacy-policy' element={ <Politics/> } />
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}
