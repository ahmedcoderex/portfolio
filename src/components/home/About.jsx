import { CgCoffee } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import HeadSection from "../ui/HeadSection";
import { SiTarget } from "react-icons/si";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

const about = [
  {
    icon: <HiOutlineCodeBracket />,
    title: "Portfolio",
    description: "Active Projects",
    color: "text-yellow-400",
  },
  {
    icon: <CiLocationOn />,
    title: "Base",
    description: "Egypt, Fayoum",
    color: "text-blue-400",
  },
  {
    icon: <CgCoffee />,
    title: "Powered By",
    description: "Espresso & Logic",
    color: "text-orange-500",
  },
  {
    icon: <SiTarget />,
    title: "Focus",
    description: "Frontend Architect",
    color: "text-purple-400",
  },
];

function About() {
  const { isDark } = useContext(themeContext);
 

  return (
    <section
      id="about"
      className={`py-20 px-4 ${
        isDark ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <HeadSection text="About" more="me" />

        {/* Text Content */}
        <div className="max-w-3xl space-y-6">
          <h3
            className={`text-xl md:text-2xl font-semibold leading-snug ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I’m Ahmed Mohamed, a{" "}
            <span className="text-blue-400">Frontend Developer</span> with a
            passion for transforming complex designs into seamless, real-world
            user experiences.
          </h3>

          <p
            className={`text-base md:text-lg leading-relaxed opacity-80 ${
              isDark ? "text-gray-300" : "text-gray-800"
            }`}
          >
            I specialize in building high-performance web applications using
            <span className="text-blue-400"> React.js</span> 
        , with a meticulous
            focus on performance and Clean Code. I architect integrated systems
            leveraging the latest technologies to ensure scalability.
          </p>

          <p
            className={`text-base md:text-lg leading-relaxed opacity-80 italic border-l-2 pl-4 py-2 rounded-r-lg
            ${
              isDark
                ? "bg-white/5 border-yellow-400 text-gray-300"
                : "bg-gray-100 border-yellow-400 text-gray-700"
            }`}
          >
            "I believe that code is more than just commands; it is a language
            for building digital identities."
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center mt-16 w-full">
          {about.map(({ icon, title, description, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-5 py-4 px-6 rounded-2xl shadow-2xl transition-all group w-full sm:w-64 backdrop-blur-md
              
              ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              {/* Icon */}
              <div
                className={`text-4xl ${color} group-hover:scale-110 transition-transform`}
              >
                {icon}
              </div>

              {/* Text */}
              <div className="text-start">
                <h5
                  className={`text-sm font-medium uppercase tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {title}
                </h5>

                <h6
                  className={`text-base font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {description}
                </h6>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
