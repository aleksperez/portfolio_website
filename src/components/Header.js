import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import homeLogo from "../images/icons/Logo2.png";
import mediaLogo from "../images/icons/Media.png";
import designLogo from "../images/icons/Design.png";

//navbar will include the nilomad logo = home page/refresh, contact me icon, and social media
//nilologo will get smaller and go to top left when you click on media or design
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(20%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(75%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="header-container"
        >
          <Link to="/media" exact className="media-logo">
            <img width="185" height="190" src={mediaLogo} />
          </Link>
          <Link to="/" exact className="head-logo">
            <img width="230" height="200" src={homeLogo} />
          </Link>
          <Link to="/design" exact className="design-logo">
            <img width="185" height="190" src={designLogo} />
          </Link>
        </motion.div>
      </div>
      <Menu menuState={menuState} setMenuState={setMenuState} />
    </>
  );
};

export default Header;
