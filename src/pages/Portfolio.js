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

  //40 najlepszych zdjęć z róznych kategorii
{ id: 1, categories: ["all"], imgId: 'w54THKX' },
{ id: 2, categories: ["all"], imgId: 'Gl9ijhZ' },
{ id: 226, categories: ["all"], imgId: 'dteDD9b' },
{ id: 3, categories: ["all"], imgId: 'MPxlErp' },
{ id: 4, categories: ["all"], imgId: 'qNS6MRQ' },
{ id: 5, categories: ["all"], imgId: 'FocDGZu' },
{ id: 6, categories: ["all"], imgId: 'E7FJeGm' },
{ id: 7, categories: ["all"], imgId: 'Mvq3MO9' },
{ id: 8, categories: ["all"], imgId: 'njqQWgI' },
{ id: 9, categories: ["all"], imgId: 'VOncTSD' },
{ id: 10, categories: ["all"], imgId: 'qq0GQLK' },
{ id: 11, categories: ["all"], imgId: 'SvS8cWk' },
{ id: 12, categories: ["all"], imgId: '6YyU9OZ' },
{ id: 13, categories: ["all"], imgId: 'GwIxwJi' },
{ id: 14, categories: ["all"], imgId: '3GacUh3' },
{ id: 15, categories: ["all"], imgId: 'qxrHRCV' },
{ id: 16, categories: ["all"], imgId: 'wlCr5zd' },
{ id: 17, categories: ["all"], imgId: 'WoPC9an' },
{ id: 18, categories: ["all"], imgId: 'Ot33JoX' },
{ id: 19, categories: ["all"], imgId: 'C2vCkT6' },
{ id: 20, categories: ["all"], imgId: '4j9pOhJ' },
{ id: 207, categories: ["all"], imgId: '351TxLA' },
{ id: 208, categories: ["all"], imgId: 'FcQvx18' },
{ id: 209, categories: ["all"], imgId: 'I2rujcF' },
{ id: 210, categories: ["all"], imgId: 'l9whu6C' },
{ id: 211, categories: ["all"], imgId: '605Pv2X' },
{ id: 212, categories: ["all"], imgId: 'O1M7amt' },
{ id: 213, categories: ["all"], imgId: 'qPZOmNr' },
{ id: 214, categories: ["all"], imgId: 'G18euf5' },
{ id: 215, categories: ["all"], imgId: 'mvme8j0' },
{ id: 216, categories: ["all"], imgId: 'xosG3tS' },
{ id: 217, categories: ["all"], imgId: 'jdrIa2N' },
{ id: 218, categories: ["all"], imgId: 'Zdq7ylJ' },
{ id: 219, categories: ["all"], imgId: 'qKDzqNx' },
{ id: 220, categories: ["all"], imgId: '0JWBOUR' },
{ id: 221, categories: ["all"], imgId: 'TVDf23Q' },
{ id: 222, categories: ["all"], imgId: 'ZnQZBFj' },
{ id: 223, categories: ["all"], imgId: 'HOZO48X' },
{ id: 224, categories: ["all"], imgId: 'sBiiEGR' },
{ id: 225, categories: ["all"], imgId: 'tc996Ao' },


