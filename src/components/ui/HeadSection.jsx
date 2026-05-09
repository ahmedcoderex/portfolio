import { motion } from "motion/react";
import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";
function HeadSection({ text, more }) {
  const { isDark } = useContext(themeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${isDark ? "text-gray-300" : "text-gray-800"} w-fit mx-auto text-4xl relative mb-12`}
    >
      <h2>
        {text} <span className="font-bold text-blue-500 text-3xl">{more}</span>
      </h2>
      <span className="block absolute bg-blue-500 left-1/2 transform -translate-x-1/2 -bottom-1 w-22 h-2  rounded-full"></span>
    </motion.div>
  );
}

export default HeadSection;
