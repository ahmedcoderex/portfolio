import { useContext } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Background from "./components/ui/background";
import { themeContext } from "./contexts/themeContext";
import Home from "./pages/home/home";

const App = () => {
  const { theme } = useContext(themeContext);
  return (
    <div className={`${theme === "dark" ? "bg-gray-950" : "bg-white"} transition-all duration-500`}>
      <Background />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