//portrety
{ id: 22, categories: ["portrait"], imgId: 'mvme8j0' },
{ id: 200, categories: ["portrait"], imgId: 'Gl9ijhZ' },
{ id: 201, categories: ["portrait"], imgId: 'MPxlErp' },
{ id: 24, categories: ["portrait"], imgId: '0YIj09s' },
{ id: 202, categories: ["portrait"], imgId: 'E7FJeGm' },
{ id: 205, categories: ["portrait"], imgId: '3GacUh3' },
{ id: 206, categories: ["portrait"], imgId: 'Ot33JoX' },
{ id: 204, categories: ["portrait"], imgId: '6YyU9OZ' },
{ id: 21, categories: ["portrait"], imgId: 'Y611Bg0' },
{ id: 23, categories: ["portrait"], imgId: 'xosG3tS' },
{ id: 203, categories: ["portrait"], imgId: 'njqQWgI' },
{ id: 25, categories: ["portrait"], imgId: 'viw0XxE' },
{ id: 26, categories: ["portrait"], imgId: 'JuRYnDx' },
{ id: 27, categories: ["portrait"], imgId: 'E7FJeGm' },
{ id: 28, categories: ["portrait"], imgId: 'UVAVJ8n' },
{ id: 29, categories: ["portrait"], imgId: 'x8bhzDx' },
{ id: 30, categories: ["portrait"], imgId: 'U1PrL7b' },
{ id: 31, categories: ["portrait"], imgId: 'tSJ1QeP' },
{ id: 32, categories: ["portrait"], imgId: 'bwDdrqJ' },
{ id: 33, categories: ["portrait"], imgId: '8y3HSfr' },
{ id: 34, categories: ["portrait"], imgId: 'hkMjknC' },
{ id: 35, categories: ["portrait"], imgId: '0JWBOUR' },
{ id: 36, categories: ["portrait"], imgId: 'kUiWEOq' },
{ id: 37, categories: ["portrait"], imgId: 'Zdq7ylJ' },
{ id: 38, categories: ["portrait"], imgId: 'lq2bgSc' },
{ id: 39, categories: ["portrait"], imgId: 'zR1Zt31' },
{ id: 40, categories: ["portrait"], imgId: 'ZnQZBFj' },
{ id: 41, categories: ["portrait"], imgId: '5llpyeT' },
{ id: 42, categories: ["portrait"], imgId: 'rTUez5Y' },
{ id: 43, categories: ["portrait"], imgId: 'iX6CLjX' },
{ id: 44, categories: ["portrait"], imgId: 'KowlVHQ' },
{ id: 45, categories: ["portrait"], imgId: '4Pwj2HD' },
{ id: 46, categories: ["portrait"], imgId: 'J5KW8AA' },
{ id: 47, categories: ["portrait"], imgId: '2SLhoO0' },
{ id: 48, categories: ["portrait"], imgId: 'H3cY2Nj' },
{ id: 49, categories: ["portrait"], imgId: 'HOZO48X' },
{ id: 50, categories: ["portrait"], imgId: 'Yk6wbGF' },
{ id: 51, categories: ["portrait"], imgId: '8OMi6p6' },
{ id: 52, categories: ["portrait"], imgId: 'eeWJoy4' },
{ id: 53, categories: ["portrait"], imgId: 'sBiiEGR' },
{ id: 54, categories: ["portrait"], imgId: 'HeFmvVz' },
{ id: 55, categories: ["portrait"], imgId: 'tc996Ao' },
{ id: 56, categories: ["portrait"], imgId: 'utKq97Z' },
{ id: 57, categories: ["portrait"], imgId: 'JZUASue' },
{ id: 58, categories: ["portrait"], imgId: 'ieOM1lj' },
{ id: 59, categories: ["portrait"], imgId: 'syQz6G2' },
{ id: 60, categories: ["portrait"], imgId: 'HcE9QDO' },
{ id: 61, categories: ["portrait"], imgId: '5ufjN1r' },
{ id: 62, categories: ["portrait"], imgId: 'dteDD9b' },
{ id: 63, categories: ["portrait"], imgId: 'lo6fX9N' },
{ id: 64, categories: ["portrait"], imgId: '6fodtSY' },
{ id: 65, categories: ["portrait"], imgId: 'xyYLc9h' },
{ id: 66, categories: ["portrait"], imgId: 'Xtr8ll4' },

