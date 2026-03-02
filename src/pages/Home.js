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
      
      {/* image and text wrapper */}
      <div class="over relative flex h-screen flex-col items-center justify-center overflow-hidden md:flex-row">
        {/* text */}
        <motion.div 
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          class="z-10 flex h-80 w-70 text-center md:text-start flex-col items-center justify-center p-5 md:-mr-[190px] md:w-auto md:items-start mt-[150px]">
          <h1 className='h1 md:text-[100px] xl:text-[120px]'>Miemczok Media</h1>
          <h1 className='h1 md:text-[80px] xl:text-[100px]'>Fotograf</h1>
          <p className='text-[26] lg:text-[36px] md:text-[30px] font-primary mb-4 md:mb-12'>Kraków, Polska</p>
          <Link to={'/contact'} className='btn mb-[30px]'>Umów sesję</Link>
        </motion.div>
        {/* image */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1} 
          class="h-90 w-full overflow-hidden sm:w-[80%] md:h-screen md:w-auto">
          <motion.img src={ManImg} 
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            class="object-contain md:h-full md:w-auto" alt="" />
        </motion.div>

      </div>
    {/* strzałka do następnej strony - widoczna tylko na mobile */}
    <div className='lg:hidden fixed bottom-10 right-10 z-50'>
      <Link to={'/about'}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        
          className='w-10 h-10 bg-white/90 backdrop-blur-sm text-black rounded-full flex items-center justify-center shadow-lg border border-gray-200'
        >
          <MdOutlineKeyboardDoubleArrowDown className='text-3xl' />
        </motion.div>
      </Link>
    </div>
  </motion.section>

  );
};

export default Home;