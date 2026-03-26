import React from "react";
import Button from "../ui/Button";
import { FaArrowRight, FaJs } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { motion } from "motion/react";

function Hero() {
  const subtitle = () => {
    const subtitle =
      "Frontend Developer building modern, responsive web applications, with a strong focus on UI design and performance.";
    return subtitle.split("");
  };

  return (
    <section id="hero" className="section-settings relative">
      <div className="container  relative h-screen flex flex-col items-center justify-end">
        {/* Main Content */}
        <motion.div
          initial={{ scale: 0, filter: "blur(20px)", opacity: 0 }}
          animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl ">
              Hi, I'm Ahmed Mohamed
            </h1>
            <h2 className="relative text-gray-200 text-lg md:text-xl lg:text-2xl mb-3">
              <span>Frontend Developer</span>
              <span className="block animate-pulse absolute top-0 w-46 md:w-52 lg:w-64 h-8 skew-x-18 left-1/2 transform -translate-x-1/2 bg-blue-500  rounded-full -z-10"></span>
            </h2>

            <p className="text-xs md:text-sm lg:text-lg w-[70%] mx-auto leading-7">
              {subtitle().map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.06 }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </div>
        </motion.div>

        {/* Main image and icons for skills */}
        <motion.div
          className="relative w-80 md:w-90 lg:w-fit"
          initial={{ y: 200, filter: "blur(20px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
        >
          <img src="./hero-bg.webp" alt="main-photo" />

          <RiReactjsFill className="absolute top-[15%] left-[10%] text-6xl text-blue-400 opacity-50 animate-[spin_8s_linear_infinite] filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

          <FaJs className="absolute top-[30%] left-[25%] text-4xl text-yellow-500 opacity-60 animate-[bounce_3s_ease-in-out_infinite] filter drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]" />

          <RiTailwindCssFill className="absolute top-[30%] right-[20%] text-5xl text-cyan-400 opacity-50 animate-[pulse_4s_ease-in-out_infinite]" />

          <RiSupabaseFill className="absolute top-[10%] right-[15%] text-4xl text-emerald-500 opacity-60 animate-bounce" />
        </motion.div>
      </div>
      <span className="absolute bottom-0 h-1 w-full left-0 bg-yellow-500 opacity-25"></span>
    </section>
  );
}

export default Hero;
