import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

function Logo() {
  const {isDark} = useContext(themeContext)
  return (
    <section className=" p-2 rounded-2xl w-fit cursor-pointer">
      <h4 className={`text-xl md:text-2xl lg:text-3xl ${isDark ? "text-gray-200" : "text-gray-700"}`}>
        <span>Apex</span>{" "}
        <span className="text-sm md:text-lg lg:text-xl text-blue-500 -ml-1">
          Flow
        </span>
      </h4>
    </section>
  );
}

export default Logo;
