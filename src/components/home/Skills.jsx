import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import {
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { motion } from "motion/react";
import HeadSection from "../ui/HeadSection";
const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    color: "text-[#E34F26]",
    shadow: "shadow-[0_0_15px_rgba(227,79,38,0.3)]",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    color: "text-[#1572B6]",
    shadow: "shadow-[0_0_15px_rgba(21,114,182,0.3)]",
  },
  {
    icon: <FaJs />,
    name: "JS",
    color: "text-[#F7DF1E]",
    shadow: "shadow-[0_0_15px_rgba(247,223,30,0.3)]",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind",
    color: "text-[#06B6D4]",
    shadow: "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
  },
  {
    icon: <RiReactjsFill />,
    name: "React JS",
    color: "text-[#61DAFB]",
    shadow: "shadow-[0_0_15px_rgba(97,218,251,0.3)]",
  },
  {
    icon: <RiSupabaseFill />,
    name: "Supabase",
    color: "text-[#3ECF8E]",
    shadow: "shadow-[0_0_15px_rgba(62,207,142,0.3)]",
  },
];
function Skills() {
  return (
    <section id="skills" className="section-settings">
      <div className="container">
        <HeadSection text="Skills" />
        <div className="flex flex-wrap justify-center gap-18 mt-18 justify-items-center w-full md:w-[70%] lg:w-[40%] mx-auto">
          {skills.map(({ icon, name, color, shadow }, index) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{once: true}}
              key={index}
              className={`relative flex group flex-col items-center gap-2  bg-white cursor-pointer w-34 py-4 rounded-2xl ${shadow}`}
            >
              <div className={`text-6xl ${color}`}>{icon}</div>
              <h4
                className={`absolute bg-white rounded-2xl top-1/2 opacity-0 group-hover:opacity-100 transform -translate-y-1/2 group-hover:-top-10 group-hover:translate-y-0 -z-1 w-full text-center py-1 px-3 transition-all duration-300`}
              >
                <span className={`${color} text-sm font-semibold`}>{name}</span>
                <span
                  className={`absolute left-1/2 -bottom-1 border-b border-r border-white w-2 h-2 rotate-45 transform -translate-x-1/2`}
                ></span>
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
