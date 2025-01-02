import React, { useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import ScrollButton from "../../helpers/ScrollBtn";
import BlogPreview from "./blog-preview/BlogPreview";
import ContactUsLanding from "./company-info/ContactUsLanding";
import ContactLanding from "./contact-info/ContactLanding";
import Gallery from "./gallery/Gallery";
import Hero from "./hero/Hero";
import PizzaMenuPreview from "./menu-preview/PizzaMenuPreview";
import MenuSlider from "./menu-slider/MenuSlider";
import Newsletter from "./newsletter/Newsletter";
import OurServices from "./our-service/OurServices";
import MenuPricingPreview from "./pricing-preview/MenuPricingPreview";
import StatsPreview from "./stats-preview/StatsPreview";
import WelcomeSection from "./welcome/WelcomeSection";

const Homepage = () => {
  useEffect(() => {
    document.title = "Pizza Time";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Hero />
      <WelcomeSection />
      <ContactUsLanding />
      <OurServices />
      <PizzaMenuPreview />
      <MenuPricingPreview />
      <Gallery />
      <StatsPreview />
      <MenuSlider />
      <Newsletter />
      <BlogPreview />
      <ContactLanding />
      <ScrollButton />
    </React.Fragment>
  );
}

export default Homepage;