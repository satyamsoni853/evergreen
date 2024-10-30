import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
