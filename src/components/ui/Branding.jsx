import { useContext } from "react";
import Logo from "../ui/Logo";
import { themeContext } from "../../contexts/themeContext";

function Branding() {
  const {isDark} = useContext(themeContext)
  return (
    <div className="max-w-xs">
      <Logo />
      <p className={`leading-relaxed ${isDark? "text-gray-300": "text-gray-700"} text-start text-sm  italic`}>
        "From concept to code.. transforming your passion into a digital reality
        that defines your unique online identity."
      </p>
    </div>
  );
}

export default Branding;
