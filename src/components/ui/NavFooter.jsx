import { AiOutlineHome } from "react-icons/ai";
import { IoFlashOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

const links = [
  { icon: <AiOutlineHome />, label: "Home", to: "#home" },
  { icon: <IoFlashOutline />, label: "Skills", to: "#skills" },
  { icon: <MdOutlineWorkOutline />, label: "Projects", to: "#projects" },
  { icon: <IoPersonOutline />, label: "About", to: "#about" },
  { icon: <GrContactInfo />, label: "Contact", to: "#contact" },
];

function NavFooter() {
    return (
     
        <div>
          <h3 className="text-gray-700 text-lg mb-6 font-semibold uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {links.map(({ icon, label, to }, index) => (
              <li key={index}>
                <a
                  href={to}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-400 transition-colors duration-300"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default NavFooter
