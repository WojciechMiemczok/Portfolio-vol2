import React from 'react';

import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';


const App = () => {
  return (
    <SmoothScroll>
    <> 
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
    </SmoothScroll>
  );
};

export default App;
