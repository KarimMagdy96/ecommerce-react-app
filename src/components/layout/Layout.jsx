import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "./../footer/Footer";
import { Outlet } from "react-router-dom";
import { MobileMenu } from "../mobilMenu/MobileMenu";
import { Banner } from "../banner/Banner";

export const Layout = () => {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};
