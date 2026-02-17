import React from 'react';
import ManImg from '../img/home/man.jpg';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import icons
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const Home = () => {
  return ( 
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'>
    <div className='container mx-auto h-full relative flex flex-col justify-center'>
      {/* text & img wrapper */}
      <div className='flex flex-col justify-center'>
        { /* text */}
        <motion.div 
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          
          <h1 className='h1'>Miemczok Media<br/>Fotograf</h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Kraków, Polska</p>
          <Link to={'/contact'} className='btn mb-[30px]'>hire me</Link>
        </motion.div>
        { /* image */}
        <div className='flex justify-end max-h-96 lg:max-h-max'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1} 
            className='relative lg:-right-[200px] overflow-hidden'>
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={ManImg} alt='' />
          </motion.div>
        </div>
      </div>
    </div>
    {/* next page arrow */}
    <div className='text-4xl bg-[#0000006d] rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.3)] text-white fixed bottom-10 right-10 z-50'>
      <Link to={'/about'}>
        <MdOutlineKeyboardDoubleArrowDown />
      </Link>
    </div>
  </motion.section>

  );
};

export default Home;
