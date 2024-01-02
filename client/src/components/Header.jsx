import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-16 px-4 md:px-12 lg:px-20 flex items-center justify-between ${
          scrolling
            ? 'bg-black bg-opacity-30 backdrop-blur shadow-xl'
            : 'bg-opacity-0'
        }`}
      >
        <Link to="/">
          <img src={logo} alt="Airbnb" className="w-28" />
        </Link>

        <div className="hidden md:flex items-center">
  <div className="ml-4 font-semibold">
    <Link
      to="/"
      onClick={() => handleLinkClick("/")}
      className={`mr-8 text-gray-300 relative ${
        activeLink === "/" ? "text-white" : "hover:text-white"
      }`}
    >
      Home
      {activeLink === "/" && <div className="indicator"></div>}
    </Link>
    <Link
      to="/about"
      onClick={() => handleLinkClick("/about")}
      className={`mr-8 text-gray-300 relative ${
        activeLink === "/about" ? "text-white" : "hover:text-white"
      }`}
    >
      About
      {activeLink === "/about" && <div className="indicator"></div>}
    </Link>
    <Link
      to="/explore"
      onClick={() => handleLinkClick("/explore")}
      className={`text-gray-300 relative ${
        activeLink === "/explore" ? "text-white" : "hover:text-white"
      }`}
    >
      Explore
      {activeLink === "/explore" && <div className="indicator"></div>}
    </Link>
  </div>
</div>


        <div className="hidden md:flex items-center font-semibold">
          <Link
            to="/login"
            className={`mr-4 text-gray-300 hover:text-white ${activeLink === "/login" ? "text-white" : "hover:text-white"}`}>
            Login
          </Link>
          <Link
            to="/register"
            className={`bg-gray-300 hover:bg-white text-black px-4 py-2 rounded-full ${
              scrolling && "shadow-md"
            }`}
          >
            Get Started
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className={`text-gray-300 hover:text-white`}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`md:hidden absolute bg-white top-20 right-4 p-4 rounded-lg ${
              scrolling && "bg-gray-100"
            }`}
          >
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={`block text-gray-700 px-4 py-2 ${
                activeLink === "/" ? "text-gray-900" : "hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={`block text-gray-700 px-4 py-2 ${
                activeLink === "/about" ? "text-gray-900" : "hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/explore"
              onClick={() => handleLinkClick("/explore")}
              className={`block text-gray-700 px-4 py-2 ${
                activeLink === "/explore" ? "text-gray-900" : "hover:text-gray-900"
              }`}
            >
              Explore
            </Link>
            <hr className="border-gray-700 my-2" />
            <Link
              to="/login"
              className={`block text-gray-700 px-4 py-2 hover:text-gray-900 ${
                scrolling && "text-black"
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`block bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-900 ${
                scrolling && "shadow-md"
              }`}
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
