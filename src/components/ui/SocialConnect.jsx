import { FiGithub } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
const connect = [
  {
    to: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmed.code.rex@gmail.com",
    icon: <BiLogoGmail />,
    name: "Gmail",
    hoverColor: "hover:text-red-500",
  },
  {
    to: "https://github.com/ahmedcoderex",
    icon: <FiGithub />,
    name: "GitHub",
    hoverColor: "hover:text-purple-500",
  },
  {
    to: "https://www.linkedin.com/in/ahmed-mohamed-b54bb336a", // أضفت https://
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    hoverColor: "hover:text-blue-500",
  },
  {
    to: "https://wa.me/201013681500",
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    hoverColor: "hover:text-green-500",
  },
];
function SocialConnect() {
  return (
    <div>
      <h3 className="text-gray-700 text-lg mb-6 font-semibold uppercase">
        Let's Connect
      </h3>
      <ul className="flex flex-col gap-3">
        {connect.map(({ to, icon, name, hoverColor }, index) => (
          <li key={index}>
            <a
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 text-gray-600 ${hoverColor} transition-all duration-300 transform hover:translate-x-1`}
            >
              <span className="text-xl">{icon}</span>
              <span className="text-sm font-medium">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialConnect;
