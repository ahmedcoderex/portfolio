import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { motion } from "motion/react";
import HeadSection from "../ui/HeadSection";
import { SiAxios, SiFirebase, SiRedux, SiZulip } from "react-icons/si";
import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    color: "text-[#E34F26]",
    shadow: "shadow-[0_0_15px_rgba(227,79,38,0.4)]",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    color: "text-[#1572B6]",
    shadow: "shadow-[0_0_15px_rgba(21,114,182,0.4)]",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    color: "text-[#F7DF1E]",
    shadow: "shadow-[0_0_15px_rgba(247,223,30,0.5)]",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind",
    color: "text-[#06B6D4]",
    shadow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  },
  {
    icon: <RiReactjsFill />,
    name: "React JS",
    color: "text-[#61DAFB]",
    shadow: "shadow-[0_0_15px_rgba(97,218,251,0.4)]",
  },
  {
    icon: <RiSupabaseFill />,
    name: "Supabase",
    color: "text-[#3ECF8E]",
    shadow: "shadow-[0_0_15px_rgba(62,207,142,0.4)]",
  },
  {
    icon: <SiAxios />,
    name: "Axios",
    color: "text-[#5A29E4]",
    shadow: "shadow-[0_0_15px_rgba(90,41,228,0.4)]",
  },
  {
    icon: <SiZulip />,
    name: "Zustand",
    color: "text-[#764ABC]",
    shadow: "shadow-[0_0_15px_rgba(118,74,188,0.4)]",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "text-[#F05032]",
    shadow: "shadow-[0_0_15px_rgba(240,80,50,0.4)]",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    color: "text-black",
    shadow: "shadow-[0_0_15px_rgba(0,0,0,0.4)]",
  },
  {
    icon: <FaFigma />,
    name: "Figma",
    color: "text-[#F24E1E]",
    shadow: "shadow-[0_0_15px_rgba(242,78,30,0.4)]",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "text-[#FFCA28]",
    shadow: "shadow-[0_0_15px_rgba(255,202,40,0.5)]",
  },
];

function Skills() {
  const { theme } = useContext(themeContext);
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className={`section-settings ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="container">
        <HeadSection text="Skills" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 gap-y-14 lg:gap-y-14 xl:gap-y-18 mt-18">
          {skills.map(({ icon, name, color, shadow }, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative w-full flex group items-center justify-center gap-2 h-22 md:h-30 lg:h-38 xl:h-42 cursor-pointer py-4 rounded-2xl transition-all duration-300
              
              ${
                isDark
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-white hover:bg-gray-50"
              }
              
              ${shadow}`}
            >
              {/* Icon */}
              <div
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${color}`}
              >
                {icon}
              </div>

              {/* Tooltip */}
              <h4
                className={`absolute rounded-2xl top-1/2 opacity-0 group-hover:opacity-100 transform -translate-y-1/2 group-hover:-top-10 xl:group-hover:-top-12 group-hover:translate-y-0 w-full text-center py-1 px-3 transition-all duration-300
                
                ${
                  isDark
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <span
                  className={`${color} text-xs md:text-sm lg:text-lg xl:text-xl font-semibold`}
                >
                  {name}
                </span>

                {/* Arrow */}
                <span
                  className={`absolute left-1/2 -bottom-1 w-2 h-2 rotate-45 transform -translate-x-1/2 border-b border-r
                  ${isDark ? "border-gray-800" : "border-white"}`}
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