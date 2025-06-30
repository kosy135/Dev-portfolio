import React from "react";
import Navbar from "../components/Reusable/Nav";
import Section from "../components/section";
import Footer from "../components/Reusable/Footer";
import Homehero from "../components/homehero";

function Homepage() {
  return (
    <div className="bg-black">
      <div className="bg-[#2B2B2B] mx-5">
        <Navbar />
        <Homehero />
        <Section />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;

