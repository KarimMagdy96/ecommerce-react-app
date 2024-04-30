import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MobileHandlerContext } from "../../utils/mobilHundler";

export const Navbar = () => {
  const { isMobile } = useContext(MobileHandlerContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <ul>
          <NavLink className={"active"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </ul>
        <div className="nav--icons">
          <div className="nav--icon">
            <span>0</span>
            <FaHeart />
          </div>
          <div className="nav--icon">
            <span>0</span>
            <AiOutlineShoppingCart />
          </div>
          {isMobile && (
            <div className="nav--baricon menu-open">
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
