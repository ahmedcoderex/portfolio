import { motion } from "motion/react";
function CardProject({
  index,
  image,
  title,
  description,
  linkGitHub,
  linkView,
  techStack,
}) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ delay: index * 1, duration: .6 }}
      viewport={{ once: true }}
      className="group rounded-2xl shadow-lg bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>

        {/* Tech Stack List */}
        <div className="space-y-1 mb-6 border-t pt-4 border-gray-50">
          <h4 className="text-sm font-bold text-gray-700 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map(
              ({ name, textColor, bgColor, borderColor }, index) => (
                <div
                  key={index}
                  className={`py-1 px-2 text-[10px] ${bgColor} ${textColor} border ${borderColor} text-sm font-medium`}
                >
                  {name}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-auto">
          <a
            href={linkGitHub}
            target="_blank"
            className="inline-block w-12 text-center py-2 rounded-md shadow-xl cursor-pointer  text-gray-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            code
          </a>
          <a
            href={linkView}
            target="_blank"
            className="inline-block w-12  bg-blue-600 text-gray-200 text-center py-2 rounded-md shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
          >
            live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardProject;
