import React from "react";
import { MobileHandlerContext } from "../../utils/mobilHundler";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const { useContext } = React;

export const MobileMenu = () => {
  const { isMenuOpen } = useContext(MobileHandlerContext);

  return (
    <div className={`mobileMenu ${isMenuOpen ? "active" : ""}`}>
      {" "}
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </motion.ul>
    </div>
  );
};
