import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MobileHandlerContext } from "../../utils/mobilHundler";
export const Navbar = () => {
  const { isMobile, isMenuOpen, setIsMenuOpen } =
    useContext(MobileHandlerContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <ul>
          <NavLink to={"/"}>Home</NavLink>
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
        </div>
        {isMobile && (
          // menu-open
          <div
            className={`nav--baricon ${isMenuOpen ? " menu-open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </nav>
  );
};
