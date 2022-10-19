import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
//Router traído desde react-router-dom (no confundir con el Router de express para el back)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='container container-fluid'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Home" element={<Home />}/>
          </Routes>
        </div>
      <Home />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

