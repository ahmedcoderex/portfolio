import { motion } from "motion/react";
import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

function CardProject({
  index,
  image,
  title,
  description,
  linkGitHub,
  linkView,
  techStack,
}) {
  const { isDark } = useContext(themeContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 1, duration: 0.6 }}
      viewport={{ once: true }}
      className={`group rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-2xl
      ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"}`}
    >
      {/* Image Container */}
      <div className="h-56 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-black/20" : "bg-transparent"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <h3
          className={`text-2xl font-bold mb-3 ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-4 line-clamp-4 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div
          className={`space-y-1 mb-6 border-t pt-4 ${
            isDark ? "border-gray-700" : "border-gray-50"
          }`}
        >
          <h4
            className={`text-sm font-bold mb-2 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Tech Stack:
          </h4>

          <div className="flex flex-wrap gap-2">
            {techStack.map(
              ({ name, textColor, bgColor, borderColor }, index) => (
                <div
                  key={index}
                  className={`py-1 px-2 text-[10px] border font-medium rounded-md
                  ${bgColor} ${textColor} ${borderColor}`}
                >
                  {name}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          {/* GitHub */}
          <a
            href={linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block w-14 text-center py-2 rounded-md shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300
            ${
              isDark
                ? "text-gray-300 bg-gray-800 hover:bg-gray-700"
                : "text-gray-700 bg-gray-100 hover:bg-gray-200"
            }`}
          >
            code
          </a>

          {/* Live */}
          <a
            href={linkView}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block w-14 text-center py-2 rounded-md shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300
            ${
              isDark
                ? "bg-blue-500 text-white hover:bg-blue-400"
                : "bg-blue-600 text-gray-200 hover:bg-blue-500"
            }`}
          >
            live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardProject;
