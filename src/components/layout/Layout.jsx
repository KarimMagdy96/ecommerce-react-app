import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "./../footer/Footer";
import { Outlet } from "react-router-dom";
import { MobileMenu } from "../mobilMenu/MobileMenu";

export const Layout = () => {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
