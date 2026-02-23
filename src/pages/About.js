import React from 'react';
//import images
import ManImg from '../img/about/man.jpg';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions'; 
//import icons
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const About = () => {
  return (
  <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    
    className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & image wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/* image */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={ManImg} />
        </div>
        {/* text */}
        <motion.div 
          
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
            dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          <br />
          <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
            dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
          <Link to={'/portfolio'} className='btn'>View my work</Link>
        </motion.div>
      </div>
    </div>
    {/* next page arrow */}
    <div className='lg:hidden text-4xl text-white fixed bottom-10 right-10 z-50'>
      <Link to={'/portfolio'}>
        <MdOutlineKeyboardDoubleArrowDown />
      </Link>
    </div>
  </motion.section>
  );
};

export default About;