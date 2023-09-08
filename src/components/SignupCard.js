// import firebase from
import { React, useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../signupcard.css";
// import { carriers } from '../constants/signupCarriers';
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";

function SignupCard() {
  // EmailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_287wp26",
        "template_t7o0g3a",
        form.current,
        "yiibgYLHgLmwK7jbo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const navigate = useNavigate();
  // Authentication With Email & Password
  const [passowrd, setPassword] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    // console.log("hello")
  }, []);
  const handleSubmit = () => {
    console.log(email);
    createUserWithEmailAndPassword(auth, email, passowrd)
      .then((usercred) => {
        alert("Check Your Mail Box & Verify Your Email");
        console.log(usercred.user);
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("email sent");
          navigate("/information");
        });
      })
      .catch((error) => {
        console.log(error);
        if (passowrd.length < 6) {
          alert("Password Should be 6 Characters At Least");
        } else {
          alert("User Already Exists");
        }
      });
  };

  // Authentication Continue with Google
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);

      navigate("/information");
      alert("Welcome to the UpBringing");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const TextsWithColors = [
    { text: "Engineer", colorClass: "blue-text" },
    { text: "Doctor", colorClass: "green-text" },
    { text: "Enterpreneur", colorClass: "green-text" },
    { text: "Scientist", colorClass: "green-text" },
    { text: "Musician", colorClass: "green-text" },
    { text: "Footballer", colorClass: "green-text" },
    { text: "Doctor", colorClass: "green-text" },
    // Add more texts with color classes here
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TextsWithColors.length);
    }, 3000); // Adjust the delay between each text change

    return () => clearInterval(interval);
  }, []);

  const { text, colorClass } = TextsWithColors[currentIndex];

  return (
    <div
      className="lg:absolute md:absolute lg:w-3/5 md:w-fit lg:top-0 md:top-0 top-0 md:mx-24 lg:mx-64"
      id="card1"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="lg:h-[95vh] md:h-[50vh] h-[100vh] lg:w-3/4 mx-auto lg:my-4 mb-0 lg:py-0 md:py-0 lg:rounded-3xl"
        id="card2"
      >
        <div className="container mx-auto flex flex-wrap py-5 flex-col items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-10 md:mb-0"
          >
            <img
              className="w-[100px] h-[55px]"
              src="images/Group1.png"
              alt="img"
            />
          </Link>
        </div>

        <h2
          className="w- lg:text-5xl text-4xl text-center lg:mx-20 mx-5 lg:mb-5 md:mb-10 mb-20"
          id="signupHeading"
        >
          We start the journey of making your kid
          <div className="w-fit mx-auto" id="signupsubHeading">
            <div className={colorClass}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [text],
                }}
              />
            </div>

            {/* <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Engineer",
                  "Doctor",
                  "Enterpreneur",
                  "Scientist",
                  "Musician",
                  "Footballer",
                  "Teacher",
                ],
              }}
            /> */}
          </div>
        </h2>

        <h2 className="mx-12 lg:mb-5 mb-5 text-black font-bol text-center text-3xl ">
          Create an account
        </h2>
        <div className="flex flex-col items-center w-cover mx-10 ">
          <div className="relative mx-2 w-full text-left">
            <label for="hero-field" className="leading-7 text-xs text-gray-500">
              Email Address
            </label>
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              name="email"
              // className="w-full bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border border-gray-900  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              className="w-full bg-[#FFF4E5] bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border border-gray-900  text-base outline-none text-gray-700 py-1 px-3 leading-8  duration-200 ease-in-out"
            />
          </div>
          <div className="relative mx-2 w-full text-left">
            <label
              for="hero-field"
              className=" leading-7 text-xs text-gray-500"
            >
              Password
            </label>
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              placeholder="Choose 6 character password"
              name="password"
              className="w-full bg-[#FFF4E5] bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border border-gray-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="w-full py-1">
          <h2 className="text-center text-black">or</h2>
        </div>
        <div className="text-center lg:mx-40 mx-20 pb-5">
          <div className="flex  py-2 bg-white text-black rounded-full">
            <button className="w-fit mx-auto" id="google" onClick={handleClick}>
              <FcGoogle className="mx-2 w-5 h-5" id="googlelogo" />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
        <div className=" items-center pb-5  mx-20 ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <label
            for="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            required
          >
            Help Us Improve the service by{" "}
            <b> giving us your few minutes on a call</b>{" "}
          </label>
        </div>
        <div className="w-fit my-auto mx-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className=" font-sans bg-red-500 text-white border-0 py-1 px-5 focus:outline-none hover:bg-white hover:text-red-400 rounded-lg text-base my-5 md:mt-0"
            id="button1"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupCard;
