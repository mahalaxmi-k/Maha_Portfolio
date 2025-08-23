import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <div>
      <motion.div
        className="flex flex-col lg:flex-col justify-center items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16 text-black "
        id="Maha"
      >
        {/* Floating Tech Icons */}
        <div className="hidden lg:block">
          {/* JavaScript */}
          <motion.div className="absolute top-32 left-72">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/js.png"
              alt="JavaScript"
              className="w-24 h-24 rotate-12"
            />
          </motion.div>

          {/* Tailwind */}
          <motion.div className="absolute top-60 left-32">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/tailwind.png"
              alt="Tailwind"
              className="w-24 h-24 -rotate-6"
            />
          </motion.div>

          {/* Vercel */}
          <motion.div className="absolute bottom-60 left-32">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/vercel.png"
              alt="Vercel"
              className="w-24 h-24 -rotate-3"
            />
          </motion.div>

          {/* MongoDB */}
          <motion.div className="absolute top-32 right-72">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/mongo.png"
              alt="MongoDB"
              className="w-24 h-24 -rotate-12"
            />
          </motion.div>

          {/* Node.js */}
          <motion.div className="absolute top-64 right-32">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/nodejs.png"
              alt="Node.js"
              className="w-24 h-24 rotate-6"
            />
          </motion.div>

          {/* React.js */}
          <motion.div className="absolute bottom-60 right-32">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/react.png"
              alt="React.js"
              className="w-24 h-24 rotate-3"
            />
          </motion.div>

          {/* HTML + CSS */}
          <motion.div className="absolute bottom-32 right-72">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/htmlcss.png"
              alt="HTML + CSS"
              className="w-24 h-24 rotate-12"
            />
          </motion.div>

          {/* MySQL */}
          <motion.div className="absolute bottom-32 left-72">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/mysql.png"
              alt="MySQL"
              className="w-24 h-24 -rotate-12"
            />
          </motion.div>

        

          {/* GitHub + Git */}
          <motion.div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="./assets/github.png"
              alt="GitHub + Git"
              className="w-24 h-24"
            />
          </motion.div>
        </div>

        {/* Social Icons Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-row lg:flex-row justify-evenly items-center gap-4"
        >
          {[
            { url: "https://www.linkedin.com/in/mahalaxmi-k" },
            { url: "https://leetcode.com/u/Maha_2025/" },
            { url: "https://github.com/mahalaxmi-k" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SocialIcon url={item.url} className="w-10 h-10 md:w-12 md:h-12" />
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-transparent w-full lg:w-3/4 py-12 sm:py-16 px-6 sm:px-12 lg:px-20 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-black font-bold text-4xl sm:text-5xl text-center"
          >
            Hello! I'm Mahalaxmi
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-gray-800 font-semibold text-2xl sm:text-3xl mt-3 text-center"
          >
            Computer Science & Engineering Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="text-gray-800 text-lg sm:text-xl mt-4 text-center"
          >
            Fourth-year undergraduate engineering student at Woxsen University
          </motion.p>
        </motion.div>

        {/* Fixed "Know More" Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="px-6 py-3 border-2 border-black text-black flex items-center gap-2 rounded-lg hover:bg-black hover:text-white duration-300"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Know More <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
