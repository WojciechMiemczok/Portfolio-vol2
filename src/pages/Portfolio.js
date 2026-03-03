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
  { id: 1, categories: ["all"], src: link + 'w54THKX' + ".jpg" },
  { id: 2, categories: ["all"], src: link + 'Gl9ijhZ' + ".jpg" },
  { id: 3, categories: ["all"], src: link + 'MPxlErp' + ".jpg" },
  { id: 4, categories: ["all"], src: link + 'qNS6MRQ' + ".jpg" },
  { id: 5, categories: ["all"], src: link + 'FocDGZu' + ".jpg" },
  { id: 6, categories: ["all"], src: link + 'E7FJeGm' + ".jpg" },
  { id: 7, categories: ["all"], src: link + 'Mvq3MO9' + ".jpg" },
  { id: 8, categories: ["all"], src: link + 'njqQWgI' + ".jpg" },
  { id: 9, categories: ["all"], src: link + 'VOncTSD' + ".jpg" },
  { id: 10, categories: ["all"], src: link + 'qq0GQLK' + ".jpg" },
  { id: 11, categories: ["all"], src: link + 'SvS8cWk' + ".jpg" },
  { id: 12, categories: ["all"], src: link + '6YyU9OZ' + ".jpg" },
  { id: 13, categories: ["all"], src: link + 'GwIxwJi' + ".jpg" },
  { id: 14, categories: ["all"], src: link + '3GacUh3' + ".jpg" },
  { id: 15, categories: ["all"], src: link + 'qxrHRCV' + ".jpg" },
  { id: 16, categories: ["all"], src: link + 'wlCr5zd' + ".jpg" },
  { id: 17, categories: ["all"], src: link + 'WoPC9an' + ".jpg" },
  { id: 18, categories: ["all"], src: link + 'Ot33JoX' + ".jpg" },
  { id: 19, categories: ["all"], src: link + 'C2vCkT6' + ".jpg" },
  { id: 20, categories: ["all"], src: link + '4j9pOhJ' + ".jpg" },


  { id: 2, categories: ["portrait"], src: link + 'Gl9ijhZ' + ".jpg" },
  { id: 3, categories: ["portrait"], src: link + 'MPxlErp' + ".jpg" },
  { id: 6, categories: ["portrait"], src: link + 'E7FJeGm' + ".jpg" },
  { id: 8, categories: ["portrait"], src: link + 'njqQWgI' + ".jpg" },
  { id: 12, categories: ["portrait"], src: link + '6YyU9OZ' + ".jpg" },
  { id: 14, categories: ["portrait"], src: link + '3GacUh3' + ".jpg" },
  { id: 18, categories: ["portrait"], src: link + 'Ot33JoX' + ".jpg" },
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


  //sportowe

