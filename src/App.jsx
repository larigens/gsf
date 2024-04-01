import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Header/NavBar/NavBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <Header>
        <NavBar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}