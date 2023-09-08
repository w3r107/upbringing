import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiGlobe } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import "../Contact.css";
import { Link } from "react-router-dom";

function Contact() {
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

  const [userData, setUserData] = useState({
    user_name: "",
    email: "",
    comment: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { user_name, email, comment } = userData;

    if (user_name.length === 0) {
      alert("Invalid Credential!");
      return;
    }
    if (email.length === 0) {
      alert("Invalid Credential!");
      return;
    }
    if (comment.length === 0) {
      alert("Invalid Credential!");
      return;
    }

    const res = await fetch(
      "https://upbringing-31259-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name,
          email,
          comment,
        }),
      }
    );
    if (res) {
      alert("Data Stored");
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div className="bg-[#fff6ea] mx-auto">
      <div>
        <Navbar />
      </div>
      <div className=" bg-[#fff6ea] lg:mx-auto flex lg:py-10 md:py-10 md:mx-auto flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center lg:mb-10 md:mb-10 items-center text-center"
          id="main1"
        >
          <h2
            className=" lg:text-xl md:text-xl lg:mx-auto text-xl lg:mb-5 md:mb-5 mb-5"
            data-aos="zoom-out"
            data-aos-delay="200"
            id="about1heading"
          >
            CONTACT US
          </h2>
          <div className="flex mx-auto">
            <h1
              className="title-font lg:text-8xl md:text-7xl lg:mx-auto text-5xl lg:mb-10 md:mb-10 mb-10 font-medium text-gray-900"
              data-aos="zoom-in"
              data-aos-delay="400"
              id="about2heading"
            >
              Get In Touch
            </h1>
          </div>

          <section className="text-white body-font relative">
            <div className=" mx-auto flex sm:flex-nowrap flex-wrap">
              <form
                ref={form}
                onSubmit={sendEmail}
                method="post"
                className="lg:w-1/2 md:w-1/2 px-10 bg-[#F4F0E4] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
              >
                <h2 className="text-gray-900 text-xl mb-1 font-semibold title-font">
                  Send a Message
                </h2>

                <div className="relative text-left mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 mx-2 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Full Name"
                    value={userData.user_name}
                    onChange={postUserData}
                    className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <div className="relative text-left mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 mx-2 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="xyz@gmail.com"
                    value={userData.email}
                    onChange={postUserData}
                    className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <div className="relative text-left mb-4">
                  <label
                    htmlFor="text"
                    className="leading-7 mx-2 text-sm text-gray-600"
                  >
                    Comment
                  </label>
                  <input
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Text"
                    value={userData.comment}
                    onChange={postUserData}
                    className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={submitData}
                  className="w-fit bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 mx-auto rounded-lg text-base md:my-0 my-5  md:mt-10"
                  id="button1"
                >
                  Submit
                </button>
              </form>
              <div className="bg-[#201528] relative flex flex-wrap rounded items-center justify-center first-letter: shadow-md py-10">
                <div className=" lg:w-full px-6">
                  <h2 className="text-3xl my-5 font-semibold title-font ">
                    Contact Information
                  </h2>
                  <Link
                    to="https://www.google.com/maps?ll=13.022352,77.681746&z=15&t=m&hl=en&gl=IN&mapclient=embed&q=Akshaya+Nagar+1st+Block+Akshya+Nagar,+Ramamurthy+Nagar+Bengaluru,+Karnataka+560016"
                    className="flex w-3/4 mx-auto my-10 mt-1"
                  >
                    <div className="w-6"> 
                      <FiGlobe className="w-full h-full" />
                    </div>
                    <p className="ml-4">E-76, rosewood city, Gurgaon, 122018</p>
                  </Link>
                  <Link
                    to="mailto: hello@upbringing.com"
                    className="flex w-3/4 mx-auto my-5 mt-1"
                  >
                    <div className="w-6">
                      <FiMail className="w-full h-full" />
                    </div>
                    <p className="ml-4">contact@up-bringing.com</p>
                  </Link>
                </div>
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2091128003567!2d77.68174615!3d13.0223515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10e3ce4e895d%3A0x152fe6e85fd60013!2sAkshaya%20Nagar%201st%20Block%2C%20Akshya%20Nagar%2C%20Ramamurthy%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560016!5e0!3m2!1sen!2sin!4v1684950610122!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
