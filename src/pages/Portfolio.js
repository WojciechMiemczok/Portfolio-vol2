import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Nowe ikony
import { motion, AnimatePresence } from "framer-motion";
import { transition1 } from "../transitions";





//zmienna do obrazów
const link = 'https://i.imgur.com/';

//Kategorie obrazów  portrait / sport / occasional / animals
const imagesData = [

  //20 najlepszych zdjęć z róznych kategorii
  { id: 1, categories: ["occasional"], src: link + 'w54THKX' + ".jpg" },
  { id: 2, categories: ["portrait"], src: link + 'Gl9ijhZ' + ".jpg" },
  { id: 3, categories: ["portrait"], src: link + 'MPxlErp' + ".jpg" },
  { id: 4, categories: ["sport"], src: link + 'qNS6MRQ' + ".jpg" },
  { id: 5, categories: ["occasional"], src: link + 'FocDGZu' + ".jpg" },
  { id: 6, categories: ["portrait"], src: link + 'E7FJeGm' + ".jpg" },
  { id: 7, categories: ["business"], src: link + 'Mvq3MO9' + ".jpg" },
  { id: 8, categories: ["portrait"], src: link + 'njqQWgI' + ".jpg" },
  { id: 9, categories: ["occasional"], src: link + 'VOncTSD' + ".jpg" },
  { id: 10, categories: ["sport"], src: link + 'qq0GQLK' + ".jpg" },
  { id: 11, categories: ["sport"], src: link + 'SvS8cWk' + ".jpg" },
  { id: 12, categories: ["portrait"], src: link + '6YyU9OZ' + ".jpg" },
  { id: 13, categories: ["business"], src: link + 'GwIxwJi' + ".jpg" },
  { id: 14, categories: ["portrait"], src: link + '3GacUh3' + ".jpg" },
  { id: 15, categories: ["sport"], src: link + 'qxrHRCV' + ".jpg" },
  { id: 16, categories: ["occasional"], src: link + 'wlCr5zd' + ".jpg" },
  { id: 17, categories: ["business"], src: link + 'WoPC9an' + ".jpg" },
  { id: 18, categories: ["portrait"], src: link + 'Ot33JoX' + ".jpg" },
  { id: 19, categories: ["sport"], src: link + 'C2vCkT6' + ".jpg" },
  { id: 20, categories: ["animals"], src: link + '4j9pOhJ' + ".jpg" },


  { id: 21, categories: ["portrait"], src: link + 'Y611Bg0' + ".jpg" },
  { id: 22, categories: ["portrait"], src: link + 'mvme8j0' + ".jpg" },
  { id: 23, categories: ["portrait"], src: link + 'xosG3tS' + ".jpg" },
  { id: 24, categories: ["portrait"], src: link + '0YIj09s' + ".jpg" },
  { id: 25, categories: ["portrait"], src: link + 'viw0XxE' + ".jpg" },
  { id: 26, categories: ["portrait"], src: link + 'JuRYnDx' + ".jpg" },
  { id: 27, categories: ["portrait"], src: link + 'E7FJeGm' + ".jpg" },
  { id: 28, categories: ["portrait"], src: link + 'UVAVJ8n' + ".jpg" },
  { id: 29, categories: ["portrait"], src: link + 'x8bhzDx' + ".jpg" },
  { id: 30, categories: ["portrait"], src: link + 'U1PrL7b' + ".jpg" },
  { id: 31, categories: ["portrait"], src: link + 'tSJ1QeP' + ".jpg" },
  { id: 32, categories: ["portrait"], src: link + 'bwDdrqJ' + ".jpg" },
  { id: 33, categories: ["portrait"], src: link + '8y3HSfr' + ".jpg" },
  { id: 34, categories: ["portrait"], src: link + 'hkMjknC' + ".jpg" },
  { id: 35, categories: ["portrait"], src: link + '0JWBOUR' + ".jpg" },
  { id: 36, categories: ["portrait"], src: link + 'kUiWEOq' + ".jpg" },
  { id: 37, categories: ["portrait"], src: link + 'Zdq7ylJ' + ".jpg" },
  { id: 38, categories: ["portrait"], src: link + 'lq2bgSc' + ".jpg" },
  { id: 39, categories: ["portrait"], src: link + 'zR1Zt31' + ".jpg" },
  { id: 40, categories: ["portrait"], src: link + 'ZnQZBFj' + ".jpg" },
  { id: 41, categories: ["portrait"], src: link + '5llpyeT' + ".jpg" },
  { id: 42, categories: ["portrait"], src: link + 'rTUez5Y' + ".jpg" },
  { id: 43, categories: ["portrait"], src: link + 'iX6CLjX' + ".jpg" },
  { id: 44, categories: ["portrait"], src: link + 'KowlVHQ' + ".jpg" },
  { id: 45, categories: ["portrait"], src: link + '4Pwj2HD' + ".jpg" },
  { id: 46, categories: ["portrait"], src: link + 'J5KW8AA' + ".jpg" },
  { id: 47, categories: ["portrait"], src: link + '2SLhoO0' + ".jpg" },
  { id: 48, categories: ["portrait"], src: link + 'H3cY2Nj' + ".jpg" },
  { id: 49, categories: ["portrait"], src: link + 'HOZO48X' + ".jpg" },
  { id: 50, categories: ["portrait"], src: link + 'Yk6wbGF' + ".jpg" },
  { id: 51, categories: ["portrait"], src: link + '8OMi6p6' + ".jpg" },
  { id: 52, categories: ["portrait"], src: link + 'eeWJoy4' + ".jpg" },
  { id: 53, categories: ["portrait"], src: link + 'sBiiEGR' + ".jpg" },
  { id: 54, categories: ["portrait"], src: link + 'HeFmvVz' + ".jpg" },
  { id: 55, categories: ["portrait"], src: link + 'tc996Ao' + ".jpg" },
  { id: 56, categories: ["portrait"], src: link + 'utKq97Z' + ".jpg" },
  { id: 57, categories: ["portrait"], src: link + 'JZUASue' + ".jpg" },
  { id: 58, categories: ["portrait"], src: link + 'ieOM1lj' + ".jpg" },
  { id: 59, categories: ["portrait"], src: link + 'syQz6G2' + ".jpg" },
  { id: 60, categories: ["portrait"], src: link + 'HcE9QDO' + ".jpg" },
  { id: 61, categories: ["portrait"], src: link + '5ufjN1r' + ".jpg" },
  { id: 62, categories: ["portrait"], src: link + 'dteDD9b' + ".jpg" },
  { id: 63, categories: ["portrait"], src: link + 'lo6fX9N' + ".jpg" },
  { id: 64, categories: ["portrait"], src: link + '6fodtSY' + ".jpg" },
  { id: 65, categories: ["portrait"], src: link + 'xyYLc9h' + ".jpg" },
  { id: 66, categories: ["portrait"], src: link + 'Xtr8ll4' + ".jpg" },
  // { id: , categories: ["portrait"], src: link + '' + ".jpg" },
  // { id: , categories: ["portrait"], src: link + '' + ".jpg" },
  // { id: , categories: ["portrait"], src: link + '' + ".jpg" },
  // { id: , categories: ["portrait"], src: link + '' + ".jpg" },
  // { id: , categories: ["portrait"], src: link + '' + ".jpg" },
  
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
          {["all", "portrait", "sport", "occasional", "business", "animals"].map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setCurrentIndex(null); }}
              className={`relative px-6 py-2 transition-all duration-300 text-lg font-medium
                ${filter === cat ? "text-black" : "text-[#696c6d] hover:text-black"}`}
            >
              {cat === "all" ? "Wszystkie" : 
               cat === "portrait" ? "Portrety" : 
               cat === "sport" ? "Sportowe" : 
               cat === "occasional" ? "Okazjonalne" : 
               cat === "business" ? "Wizerunkowe" : "Zwierzęta"}

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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
            <motion.div 
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setCurrentIndex(index)}
              className="flex justify-center items-center overflow-hidden group cursor-pointer" // Usunięte h-[250px]
            >
              <img
                src={image.src}
                alt=""
                className="h-full object-cover transition duration-300 ease group-hover:opacity-50" // Przywrócone opacity
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