import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

function Copyright() {
  const currentYear = new Date().getFullYear();
  const {isDark} = useContext(themeContext)

  return (
    <div className="mt-20 pt-8 flex flex-col items-center gap-2">
      <div className={`${isDark? "text-gray-300":"text-gray-700"} text-xs tracking-widest uppercase flex items-center gap-2`}>
        <span>&copy; {currentYear}</span>
        <span className="text-blue-600 font-bold">Master Code</span>
        <span>All rights reserved</span>
      </div>
      <div className="h-1 w-20 bg-linear-to-r from-transparent bg-blue-500 to-transparent opacity-30"></div>
    </div>
  );
}

export default Copyright;
