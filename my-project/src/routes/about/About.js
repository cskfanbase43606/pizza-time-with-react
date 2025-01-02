import { motion } from "framer-motion";
import React, { useEffect } from "react";
//Components
import ScrollBtn from "../../helpers/ScrollBtn";
import AboutCareers from "./AboutCareers";
import AboutCollaboration from "./AboutCollaboration";
import AboutCustomers from "./AboutCustomers";
import AboutDedication from "./AboutDedication";
import AboutUs from "./AboutUs";
import './about.css';

const About = () => {
  useEffect(() => {
    document.title = "About | Pizza Time";
  }, []);
  return (
    <motion.main
      className="about"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      <AboutUs />
      <AboutDedication />
      <AboutCustomers />
      <AboutCareers />
      <AboutCollaboration />
      <ScrollBtn />
    </motion.main>
  );
}

export default About;