{ id: 67, categories: ["sport"], src: link + 'qq0GQLK' + ".jpg" },
{ id: 73, categories: ["sport"], src: link + 'nYXB5xL' + ".jpg" },
{ id: 69, categories: ["sport"], src: link + 'C2vCkT6' + ".jpg" },
{ id: 70, categories: ["sport"], src: link + 'ZuOjsco' + ".jpg" },
{ id: 71, categories: ["sport"], src: link + 'SvS8cWk' + ".jpg" },
{ id: 72, categories: ["sport"], src: link + 'qKDzqNx' + ".jpg" },
{ id: 68, categories: ["sport"], src: link + 'hojWhUq' + ".jpg" },
{ id: 74, categories: ["sport"], src: link + '4XxKEVu' + ".jpg" },
{ id: 75, categories: ["sport"], src: link + 'qNS6MRQ' + ".jpg" },
{ id: 76, categories: ["sport"], src: link + 'jdrIa2N' + ".jpg" },
{ id: 77, categories: ["sport"], src: link + 'oUnMtKy' + ".jpg" },
{ id: 78, categories: ["sport"], src: link + 'upJaMFQ' + ".jpg" },
{ id: 79, categories: ["sport"], src: link + 'DOLzHdw' + ".jpg" },
{ id: 80, categories: ["sport"], src: link + 'dluBLVG' + ".jpg" },
{ id: 81, categories: ["sport"], src: link + 'XEqrFYt' + ".jpg" },
{ id: 82, categories: ["sport"], src: link + 'jWrbLo7' + ".jpg" },
{ id: 83, categories: ["sport"], src: link + 'S1DDTA6' + ".jpg" },
{ id: 84, categories: ["sport"], src: link + 'hr942Vh' + ".jpg" },
{ id: 85, categories: ["sport"], src: link + 'EsOP2NT' + ".jpg" },
{ id: 86, categories: ["sport"], src: link + 'LSh1S6j' + ".jpg" },
{ id: 87, categories: ["sport"], src: link + 'yKbT4Gf' + ".jpg" },
{ id: 88, categories: ["sport"], src: link + '28BrQWh' + ".jpg" },
{ id: 89, categories: ["sport"], src: link + '1i6doVT' + ".jpg" },
{ id: 90, categories: ["sport"], src: link + '6uvzf1P' + ".jpg" },
{ id: 91, categories: ["sport"], src: link + 'UBb2sY4' + ".jpg" },
{ id: 92, categories: ["sport"], src: link + 'WPGdnjM' + ".jpg" },
{ id: 93, categories: ["sport"], src: link + 'f7QjprI' + ".jpg" },
{ id: 94, categories: ["sport"], src: link + 'AvLMuER' + ".jpg" },
{ id: 95, categories: ["sport"], src: link + 'xIovblD' + ".jpg" },
{ id: 96, categories: ["sport"], src: link + 'h16uC5f' + ".jpg" },
{ id: 97, categories: ["sport"], src: link + 'xtis1O6' + ".jpg" },
{ id: 98, categories: ["sport"], src: link + 'SuUvntB' + ".jpg" },
{ id: 99, categories: ["sport"], src: link + 'LpssDg5' + ".jpg" },
{ id: 100, categories: ["sport"], src: link + 'N5Nwvkf' + ".jpg" },
{ id: 101, categories: ["sport"], src: link + 'AVWMZC4' + ".jpg" },
{ id: 102, categories: ["sport"], src: link + 'wGOxiBp' + ".jpg" },
{ id: 103, categories: ["sport"], src: link + 'FYmJTQX' + ".jpg" },
{ id: 104, categories: ["sport"], src: link + 'ws0GNuo' + ".jpg" },
{ id: 105, categories: ["sport"], src: link + 'XIZZNxY' + ".jpg" },
{ id: 106, categories: ["sport"], src: link + '9ZUX0Fe' + ".jpg" },
{ id: 107, categories: ["sport"], src: link + 'qxrHRCV' + ".jpg" },
{ id: 108, categories: ["sport"], src: link + 'b2shQQj' + ".jpg" },
{ id: 109, categories: ["sport"], src: link + 'MAaLIw3' + ".jpg" },

//okazjonalne

