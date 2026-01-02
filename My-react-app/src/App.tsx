import { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/home';
import ContactUS from './components/contactUS';
import AboutUs from './components/aboutUs';
import Login from './components/login';
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link> | {""}
        <Link to="/contactUs">Contact Us</Link> | {""}
        <Link to="/aboutUs">About Us</Link> | {""}
        <Link to="/Register">Register</Link> | {""}
        <Link to="/login">Login</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
