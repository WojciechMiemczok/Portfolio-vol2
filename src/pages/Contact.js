import React, { useEffect, useRef, useState } from 'react'; // DODANO useRef, useState
import { motion, AnimatePresence } from 'framer-motion';
import { transition1 } from '../transitions';
import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// Import biblioteki - PAMIĘTAJ: musisz mieć zrobione npm install @emailjs/browser
import emailjs from '@emailjs/browser';

// Import ikon
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  // --- DEFINICJA STANÓW I REFERENCJI (Tego brakowało) ---
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  // Funkcja wysyłająca maila
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_ebjbp9g', 
      'template_rfhzde7', 
      formRef.current, 
      'XYyAFynlvvuPWG1qx'
    )
    .then((result) => {
        setStatus('success');
        setIsSending(false);
        formRef.current.reset(); // Czyści formularz
        setTimeout(() => setStatus(null), 5000);
    }, (error) => {
        console.log(error); // Logowanie błędu dla Ciebie
        setStatus('error');
        setIsSending(false);
        setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}  
      className='section bg-white h-screen w-full overflow-hidden relative'
    >
      {/* Tło na całą szerokość */}
      <motion.div 
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
      ></motion.div> 

      <div className='container mx-auto h-full relative lg:flex lg:items-center'>
        <div className='flex flex-col-reverse lg:flex-row h-full lg:h-[50%] items-center justify-start pt-24 lg:pt-36 gap-x-8 text-center lg:text-left lg:items-start lg:gap-[100px] '>
          
          {/* Dane kontaktowe */}
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={transition1}
            className='w-full lg:w-auto bg-[#eef7f9] md:ml-5 pl-5 pb-[20px] pt-[20px] lg:bg-transparent lg:p-0'
          >
            <h1 className='h1 text-[60px] hidden mb-6 lg:flex'>Kontakt</h1>

            <div className='w-full flex flex-col items-start gap-2 lg:gap-4'>
              <div className='flex items-center gap-3'>
                <IoCall className='text-[20px] lg:text-[40px] text-teal-700'/>
                <a className='text-[15px] lg:text-[20px]' href='tel:+48515183380'>+48 515-183-380</a>
              </div>
              <div className='flex items-center gap-3'>
                <IoMdMail className='text-[20px] lg:text-[40px] text-teal-700'/>
               
                <a className='text-[15px] lg:text-[20px]' href='mailto:miemczok.media@gmail.com'>miemczok.media@gmail.com</a>
              </div>
              <div className='flex items-center gap-3'>
                <FaInstagram className='text-[20px] lg:text-[40px] text-teal-700'/>
                <a className='text-[15px] lg:text-[20px]' target="_blank" rel="noreferrer" href='https://www.instagram.com/miemczok_media/'>@miemczok_media</a>
              </div>
              <div className='flex items-center gap-3'>
                <FaFacebook className='text-[20px] lg:text-[40px] text-teal-700'/>
                <a className='text-[15px] lg:text-[20px]' target="_blank" rel="noreferrer" href='https://www.facebook.com/wojtek.miemczok/'>Wojtek Miemczok</a>
              </div>
            </div>
          </motion.div>
          
          {/* Formularz */}
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={transition1}
            className='lg:flex-[2] px-4 z-10 w-full max-w-[1000px] flex flex-col'
          >
            <h1 className='h1 text-[40px] lg:text-[60px] mb-8'>Napisz wiadomość</h1>
            
            <form 
              ref={formRef} 
              onSubmit={sendEmail}
              className='flex flex-col gap-y-6 max-h-[45vh] overflow-y-auto pr-4 custom-scrollbar'
            >
              <div className='flex flex-col md:flex-row gap-x-10 gap-y-6 md:gap-y-0'>
                <input 
                  name="user_name" 
                  required
                  className='outline-none border-b border-b-primary h-[50px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] focus:border-b-black transition-all' 
                  type='text' 
                  placeholder='Imię'
                />
                <input 
                  name="user_email" 
                  required
                  className='outline-none border-b border-b-primary h-[50px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] focus:border-b-black transition-all' 
                  type='email' 
                  placeholder='Adres e-mail'
                />
              </div>

              <textarea 
                name="message" 
                required
                className='outline-none border-b border-b-primary h-[100px] bg-transparent font-secondary w-full pl-3 pt-2 placeholder:text-[#757879] focus:border-b-black transition-all resize-none'
                placeholder='Twoja wiadomość'
              ></textarea>

              <button 
                disabled={isSending}
                type="submit"
                className='btn mb-[10px] mx-auto lg:mx-0 self-start mt-4 disabled:bg-gray-400'
              >
                {isSending ? 'Wysyłanie...' : 'Wyślij'}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='text-green-600 font-medium'>
                    Wiadomość wysłana! Odezwę się niedługo.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='text-red-600 font-medium'>
                    Błąd wysyłania. Spróbuj ponownie później.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Domowa strzałka */}
      <div className='lg:hidden fixed bottom-10 right-10 z-50'>
        <Link to={'/'}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='w-12 h-12 bg-white/90 backdrop-blur-sm text-black rounded-full flex items-center justify-center shadow-lg border border-gray-200'
          >
            <FaHouse className='text-2xl' />
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
};

export default Contact;