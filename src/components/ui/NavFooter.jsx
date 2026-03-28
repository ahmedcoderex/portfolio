import { AiOutlineHome } from "react-icons/ai";
import { IoFlashOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-scroll";

const links = [
  { icon: <AiOutlineHome />, label: "Hero", to: "hero" },
  { icon: <MdOutlineWorkOutline />, label: "Projects", to: "projects" },
  { icon: <IoFlashOutline />, label: "Skills", to: "skills" },
  { icon: <IoPersonOutline />, label: "About", to: "about" },
];

function NavFooter() {
  return (
    <div>
      <h3 className="text-gray-700 text-lg mb-6 font-semibold uppercase">
        Quick Links
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map(({ icon, label, to }, index) => (
          <Link
            smooth={true}
            duration={500}
            key={index}
            spy={true}
            to={to}
            className="flex cursor-pointer items-center gap-3 text-gray-600 hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-lg">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavFooter;
