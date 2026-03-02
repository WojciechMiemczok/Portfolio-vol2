import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Nowe ikony
import { motion, AnimatePresence } from "framer-motion";
import { transition1 } from "../transitions";





// Import obrazów
import Img1 from '../img/portfolio/1.jpg';
import Img2 from '../img/portfolio/2.jpg';
import Img3 from '../img/portfolio/3.jpg';
import Img4 from '../img/portfolio/4.jpg';
import Img5 from '../img/portfolio/5.jpg';
import Img6 from '../img/portfolio/6.jpg';
import Img7 from '../img/portfolio/7.jpg';
import Img8 from '../img/portfolio/8.jpg';
import Img9 from '../img/portfolio/9.jpg';
import Img10 from '../img/portfolio/10.jpg';
import Img11 from '../img/portfolio/11.jpg';
import Img12 from '../img/portfolio/12.jpg';
import Img13 from '../img/portfolio/13.jpg';
import Img14 from '../img/portfolio/14.jpg';

//Kategorie obrazów
const imagesData = [
  { id: 1, categories: ["repo", "portrait"], src: Img1 },
  { id: 2, categories: ["nature"], src: Img2 },
  { id: 3, categories: ["repo"], src: Img3 },
  { id: 4, categories: ["animals", "nature"], src: Img4 },
  { id: 5, categories: ["nature"], src: Img5 },
  { id: 6, categories: ["nature"], src: Img6 },
  { id: 7, categories: ["nature"], src: Img7 },
  { id: 8, categories: ["repo"], src: Img8 },
  { id: 9, categories: ["animals"], src: Img9 },
  { id: 10, categories: ["nature"], src: Img10 },
  { id: 11, categories: ["nature"], src: Img11 },
  { id: 12, categories: ["nature"], src: Img12 },
  { id: 13, categories: ["repo"], src: Img13 },
  { id: 14, categories: ["animals"], src: Img14 },
];






function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(null); // Śledzimy numer zdjęcia

  // Filtrowanie zdjęć (obsługuje teraz tablice kategorii)
  const filteredImages =
    filter === "all"
      ? imagesData
      : imagesData.filter(img => img.categories.includes(filter));

  // Nawigacja
  const showNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1 === filteredImages.length ? 0 : prev + 1));
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  // Obsługa klawiatury i blokada scrolla
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setCurrentIndex(null);
    };

    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, filter]);

  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className="min-h-screen text-black px-6 py-16"
    >
    <div className="bg-white h-[100px] lg:h-[120px] w-full fixed top-0 left-0 z-10"></div>
      <div className="mt-20 md:w-[90%] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          className="h1 text-center mb-12"
        >
          Portfolio
        </motion.h1>

        {/* Przyciski kategorii */}
        <motion.div 
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          className="flex flex-wrap font-semibold justify-center gap-4 mb-12 text-[#696c6d]"
        >
          {["all", "portrait", "repo", "sport", "occasional"].map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setCurrentIndex(null); }}
              className={`relative px-6 py-2 transition-all duration-300 text-lg font-medium
                ${filter === cat ? "text-black" : "text-[#696c6d] hover:text-black"}`}
            >
              {cat === "all" ? "Wszystkie" : 
               cat === "portrait" ? "Portrety" : 
               cat === "repo" ? "Reportaż" : 
               cat === "sport" ? "Sportowe" : "Okazjonalne"}

              <span className={`absolute left-0 -bottom-0 h-[2px] w-full bg-[#696c6d8a] rounded-full
                origin-center transform transition-transform duration-300
                ${filter === cat ? "scale-x-[75%]" : "scale-x-0"}`}
              ></span>
            </button>
          ))}
        </motion.div>

        {/* Galeria */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.7 }}
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
            <motion.div 
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setCurrentIndex(index)}
              className="flex justify-center items-center overflow-hidden group cursor-pointer" // Usunięte h-[250px]
            >
              <img
                src={image.src}
                alt=""
                className="w-full object-cover transition duration-300 ease group-hover:opacity-50" // Przywrócone opacity
              />
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* strzałka do następnej strony - widoczna tylko na mobile */}
    <div className='lg:hidden fixed bottom-10 right-10 z-50'>
      <Link to={'/contact'}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        
          className='w-10 h-10 bg-white/90 backdrop-blur-sm text-black rounded-full flex items-center justify-center shadow-lg border border-gray-200'
        >
          <MdOutlineKeyboardDoubleArrowDown className='text-3xl' />
        </motion.div>
      </Link>
    </div>

      {/* Modal na pełny ekran */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            {/* Strzałka Lewo */}
            <button 
              onClick={showPrev}
              className="absolute left-4 text-white text-5xl z-[110] hover:text-gray-300 transition-colors"
            >
              <IoIosArrowBack />
            </button>

            {/* Powiększone Zdjęcie */}
            <motion.img
              key={filteredImages[currentIndex].src}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              src={filteredImages[currentIndex].src}
              alt="Powiększone"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />

            {/* Strzałka Prawo */}
            <button 
              onClick={showNext}
              className="absolute right-4 text-white text-5xl z-[110] hover:text-gray-300 transition-colors"
            >
              <IoIosArrowForward />
            </button>

            {/* Przycisk Zamknij */}
            <button 
              className="absolute top-8 right-8 text-white text-4xl hover:rotate-90 transition-transform duration-300"
              onClick={() => setCurrentIndex(null)}
            >
              ✕
            </button>

            {/* Licznik zdjęć */}
            <div className="absolute bottom-10 text-white font-light tracking-widest">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Portfolio;