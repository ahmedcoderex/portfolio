import { MdOutlineFileDownload } from "react-icons/md";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { motion } from "motion/react";

function Navbar() {
  const [openNavLink, setOpenNavLink] = useState(false);
  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="fixed z-50 w-full top-5"
    >
      <div className="container flex justify-center">
        <div className="pr-4  flex justify-between items-center bg-white/70 backdrop-blur-2xl rounded-2xl w-[80%] lg:w-[70%]  xl:w-[60%]">
          <Logo />

          {/* NavLinks On disktop */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          <div className="flex gap-2 items-center">
            <button
              className="text-sm py-1 px-2 rounded-2xl bg-blue-500 text-gray-200 flex items-center gap-1 
            hover:-translate-y-0.5 transition-all duration-300 "
            >
              <span>
                <MdOutlineFileDownload />
              </span>
              <span>Resum CV</span>
            </button>

            <button className="lg:hidden" onClick={() => setOpenNavLink(true)}>
              <IoIosMenu className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* NavLinks On mobile */}
      {openNavLink && (
        <NavLinks isPhone={true} closeNavLinks={setOpenNavLink} />
      )}
    </motion.nav>
  );
}

export default Navbar;
