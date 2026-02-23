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
          <Link to={'/contact'} className='btn mb-[30px]'>hire me</Link>
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
    {/* next page arrow */}
    <div className='lg:hidden text-4xl bg-[#0000006d] rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.3)] text-white fixed bottom-10 right-10 z-50'>
      <Link to={'/about'}>
        <MdOutlineKeyboardDoubleArrowDown />
      </Link>
    </div>
  </motion.section>

  );
};

export default Home;