// sport
{ id: 67, categories: ["sport"], imgId: 'qq0GQLK' },
{ id: 73, categories: ["sport"], imgId: 'nYXB5xL' },
{ id: 69, categories: ["sport"], imgId: 'C2vCkT6' },
{ id: 70, categories: ["sport"], imgId: 'ZuOjsco' },
{ id: 71, categories: ["sport"], imgId: 'SvS8cWk' },
{ id: 72, categories: ["sport"], imgId: 'qKDzqNx' },
{ id: 68, categories: ["sport"], imgId: 'hojWhUq' },
{ id: 74, categories: ["sport"], imgId: '4XxKEVu' },
{ id: 75, categories: ["sport"], imgId: 'qNS6MRQ' },
{ id: 76, categories: ["sport"], imgId: 'jdrIa2N' },
{ id: 77, categories: ["sport"], imgId: 'oUnMtKy' },
{ id: 78, categories: ["sport"], imgId: 'upJaMFQ' },
{ id: 79, categories: ["sport"], imgId: 'DOLzHdw' },
{ id: 80, categories: ["sport"], imgId: 'dluBLVG' },
{ id: 81, categories: ["sport"], imgId: 'XEqrFYt' },
{ id: 82, categories: ["sport"], imgId: 'jWrbLo7' },
{ id: 83, categories: ["sport"], imgId: 'S1DDTA6' },
{ id: 84, categories: ["sport"], imgId: 'hr942Vh' },
{ id: 85, categories: ["sport"], imgId: 'EsOP2NT' },
{ id: 86, categories: ["sport"], imgId: 'LSh1S6j' },
{ id: 87, categories: ["sport"], imgId: 'yKbT4Gf' },
{ id: 88, categories: ["sport"], imgId: '28BrQWh' },
{ id: 89, categories: ["sport"], imgId: '1i6doVT' },
{ id: 90, categories: ["sport"], imgId: '6uvzf1P' },
{ id: 91, categories: ["sport"], imgId: 'UBb2sY4' },
{ id: 92, categories: ["sport"], imgId: 'WPGdnjM' },
{ id: 93, categories: ["sport"], imgId: 'f7QjprI' },
{ id: 94, categories: ["sport"], imgId: 'AvLMuER' },
{ id: 95, categories: ["sport"], imgId: 'xIovblD' },
{ id: 96, categories: ["sport"], imgId: 'h16uC5f' },
{ id: 97, categories: ["sport"], imgId: 'xtis1O6' },
{ id: 98, categories: ["sport"], imgId: 'SuUvntB' },
{ id: 99, categories: ["sport"], imgId: 'LpssDg5' },
{ id: 100, categories: ["sport"], imgId: 'N5Nwvkf' },
{ id: 101, categories: ["sport"], imgId: 'AVWMZC4' },
{ id: 102, categories: ["sport"], imgId: 'wGOxiBp' },
{ id: 103, categories: ["sport"], imgId: 'FYmJTQX' },
{ id: 104, categories: ["sport"], imgId: 'ws0GNuo' },
{ id: 105, categories: ["sport"], imgId: 'XIZZNxY' },
{ id: 106, categories: ["sport"], imgId: '9ZUX0Fe' },
{ id: 107, categories: ["sport"], imgId: 'qxrHRCV' },
{ id: 108, categories: ["sport"], imgId: 'b2shQQj' },
{ id: 109, categories: ["sport"], imgId: 'MAaLIw3' },

//okazjonalne

