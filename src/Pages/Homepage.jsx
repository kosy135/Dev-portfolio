import React from "react";
import Navbar from "../Components/Reusable/Nav";
import Section from "../components/section";
import Footer from "../components/Reusable/Footer";
import Homehero from "../components/homehero";

function Homepage() {
  return (
    <div className="bg-[#3B3B3B]">
      <Navbar />
      <Homehero />
      <Section />
      <Footer />
    </div>
  );
}

export default Homepage;
