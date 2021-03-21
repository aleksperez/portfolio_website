import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import daniloSelfie from "../images/danilo.PNG";
import instaLogo from "../images/icons/Insta.png";
import menu1 from "../images/icons/Open eyes.png";
import menu2 from "../images/icons/Closed eye.png";


const transition = { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.9] };

const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
   
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="menu-button"
        onClick={() => setMenuState(!menuState)}
        src={menu1}
      />
      
      <AnimatePresence>
        {menuState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="menu"
          >
            <div className="menu-title"></div>
            <motion.img
              className="menu-close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setMenuState(!menuState)}
              src={menu2}
            />
              
            <div className="menu-container">
              <div className="menu-list">
                <ul>
                  <li onClick={() => setMenuState(!menuState)}>
                    <Link to="/">home</Link>
                  </li>
                  <li
                    className="media-link"
                    onClick={() => setMenuState(!menuState)}
                  >
                    <Link to="/media">media</Link>
                  </li>
                  <li onClick={() => setMenuState(!menuState)}>
                    <Link to="/design">design</Link>
                  </li>
                  <li onClick={() => setMenuState(!menuState)}>
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
                <div className="menu-me">
                  <div className="img-title">
                    <img
                      href="/aboutme"
                      src={daniloSelfie}
                      width="305"
                      height="380"
                    />
                  </div>
                  <a href="tel:9089563838">908-956-3838</a>
                  <a href="mailto:danilo.rubias@gmail.com">
                    danilo.rubias@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Menu;
