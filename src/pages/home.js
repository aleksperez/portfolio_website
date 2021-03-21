import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";

const containerAnimation = {
  left_initial: {
    x: "-20vw",
  },
  left_animate: {
    x: 0,
    transition: {
      duration: 0.3
    },
  },
  right_initial: {
    x: "20vw",
  },
  right_animate: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const Home = () => {
  return (
    <>
      <div className="home">
        <motion.div
          initial="left_initial"
          animate="left_animate"
          variants={containerAnimation}
          className="home-media-container"
        >
          <Link to="/media" exact>
            MEDIA
          </Link>
        </motion.div>
        <motion.div
          initial="right_initial"
          animate="right_animate"
          variants={containerAnimation}
          className="home-design-container"
        >
          <Link to="/design" exact>
            DESIGN
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