{ id: 110, categories: ["occasional"], src: link + 'VOncTSD' + ".jpg" },
{ id: 111, categories: ["occasional"], src: link + 'Dp5Vcv0' + ".jpg" },
{ id: 112, categories: ["occasional"], src: link + 'EaUwzea' + ".jpg" },
{ id: 113, categories: ["occasional"], src: link + 'FocDGZu' + ".jpg" },
{ id: 114, categories: ["occasional"], src: link + 'FcQvx18' + ".jpg" },
{ id: 115, categories: ["occasional"], src: link + 'w54THKX' + ".jpg" },
{ id: 116, categories: ["occasional"], src: link + '605Pv2X' + ".jpg" },
{ id: 117, categories: ["occasional"], src: link + 'wlCr5zd' + ".jpg" },
{ id: 118, categories: ["occasional"], src: link + 'ZxoCcrP' + ".jpg" },
{ id: 119, categories: ["occasional"], src: link + 'Y2JeBOD' + ".jpg" },
{ id: 120, categories: ["occasional"], src: link + 'pTLRbm1' + ".jpg" },
{ id: 121, categories: ["occasional"], src: link + 'c4CJp1q' + ".jpg" },
{ id: 122, categories: ["occasional"], src: link + 'ksu4Tzp' + ".jpg" },
{ id: 123, categories: ["occasional"], src: link + '0f7u8bO' + ".jpg" },
{ id: 124, categories: ["occasional"], src: link + 'l9whu6C' + ".jpg" },
{ id: 125, categories: ["occasional"], src: link + 'qPZOmNr' + ".jpg" },
{ id: 126, categories: ["occasional"], src: link + '3kF3TLy' + ".jpg" },
{ id: 127, categories: ["occasional"], src: link + 'EEpyO57' + ".jpg" },
{ id: 128, categories: ["occasional"], src: link + 'zysjFq0' + ".jpg" },
{ id: 129, categories: ["occasional"], src: link + 'nxqPjCj' + ".jpg" },
{ id: 130, categories: ["occasional"], src: link + '2yez2pG' + ".jpg" },
{ id: 131, categories: ["occasional"], src: link + 'oDStXj7' + ".jpg" },
{ id: 132, categories: ["occasional"], src: link + 'oO6OGR8' + ".jpg" },
{ id: 133, categories: ["occasional"], src: link + '50u7oB2' + ".jpg" },
{ id: 134, categories: ["occasional"], src: link + 'RR45FFu' + ".jpg" },
{ id: 135, categories: ["occasional"], src: link + 'SLc4OTU' + ".jpg" },
{ id: 136, categories: ["occasional"], src: link + '2NesSZZ' + ".jpg" },
{ id: 137, categories: ["occasional"], src: link + 'NUKmQXC' + ".jpg" },
{ id: 138, categories: ["occasional"], src: link + 'hn8JCuX' + ".jpg" },
{ id: 139, categories: ["occasional"], src: link + 'mPRZuC1' + ".jpg" },
{ id: 140, categories: ["occasional"], src: link + 'JgHkc6r' + ".jpg" },
{ id: 141, categories: ["occasional"], src: link + 'Yojhs15' + ".jpg" },
{ id: 142, categories: ["occasional"], src: link + 'Ws8yCLp' + ".jpg" },
{ id: 143, categories: ["occasional"], src: link + '2eUQior' + ".jpg" },
{ id: 144, categories: ["occasional"], src: link + 'ugmFaGV' + ".jpg" },
{ id: 145, categories: ["occasional"], src: link + '8ZLpmV1' + ".jpg" },
{ id: 146, categories: ["occasional"], src: link + 'MTDX5XV' + ".jpg" },
{ id: 147, categories: ["occasional"], src: link + 'BT84Snw' + ".jpg" },
{ id: 148, categories: ["occasional"], src: link + 'ajpiE7p' + ".jpg" },
{ id: 149, categories: ["occasional"], src: link + '0D6jMyf' + ".jpg" },
{ id: 150, categories: ["occasional"], src: link + 'T4CvLBT' + ".jpg" },
{ id: 151, categories: ["occasional"], src: link + 'M0YOa1t' + ".jpg" },
{ id: 152, categories: ["occasional"], src: link + 'q7S5JGT' + ".jpg" },
{ id: 153, categories: ["occasional"], src: link + '1xNxuSi' + ".jpg" },
{ id: 154, categories: ["occasional"], src: link + '0qmJshp' + ".jpg" },
{ id: 155, categories: ["occasional"], src: link + 'CTe0jpj' + ".jpg" },
{ id: 156, categories: ["occasional"], src: link + 'krlTu9Q' + ".jpg" },
{ id: 157, categories: ["occasional"], src: link + '2Fhdhg7' + ".jpg" },
{ id: 158, categories: ["occasional"], src: link + 'fDDzkyi' + ".jpg" },
{ id: 159, categories: ["occasional"], src: link + 'qvgkNi1' + ".jpg" },
{ id: 160, categories: ["occasional"], src: link + 'PwXuYFQ' + ".jpg" },
{ id: 161, categories: ["occasional"], src: link + 'SVEXpIW' + ".jpg" },
{ id: 162, categories: ["occasional"], src: link + '5ZUiSSC' + ".jpg" },
{ id: 163, categories: ["occasional"], src: link + 'vzUSgXZ' + ".jpg" },
{ id: 164, categories: ["occasional"], src: link + 'lRCUWno' + ".jpg" },
{ id: 165, categories: ["occasional"], src: link + 'TVOokYl' + ".jpg" },
{ id: 166, categories: ["occasional"], src: link + 'Xw6urK1' + ".jpg" },
{ id: 167, categories: ["occasional"], src: link + '1awFkKL' + ".jpg" },

