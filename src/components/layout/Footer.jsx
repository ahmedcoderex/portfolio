
import SocialConnect from "../ui/SocialConnect";
import NavFooter from "../ui/NavFooter";
import Copyright from "../ui/Copyright";
import Branding from "../ui/Branding";

function Footer() {
  return (
    <footer className="pt-24 pb-8 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:justify-items-center  lg:text-center ">
        {/* Branding Section */}
        <Branding/>
        {/* Navigation Links */}
        <NavFooter />
        {/* Social Connect */}
        <SocialConnect />
      </div>

      {/* Copyright Bar */}
      <Copyright />
    </footer>
  );
}

export default Footer;
