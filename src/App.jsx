import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Background from "./components/ui/background";
import Home from "./pages/home/home";

const App = () => {
  return (
    <section className="relative">
      <Background/>

      <Navbar />
      <Home />
        <Footer/>
    </section>
  );
};

export default App;
