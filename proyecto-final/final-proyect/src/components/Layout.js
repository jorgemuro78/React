import React from "react";
import Footer from "./carousel/Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
