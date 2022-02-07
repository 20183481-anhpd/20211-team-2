import React from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { routes } from './routes/userRoutes';

// Routes
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import ListNews from './components/ListNews';
import Home from './components/Home';

function App() {
  let element = useRoutes(routes);
  return (
    <Router>
      <div id="app-container">
        <Header />
        <NavBar />
        <Routes>
          <div>{element}</div>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
