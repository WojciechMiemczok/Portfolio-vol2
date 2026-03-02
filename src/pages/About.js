import React, { useEffect } from 'react';
// import images
import ManImg from '../img/about/man.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions'; 
// import icons
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const About = () => {
  // Wymuszenie braku scrolla na tej podstronie
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      // h-screen zapewnia dokładnie 100% wysokości okna, overflow-hidden usuwa suwak
      className='section h-screen w-full overflow-hidden relative'
    >
      <div className='container mx-auto h-full relative'>
        {/* text & image wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-16'>
          
          {/* image */}
          <div className='flex-1 max-h-64 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img 
              src={ManImg} 
              alt="Fotograf" 
              className='object-cover hover:scale-105 transition-transform duration-500' 
            />
          </div>

          {/* text */}
          <motion.div 
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>O mnie</h1>
            <p className='mb-12 lg:text-[20px] max-w-sm px-4 lg:px-0'>
              Jestem fotografem, który w kadrach szuka przede wszystkim autentyczności i emocji. 
              Moją misją jest zamykanie ulotnych chwil w wizualne opowieści, w których światło współgra z prawdą o danym momencie.
              <br/><br/>
              Na co dzień tworzę w Krakowie, ale z aparatem docieram do klientów z całego świata. Jeśli szukasz kogoś, kto uchwyci Twoje najważniejsze chwile – zapraszam do kontaktu!
            </p>
            <Link to={'/portfolio'} className='btn'>Zobacz moje prace</Link>
          </motion.div>
        </div>
      </div>

      {/* strzałka do następnej strony - widoczna tylko na mobile */}
    <div className='lg:hidden fixed bottom-10 right-10 z-50'>
      <Link to={'/portfolio'}>
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

export default About;