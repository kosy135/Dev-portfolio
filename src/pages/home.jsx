import React from "react";
import Navbar from "../Components/Reusable/Nav";
import Section from "../components/section";
import Footer from "../components/Reusable/Footer";
import Homehero from "../components/homehero";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Homehero />
      <Section />
      <Footer />
    </div>
  );
}

export default Homepage;
