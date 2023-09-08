import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { json, Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../signupcard.css";
import TimePicker from "react-time-picker";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";

function Informationcard2() {
  //time
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

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

  const carriers = [
    "Engineer",
    "Enterpreneur",
    "Scientist",
    "Musician",
    "Footballer",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index === carriers.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, 1000);
  });

  const [userData, setUserData] = useState({
    DATE: "",
    name: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const [accurateTime, setAccurateTime] = useState("");

  //connect with firebase
  const navigate = useNavigate();
  const submitData = async (event) => {
    event.preventDefault();
    // const { DATE, name } = userData;

    // const x = time?.split("T");
    const hours = time.$d.getHours();
    const minutes = time.$d.getMinutes();
    const seconds = time.$d.getSeconds();

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    console.log(formattedTime);
    // setAccurateTime(x);
    // console.log(accurateTime);
    // if (DATE.length === 0) {
    //   alert("Invalid Credential!");
    //   return;
    // }
    // if (name.length === 0) {
    //   alert("Invalid Credential!");
    //   return;
    // }

    // const res = await fetch(
    //   "https://upbringing-31259-default-rtdb.firebaseio.com/userTimeRecords.json",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       DATE,
    //       name,
    //     }),
    //   }
    // );
    // if (res) {
    //   // alert("Data Stored");
    //   navigate("/verification");
    // } else {
    //   alert("Please fill the data");
    // }
  };

  const today = new Date().toISOString().split("T")[0];

  //time
  const [time, setTime] = React.useState(null);

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
          className="lg:text-5xl text-4xl text-center lg:mx-20 mx-5 lg:mb-10 mb-20"
          id="signupHeading"
        >
          We start the journey of making your kid{" "}
          <span id="signupsubHeading">
            {" "}
            <Typewriter
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
            />
          </span>
        </h2>
        <h2 className="mx-20 lg:mb-0 mb-5 text-black font-bold">
          Tell Us When We Can Connect For The Call
        </h2>
        <div className="flex w-cover mx-20 my-5 items-end">
          <div className="relative w-full h-11 text-left ">
            <label for="hero-field" className="leading-0 text-xs text-gray-500">
              Date of Meet
            </label>
            <input
              type="date"
              id="DATE"
              placeholder="DD-MM-YYYY"
              name="DATE"
              min={today}
              value={userData.DATE}
              onChange={postUserData}
              className="w-full    bg-[#FFF4E5]  h-11 bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
        </div>
        <form method="POST" className="flex w-cover mx-20 mt-10 items-end">
          <div className=" w-full h-11 mx-auto ">
            <div className="flex sm:mr-24">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeClock
                  value={time}
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                  ampm={false}
                  sx={{ marginRight: "10px" }}
                />
              </LocalizationProvider>
            </div>

            {/* <input
              type="name"
              id="name"
              placeholder="09:42AM"
              name="name"
              value={userData.name}
              onChange={postUserData}
              className="w-full  bg-[#FFF4E5] h-11 bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            /> */}
          </div>
        </form>
        <div className="w-fit mx-auto mt-56">
          <button
            type="submit"
            onClick={submitData}
            className="ml-auto  font-sans bg-red-500 text-white border-0 py-1 px-5 mr-5 focus:outline-none hover:bg-white hover:text-red-400 rounded-lg text-base my-5 md:mt-0"
            id="button1"
          >
            We're All Set
          </button>
        </div>
      </form>
    </div>
  );
}

export default Informationcard2;
