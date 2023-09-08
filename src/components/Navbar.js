import { React, useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

// import { auth } from "./firebase"

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsNavOpen(false);
        let move = document.getElementById("");
        // move.style["margin-left"] = "0px";
        // move.style["transition"] = "3s";
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  // async function handleLogout() {
  //   await auth.signOut();
  // }
  return (
    <div className="w-[100%] mx-auto" id="nav">
      <header className="w-full text-gray-600 body-font">
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex lg:w-fit md:w-full w-full items-center justify-between md:py-4 py-2">
            <Link
              to="/"
              className="flex title-font font-medium items-start text-gray-900 mb-4 md:mb-0"
            >
              <img
                className="w-[100px] h-[55px]"
                src="images/Group1.png"
                alt="img"
              />
            </Link>
            <section
              className="MOBILE-MENU flex lg:hidden md:ml-auto transition-[all .5s ease-in-out]"
              ref={menuRef}
            >
              <div
                className="HAMBURGER-ICON space-y-2 transition-[all .5s ease-in-out]"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div
                className={
                  isNavOpen ? "showMenuNav rounded-b-3xl" : "hideMenuNav"
                }
              >
                <div
                  className="absolute top-0 right-0 md:px-10 px-5 py-12 "
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <Link
                  to="/"
                  className="pt-0 flex title-font font-medium items-start text-gray-900 mb-4 md:mb-0"
                >
                  <img
                    className="w-[100px] h-[55px]"
                    src="images/Group1.png"
                    alt="img"
                  />
                </Link>

                <ul className="flex flex-col items-center justify-between text-base text-black font-semibold min-h-[200px] ">
                  <li className="my-2 uppercase hover:underline">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="my-2 uppercase">
                    <Link to="/blogs">Resources</Link>
                  </li>
                  <li className="my-2 uppercase">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <Link
                    to="/signup"
                    className="mx-5 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base md:my-0 my-5  md:mt-10"
                    id="button1"
                  >
                    Queue up for Growth
                  </Link>
                </ul>
              </div>
            </section>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
          </div>
          <nav className="md:ml-16 md:mr-auto lg:flex md:hidden hidden flex-wrap items-center text-base text-black font-semibold justify-center ">
            <Link
              to="/"
              id="navbarLinks"
              className="mr-10 hover:text-gray-900  hover:underline"
            >
              <motion.p whileHover={{ scale: 1.2 }}>Home</motion.p>
            </Link>
            <Link
              to="/about"
              id="navbarLinks"
              className="mr-10 hover:text-gray-900 hover:underline "
            >
              <motion.p whileHover={{ scale: 1.2 }}>About Us</motion.p>
            </Link>
            <Link
              to="/blogs"
              id="navbarLinks"
              className="mr-10 hover:text-gray-900 hover:underline"
            >
              <motion.p whileHover={{ scale: 1.2 }}>Resources</motion.p>
            </Link>
            <Link
              to="/contact"
              id="navbarLinks"
              className="mr-10 hover:text-gray-900 hover:underline"
            >
              <motion.p whileHover={{ scale: 1.2 }}>FAQs</motion.p>
            </Link>
            <Link
              to="/contact"
              id="navbarLinks"
              className="mr-10 hover:text-gray-900 hover:underline"
            >
              <motion.p whileHover={{ scale: 1.2 }}>Contact us</motion.p>
            </Link>
          </nav>
          <Link
            to="/signup"
            className="mx-5 lg:flex md:hidden hidden bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0"
            id="button1"
          >
            Queue up for Growth
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