//wizerunkowe


{ id: 168, categories: ["business"], src: link + 'G18euf5' + ".jpg" },
{ id: 169, categories: ["business"], src: link + 'O1M7amt' + ".jpg" },
{ id: 170, categories: ["business"], src: link + 'I2rujcF' + ".jpg" },
{ id: 171, categories: ["business"], src: link + 'H4Q2PM2' + ".jpg" },
{ id: 172, categories: ["business"], src: link + 'WoPC9an' + ".jpg" },
{ id: 173, categories: ["business"], src: link + 'spRMUmJ' + ".jpg" },
{ id: 174, categories: ["business"], src: link + 'qZim7r3' + ".jpg" },
{ id: 175, categories: ["business"], src: link + 'tFTJXkV' + ".jpg" },
{ id: 176, categories: ["business"], src: link + 'DvfzVLQ' + ".jpg" },
{ id: 177, categories: ["business"], src: link + 'Mvq3MO9' + ".jpg" },
{ id: 178, categories: ["business"], src: link + '498QCFv' + ".jpg" },
{ id: 179, categories: ["business"], src: link + 'GwIxwJi' + ".jpg" },
{ id: 180, categories: ["business"], src: link + 'JhO5wRL' + ".jpg" },
{ id: 181, categories: ["business"], src: link + 'b9kTfdM' + ".jpg" },
{ id: 182, categories: ["business"], src: link + 'tSr4e9e' + ".jpg" },
{ id: 183, categories: ["business"], src: link + 'Chu994l' + ".jpg" },
{ id: 184, categories: ["business"], src: link + 'PPUHxBI' + ".jpg" },
{ id: 185, categories: ["business"], src: link + 'xyj2yed' + ".jpg" },
{ id: 186, categories: ["business"], src: link + 'x5PqRxr' + ".jpg" },
{ id: 187, categories: ["business"], src: link + 'LsJIq9G' + ".jpg" },
{ id: 188, categories: ["business"], src: link + 'P4QaKgp' + ".jpg" },


//zierzęta

{ id: 189, categories: ["animals"], src: link + 'Supgrah' + ".jpg" },
{ id: 190, categories: ["animals"], src: link + '4j9pOhJ' + ".jpg" },
{ id: 191, categories: ["animals"], src: link + '351TxLA' + ".jpg" },
{ id: 192, categories: ["animals"], src: link + 'z0ut90r' + ".jpg" },
{ id: 193, categories: ["animals"], src: link + 'hbiyvOl' + ".jpg" },
{ id: 194, categories: ["animals"], src: link + 'ZxaNJRi' + ".jpg" },
{ id: 195, categories: ["animals"], src: link + 'TVDf23Q' + ".jpg" },
{ id: 196, categories: ["animals"], src: link + 'Xn6RTcV' + ".jpg" },
{ id: 197, categories: ["animals"], src: link + '3YVjIkC' + ".jpg" },
{ id: 198, categories: ["animals"], src: link + 'dbQKeiB' + ".jpg" },
{ id: 199, categories: ["animals"], src: link + '8LutuGY' + ".jpg" },


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