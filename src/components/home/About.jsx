import { CgCoffee } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import HeadSection from "../ui/HeadSection";
import { SiTarget } from "react-icons/si";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { motion } from "framer-motion"; // لا تنسى إضافة الموشن!

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
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        <HeadSection text="About" more="me" />


        <div className="max-w-3xl space-y-6 text-gray-800">
          <h3 className="text-xl md:text-2xl font-semibold leading-snug text-gray-600">
            I’m Ahmed Mohamed, a{" "}
            <span className="text-blue-400">Frontend Developer</span> with a
            passion for transforming complex designs into seamless, real-world
            user experiences.
          </h3>

          <p className="text-base text-gray-800 md:text-lg leading-relaxed opacity-80">
            I specialize in building high-performance web applications using
            <span className="text-blue-400"> React.js</span> and{" "}
            <span className="text-purple-400">Next.js</span>, with a meticulous
            focus on performance and Clean Code. I architect integrated systems
            leveraging the latest technologies to ensure scalability.
          </p>

          <p className="text-base md:text-lg leading-relaxed  opacity-80 italic border-l-2 border-yellow-400 pl-4 py-2 bg-white/5 rounded-r-lg">
            "I believe that code is more than just commands; it is a language
            for building digital identities."
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-16 w-full">
          {about.map(({ icon, title, description, color }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="flex items-center gap-5 bg-white/5 backdrop-blur-md py-4 px-6 rounded-2xl border border-white/10 shadow-2xl hover:border-white/20 hover:bg-white/10 transition-all group w-full sm:w-64"
            >
              <div
                className={`text-4xl ${color} group-hover:scale-110 transition-transform`}
              >
                {icon}
              </div>

              <div className="text-start">
                <h5 className="text-sm font-medium text-gray-800 uppercase tracking-wider">
                  {title}
                </h5>
                <h6 className="text-base font-bold text-gray-900">
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
