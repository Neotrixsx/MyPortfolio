import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="paddings wrapper">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth container"
      >
        <div className="upperElements">
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I&apos;m Suraj.
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            I create beautiful, user-friendly experiences,
            <br />
            and I’m passionate about my work.{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="person"
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className="email" href="mailto:gorain.suraj@gmail.com">
          gorain.suraj@gmail.com
        </a>

        <div className="lowerElements">
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className="experience">
            <div className="primaryText">11+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className="certificate">
            <img src="./certificate.png" alt="" />
            <span> PROFESSIONAL</span>
            <span>MOBILE APP DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
