"use client";
import "../Main.css";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({
  id,
  imgUrl,
  img,
  title,
  desc,
  prompt,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.5)}
    className={`relative ${
      active === id
        ? "lg:flex-[3.5] md:flex-[3.5] flex-[7] lg:h-[320px] md:h-[200px] lg:-mt-7"
        : "lg:flex-[0.5] flex-[2] lg:h-[270px]"
    } flex items-center justify-center min-w-[250px] h-[300px] transition-[flex] duration-[0.5s] ease-linear cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt="planet-04" className="absolute w-full h-full" />

    {/* <p className='text-white'>{desc}</p> */}
    {active !== id ? (
      <h3 className="w-full lg:text-4xl md:text-4xl text-2xl text-white absolute z-0 lg:bottom-48 md:bottom-auto lg:origin-[0,0]">
        <p
          className="text-left lg:mx-5 md:mx-5 mx-5 lg:h-10 md:h-10"
          id="group2heading"
        >
          {title}
        </p>
        <p
          className="w-full lg:top-48 lg:mx-5 md:mx-5 mx-5 lg:text-sm md:text-xs text-xs lg:absolute md:absolute lg:z-0 leading-[20.16px] text-white "
          id="group2text"
        >
          {prompt}
        </p>
      </h3>
    ) : (
      <div
        dir="rtl"
        className="absolute lg:bottom-[] lg:p-10 md:p-10 p-5 flex  w-full flex-col rounded-b-[24px] "
      >
        <h2
          className="lg:w-[65%] text-left lg:mr-auto md:mr-40 mr-10 lg:text-5xl md:text-6xl text-5xl text-white"
          id="group2heading"
        >
          {title}
        </h2>
        <div
          dir="rtl"
          className={`flex items-center inset-y-0 right-0 w-[150px] h-[80px] rounded-[24px] glassmorphism lg:mb-[-45px] mb-[-70px]`}
        >
          <img
            src={img}
            alt="headset"
            className="object-contain lg:mx-0 -mx-5 lg:mb-56 md:mb-20 mb-60 lg:w-[100%] md:w-[150px] w-[100px]"
          />
        </div>
        <div className="lg:w-[400px] md:w-[400px] w-[90%] mr-auto text-justify">
          <p
            className="text-white mb-50 lg:text-base md:text-base mr-auto text-sm text-left "
            id="group2text"
          >
            {desc}
          </p>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
