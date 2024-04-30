import React from "react";
import { MobileHandlerContext } from "../../utils/mobilHundler";
import { NavLink } from "react-router-dom";
const { useContext } = React;
export const MobileMenu = () => {
  const { isMenuOpen } = useContext(MobileHandlerContext);

  return (
    <div className={`mobileMenu ${isMenuOpen ? "active" : ""}`}>
      {" "}
      <ul>
        <NavLink className={"active"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
    </div>
  );
};
