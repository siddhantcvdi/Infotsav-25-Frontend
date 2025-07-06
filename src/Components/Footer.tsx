import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import FooterText from "./ui/FooterText";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[rgba(26,26,26,0.3)] backdrop-blur-sm text-[#CCCCCC] py-12 px-6 md:px-20">
      {/* Outer vertical flexbox */}
      <div className="flex flex-col items-center md:items-stretch">
        {/* Main horizontal flexbox for Register, Get in Touch, Events */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 w-full px-[44px]">
          {/* Register Now */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold mb-4">Join Us Now!</h2>
            <Link
              to="register"
              className="inline-flex items-center border border-[#CCCCCC] px-4 py-2 rounded-full transition duration-300 group hover:scale-105"
            >
              Register Now
              <span className="ml-2 group-hover:translate-x-1 transition">
                ↗
              </span>
            </Link>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold mb-4">Get in touch</h2>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a href="mailto:info@infotsav.in">
                <HiOutlineMail />
              </a>
            </div>
          </div>

          {/* Navigation Links in vertical flexbox */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="sr-only">Navigation</h2>
            <div className="flex flex-col gap-3">
              <Link to="/events" className="hover:text-white transition">
                Events ↗
              </Link>
              <Link to="/contact" className="hover:text-white transition">
                Contact ↗
              </Link>
              <Link
                to="/campus-ambassador"
                className="hover:text-white transition"
              >
                Ambassador ↗
              </Link>
            </div>
          </div>
        </div>

        {/* FooterText at the bottom */}
        <FooterText text="Infotsav '25" />
      </div>
    </footer>
  );
}

export default Footer;
