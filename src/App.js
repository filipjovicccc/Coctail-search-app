import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCoctail';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
             <Route exact path="/" element={<Home />}/>
             <Route exact path="/about" element={<About/>}/>
             <Route exact path="/cocktail/:id" element={<SingleCocktail />}/>
             <Route exact path="*" element={<ErrorPage />}/>
            
          </Routes>

      </Router>
  
     
    </div>
  );
}

export default App;


