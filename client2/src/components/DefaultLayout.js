import React from 'react';
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import About from './pages/about/About';


const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <About />
      <Footer />
    </>
  );
};

export default DefaultLayout;