{ id: 110, categories: ["occasional"], imgId: 'VOncTSD' },
{ id: 111, categories: ["occasional"], imgId: 'Dp5Vcv0' },
{ id: 112, categories: ["occasional"], imgId: 'EaUwzea' },
{ id: 113, categories: ["occasional"], imgId: 'FocDGZu' },
{ id: 114, categories: ["occasional"], imgId: 'FcQvx18' },
{ id: 115, categories: ["occasional"], imgId: 'w54THKX' },
{ id: 116, categories: ["occasional"], imgId: '605Pv2X' },
{ id: 117, categories: ["occasional"], imgId: 'wlCr5zd' },
{ id: 118, categories: ["occasional"], imgId: 'ZxoCcrP' },
{ id: 119, categories: ["occasional"], imgId: 'Y2JeBOD' },
{ id: 120, categories: ["occasional"], imgId: 'pTLRbm1' },
{ id: 121, categories: ["occasional"], imgId: 'c4CJp1q' },
{ id: 122, categories: ["occasional"], imgId: 'ksu4Tzp' },
{ id: 123, categories: ["occasional"], imgId: '0f7u8bO' },
{ id: 124, categories: ["occasional"], imgId: 'l9whu6C' },
{ id: 125, categories: ["occasional"], imgId: 'qPZOmNr' },
{ id: 126, categories: ["occasional"], imgId: '3kF3TLy' },
{ id: 127, categories: ["occasional"], imgId: 'EEpyO57' },
{ id: 128, categories: ["occasional"], imgId: 'zysjFq0' },
{ id: 129, categories: ["occasional"], imgId: 'nxqPjCj' },
{ id: 130, categories: ["occasional"], imgId: '2yez2pG' },
{ id: 131, categories: ["occasional"], imgId: 'oDStXj7' },
{ id: 132, categories: ["occasional"], imgId: 'oO6OGR8' },
{ id: 133, categories: ["occasional"], imgId: '50u7oB2' },
{ id: 134, categories: ["occasional"], imgId: 'RR45FFu' },
{ id: 135, categories: ["occasional"], imgId: 'SLc4OTU' },
{ id: 136, categories: ["occasional"], imgId: '2NesSZZ' },
{ id: 137, categories: ["occasional"], imgId: 'NUKmQXC' },
{ id: 138, categories: ["occasional"], imgId: 'hn8JCuX' },
{ id: 139, categories: ["occasional"], imgId: 'mPRZuC1' },
{ id: 140, categories: ["occasional"], imgId: 'JgHkc6r' },
{ id: 141, categories: ["occasional"], imgId: 'Yojhs15' },
{ id: 142, categories: ["occasional"], imgId: 'Ws8yCLp' },
{ id: 143, categories: ["occasional"], imgId: '2eUQior' },
{ id: 144, categories: ["occasional"], imgId: 'ugmFaGV' },
{ id: 145, categories: ["occasional"], imgId: '8ZLpmV1' },
{ id: 146, categories: ["occasional"], imgId: 'MTDX5XV' },
{ id: 147, categories: ["occasional"], imgId: 'BT84Snw' },
{ id: 148, categories: ["occasional"], imgId: 'ajpiE7p' },
{ id: 149, categories: ["occasional"], imgId: '0D6jMyf' },
{ id: 150, categories: ["occasional"], imgId: 'T4CvLBT' },
{ id: 151, categories: ["occasional"], imgId: 'M0YOa1t' },
{ id: 152, categories: ["occasional"], imgId: 'q7S5JGT' },
{ id: 153, categories: ["occasional"], imgId: '1xNxuSi' },
{ id: 154, categories: ["occasional"], imgId: '0qmJshp' },
{ id: 155, categories: ["occasional"], imgId: 'CTe0jpj' },
{ id: 156, categories: ["occasional"], imgId: 'krlTu9Q' },
{ id: 157, categories: ["occasional"], imgId: '2Fhdhg7' },
{ id: 158, categories: ["occasional"], imgId: 'fDDzkyi' },
{ id: 159, categories: ["occasional"], imgId: 'qvgkNi1' },
{ id: 160, categories: ["occasional"], imgId: 'PwXuYFQ' },
{ id: 161, categories: ["occasional"], imgId: 'SVEXpIW' },
{ id: 162, categories: ["occasional"], imgId: '5ZUiSSC' },
{ id: 163, categories: ["occasional"], imgId: 'vzUSgXZ' },
{ id: 164, categories: ["occasional"], imgId: 'lRCUWno' },
{ id: 165, categories: ["occasional"], imgId: 'TVOokYl' },
{ id: 166, categories: ["occasional"], imgId: 'Xw6urK1' },
{ id: 167, categories: ["occasional"], imgId: '1awFkKL' },

