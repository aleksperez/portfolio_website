import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "./Menu";

//navbar will include the nilomad logo = home page/refresh, contact me icon, and social media
//nilologo will get smaller and go to top left when you click on media or design
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
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
      <div className="header-container">
        <motion.div initial={{ y: 30 }} animate={{ y: 0 }}>
          <Link to="/" exact className="head-logo">
            NILO
          </Link>
        </motion.div>
        <Menu menuState={menuState} setMenuState={setMenuState} />
      </div>
    </>
  );
};

export default Header;
