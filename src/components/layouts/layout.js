import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";
import "../../public/theme/layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