//wizerunkowe

{ id: 168, categories: ["business"], imgId: 'G18euf5' },
{ id: 169, categories: ["business"], imgId: 'O1M7amt' },
{ id: 170, categories: ["business"], imgId: 'I2rujcF' },
{ id: 171, categories: ["business"], imgId: 'H4Q2PM2' },
{ id: 172, categories: ["business"], imgId: 'WoPC9an' },
{ id: 173, categories: ["business"], imgId: 'spRMUmJ' },
{ id: 174, categories: ["business"], imgId: 'qZim7r3' },
{ id: 175, categories: ["business"], imgId: 'tFTJXkV' },
{ id: 176, categories: ["business"], imgId: 'DvfzVLQ' },
{ id: 177, categories: ["business"], imgId: 'Mvq3MO9' },
{ id: 178, categories: ["business"], imgId: '498QCFv' },
{ id: 179, categories: ["business"], imgId: 'GwIxwJi' },
{ id: 180, categories: ["business"], imgId: 'JhO5wRL' },
{ id: 181, categories: ["business"], imgId: 'b9kTfdM' },
{ id: 182, categories: ["business"], imgId: 'tSr4e9e' },
{ id: 183, categories: ["business"], imgId: 'Chu994l' },
{ id: 184, categories: ["business"], imgId: 'PPUHxBI' },
{ id: 185, categories: ["business"], imgId: 'xyj2yed' },
{ id: 186, categories: ["business"], imgId: 'x5PqRxr' },
{ id: 187, categories: ["business"], imgId: 'LsJIq9G' },
{ id: 188, categories: ["business"], imgId: 'P4QaKgp' },

//zwierzęta

{ id: 189, categories: ["animals"], imgId: 'Supgrah' },
{ id: 190, categories: ["animals"], imgId: '4j9pOhJ' },
{ id: 191, categories: ["animals"], imgId: '351TxLA' },
{ id: 192, categories: ["animals"], imgId: 'z0ut90r' },
{ id: 193, categories: ["animals"], imgId: 'hbiyvOl' },
{ id: 194, categories: ["animals"], imgId: 'ZxaNJRi' },
{ id: 195, categories: ["animals"], imgId: 'TVDf23Q' },
{ id: 196, categories: ["animals"], imgId: 'Xn6RTcV' },
{ id: 197, categories: ["animals"], imgId: '3YVjIkC' },
{ id: 198, categories: ["animals"], imgId: 'dbQKeiB' },
{ id: 199, categories: ["animals"], imgId: '8LutuGY' },


];






function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(null); // Śledzimy numer zdjęcia

  // Filtrowanie zdjęć (obsługuje teraz tablice kategorii)
  const filteredImages = imagesData.filter(img =>
    img.categories.includes(filter)
  );

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
          initial={{ opacity: 0, scale: 0, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: -50 }}
          transition={{ duration: 0.7 }}
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {/* zdjęcia w galerii */}
            {filteredImages.map((image, index) => (
            <motion.div 
              key={image.id}
              layout
              initial={{ opacity: 0 , scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale:0, x: -100 }}
              transition={transition1}
              onClick={() => setCurrentIndex(index)}
              className="flex justify-center items-center overflow-hidden group cursor-pointer" // Usunięte h-[250px]
            >
              <img
                src={`https://i.imgur.com/${image.imgId}h.webp`}
                alt=""
                loading="lazy"
                className="h-full object-cover transition duration-300 ease group-hover:opacity-50" // Przywrócone opacity
              />
            </motion.div>
            ))}
        
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-4 md:p-10"
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
              key={filteredImages[currentIndex].imgId}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              src={`https://i.imgur.com/${filteredImages[currentIndex].imgId}.jpg`}
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