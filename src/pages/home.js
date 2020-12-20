import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <>
      <div className="home">
        <motion.div 
        initial={{ x: '-20vw' }}
        animate={{ x: 0 }}
        className="home-media-container">
          <Link to="/media" exact>
            MEDIA
          </Link>
          </motion.div>
          <motion.div 
           initial={{ x: '20vw' }}
           animate={{ x: 0 }}
          className="home-design-container">
        <Link to="/design" exact >
          DESIGN
        </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
