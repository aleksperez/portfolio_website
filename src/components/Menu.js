import React, { useEffect } from "react";
import { CloseSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import daniloSelfie from "../images/danilo.PNG";
import { motion } from "framer-motion";

const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
      <svg className="menu-button" onClick={() => setMenuState(!menuState)} />
      {menuState && (
        <div className="menu">
          <div className="menu-title"></div>
          <motion.div
            className="menu-close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CloseSquareOutlined onClick={() => setMenuState(!menuState)} />
          </motion.div>
          <div className="menu-container">
            <div className="menu-list">
              <ul>
                <li onClick={() => setMenuState(!menuState)}>
                  <Link to="/">home</Link>
                </li>
                <li onClick={() => setMenuState(!menuState)}>
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
                    width="315"
                    height="390"
                  />
                </div>
                <a href="tel:9089563838">908-956-3838</a>
                <a href="mailto:danilo.rubias@gmail.com">
                  danilo.rubias@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Menu;
