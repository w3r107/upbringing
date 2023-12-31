"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { exploreWorlds1 } from "../constants/index";
import { staggerContainer } from "../utils/motion";
import ExploreCard from "./ExploreCard";
import { TitleText } from "./CustomTexts";
import styles from "../styles/styles";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* <TypingText title="| The World" textStyles="text-center" /> */}
        {/* <TitleText
          title={<>Choose the event you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        /> */}
        <div className="lg:mt-[10px] mt-[0px] flex lg:flex-row flex-col min-h-[60vh] ">
          {exploreWorlds1.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
    // <></>
  );
};

export default Explore;
