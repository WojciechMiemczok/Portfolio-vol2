import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { transition1 } from "../transitions";

const imagesData = [
  { id: 1, category: "nature", src: "https://picsum.photos/id/1015/400/300" },
  { id: 2, category: "nature", src: "https://picsum.photos/id/1011/400/300" },
  { id: 3, category: "city", src: "https://picsum.photos/id/1012/400/300" },
  { id: 4, category: "animals", src: "https://picsum.photos/id/1025/400/300" },
  { id: 5, category: "nature", src: "https://picsum.photos/id/1035/400/300" }
];

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? imagesData
      : imagesData.filter(img => img.category === filter);

  return (
    <section className="min-h-screen text-black px-6 py-16">
      <div className="mt-20 max-w-6xl mx-auto">

        <h1 className="h1 text-center mb-12">
          Portfolio
        </h1>

        {/* Przyciski kategorii */}
        <div className="flex flex-wrap font-semibold justify-center gap-4 mb-12 text-[#696c6d]">
          {["all", "nature", "city", "animals"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2 transition-all duration-300 text-lg font-medium
                ${filter === cat ? "text-black" : "text-[#696c6d] hover:text-black"}`}
            >
              {cat === "all"
                ? "Wszystkie"
                : cat === "nature"
                ? "Natura"
                : cat === "city"
                ? "Miasto"
                : "Zwierzęta"}

              {/* Zaokrąglona underline tylko dla aktywnego */}
              <span
                className={`absolute left-0 -bottom-0 h-[2px] w-full bg-[#696c6d8a] rounded-full
                origin-center transform transition-transform duration-300
                ${filter === cat ? "scale-x-[75%]" : "scale-x-0"}`}
              ></span>
            </button>
            ))}
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredImages.map(image => (
            <motion.div 
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, z:10 }}
            transition={{ ...transition1, duration: 0.4,  }}
            className="overflow-hidden rounded-xl group">
              
              <img
                src={image.src}
                alt=""
                className="w-full h-64 object-cover transition duration-300 ease group-hover:opacity-[50%]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
        </div>
      </div>

      {/* Strzałka */}
      <div className="lg:hidden text-4xl fixed bottom-10 right-10 z-50">
        <Link to="/contact">
          <MdOutlineKeyboardDoubleArrowDown />
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;