import React from "react";
import Navbar from "../../components/layouts/navbar";
import "./about-us.css";

function AboutUs() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="test-parallax">
        <div className="img1 grid grid-cols-2 relative min-h-full">
          <div className="oval"></div>
          <div className="bg-gray-500"></div>
          <div className="test bg-white-500 relative overflow-auto">
            <div className="h-full opacity-50 bg-green-500 relative w-full"></div>
            <div className="h-full opacity-50 bg-blue-500 relative w-full"></div>
            <div className="h-full opacity-50 bg-yellow-500 relative w-full"></div>
          </div>
        </div>
        <div className="img1 grid grid-cols-2">
          <div className="oval"></div>
          <div className=""></div>
          <div className="test bg-white-500 relative overflow-auto">
            <div className="h-full opacity-50 bg-green-500 relative w-full"></div>
            <div className="h-full opacity-50 bg-blue-500 relative w-full"></div>
            <div className="h-full opacity-50 relative w-full"></div>
          </div>
        </div>
        <div className="img2 grid grid-cols-2">
          <div className="oval"></div>
          <div className="test bg-white-500 relative overflow-auto">
            <div className="h-full opacity-50 bg-green-500 relative w-full"></div>
            <div className="h-full opacity-50 bg-blue-500 relative w-full"></div>
            <div className="h-full opacity-50 relative w-full"></div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;
