import React from "react";
import "../Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-[100%] mx-auto">
      <footer className="text-gray-600 body-font" id="footer">
        <div className="px-5 md:px-0 lg:pt-24 md:py-10 pt-10 lg:pb-10 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to="/"
              className="flex title-font font-medium items-center md:justify- justify-center text-gray-900"
            >
              <img
                className="w-32"
                href="/"
                src="images/Group1.png"
                alt="img"
              />
            </Link>
          </div>
          <div
            className="w-fit flex-grow flex flex-wrap lg:mx-96 lg:mr-auto mx-auto md:pl- mb-10 lg:mt-0 mt-10 md:text-
                    font-semibold text-center"
          >
            <div className="lg:w-1/3 md:w-1/3 w-[100%] px-4">
              <Link
                to="/about"
                className="title-font text-gray-900 tracking-widest text-sm mb-3"
                id="footerNav"
              >
                About Us
              </Link>
            </div>
            <div className="lg:w-1/3 md:w-1/3 w-[100%] px-4">
              <Link
                to="/contact"
                className="title-font text-gray-900 tracking-widest text-sm mb-3"
                id="footerNav"
              >
                Contact Us
              </Link>
            </div>
            <div className="lg:w-1/3 md:w-1/3 w-[100%] px-4">
              <Link
                to="/blogs"
                className="title-font text-gray-900 tracking-widest text-sm mb-3"
                id="footerNav"
              >
                Resources
              </Link>
            </div>
          </div>
        </div>

        <div>
          <hr className="h-px mx-12 bg-black border-0 dark:bg-gray-700" />
        </div>

        <div className="w-[100%] lg:mt-10 mt-10 lg:pb-5 pb-5">
          <button
            className=" lg:mx-16 text-xl font-bold text-black md:mx-[30%] mx-[8%] text-center"
            id="footerNav"
          >
            Leave a request
          </button>

          <div className="lg:flex">
            <div className="flex lg:mx-0 md:mx-[30%] mx-[7%] h-10 my-10">
              <input
                type="email"
                name="email"
                placeholder="We saved a spot for your email"
                className="flex lg:mx-1  px-2 lg:w-60 w-60 lg:h-auto py-2  bg- text-white lg:ml-16 rounded-lg"
                id="footer1"
              />

              <div className="flex">
                <Link
                  to="/signup"
                  className="w-full bg-white text-black py-2 md:py-2 px-4 md:px-3 focus:outline-none hover:bg-black hover:text-white text-base md:mt-0 rounded-lg"
                  id="button2"
                >
                  SignUp
                </Link>
              </div>
            </div>

            <span className="flex lg:ml-auto lg:mt- mt- lg:mx-20  w-[100%] justify-center md:w-auto">
              <Link to="/" className="my-auto mx-2 p-2 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  data-name="Ebene 1"
                  viewBox="0 0 1024 1024"
                  id="facebook-logo-2019"
                >
                  <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  ></path>
                </svg>
              </Link>
              <Link to="/" className="ml-3 my-auto mx-2 p-2 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 16 16"
                  id="twitter"
                >
                  <path
                    fill="#03A9F4"
                    d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
                  ></path>
                </svg>
              </Link>
              <Link to="/" className="ml-3 my-auto mx-2 p-2 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height=""
                  viewBox="0 0 102 102"
                  id="instagram"
                >
                  <defs>
                    <radialGradient
                      id="a"
                      cx="6.601"
                      cy="99.766"
                      r="129.502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".09" stopColor="#fa8f21"></stop>
                      <stop offset=".78" stopColor="#d82d7e"></stop>
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="70.652"
                      cy="96.49"
                      r="113.963"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset=".64"
                        stopColor="#8c3aaa"
                        stopOpacity="0"
                      ></stop>
                      <stop offset="1" stopColor="#8c3aaa"></stop>
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                    data-name="Path 16"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                    data-name="Path 17"
                  ></path>
                  <path
                    fill="#fff"
                    d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                    data-name="Path 18"
                    transform="translate(-422.637 -426.196)"
                  ></path>
                </svg>
              </Link>
              <Link to="/" className="ml-3 my-auto mx-2 p-2 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  viewBox="0 0 72 72"
                  id="linkedin"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                    <path
                      fill="#FFF"
                      d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                    ></path>
                  </g>
                </svg>
              </Link>
            </span>
          </div>
        </div>

        <p className="text-gray-500 pb-7 lg:pt-0 pt-2 text-sm text-center">
          © 2023
          <Link
            to="/"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @UpBringing
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
