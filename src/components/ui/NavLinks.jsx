import { AiOutlineHome } from "react-icons/ai";
import { IoCloseSharp, IoFlashOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-scroll";

const links = [
  {
    icon: <AiOutlineHome />,
    lable: "hero",
    to: "hero",
  },
  {
    icon: <MdOutlineWorkOutline />,
    lable: "Projects",
    to: "projects",
  },
  {
    icon: <IoFlashOutline />,
    lable: "Skills",
    to: "skills",
  },
  {
    icon: <IoPersonOutline />,
    lable: "About",
    to: "about",
  },
];

function NavLinks({ isPhone, closeNavLinks }) {
  return (
    <nav
      className={`${isPhone && "fixed top-0 left-0 w-full flex-col justify-center backdrop-blur-2xl z-50 gap-4 h-screen"} flex items-center gap-4`}
    >
      {/* close navlinks if user on mobile */}
      {isPhone && (
        <IoCloseSharp
          onClick={() => closeNavLinks(false)}
          className="text-4xl cursor-pointer text-yellow-500 font-semibold absolute top-32 right-12 "
        />
      )}
      {/* buttom links */}
      {links.map(({ lable, icon, to }, index) => (
        <Link
          to={to}
          key={index}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass="active"
          onClick={() => {
            isPhone && closeNavLinks(false)
          }}
          className={`relative group cursor-pointer py-1 px-2 rounded-2xl ${isPhone ? "text-lg" : "text-sm"}  text-gray-800 gap-1 flex items-center`}
        >
          <div className="group-hover:scale-125 transition-all duration-300">
            {icon}
          </div>

          <span className="opacity-65 group-hover:opacity-100 group-[.active]:opacity-100 group-[.active]:font-semibold group-hover:font-semibold transition-all duration-300">
            {lable}
          </span>

          <span className="absolute -bottom-1 w-0 group-hover:w-[70%] group-[.active]:w-[70%]  transition-all duration-300 bg-gray-600 h-1 left-1/2 transform -translate-1/2"></span>
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;
