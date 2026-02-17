import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/Trustedby";
import HowItWorks from "../components/howItWork";
import Feature from "../components/feature";
import WhatYouNeed from "../components/whatYouNeed";
import Testimonial from "../components/testimonial";
import HeroBanner from "../components/banner";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
     <HowItWorks />
        <Feature />
        <WhatYouNeed />
        <Testimonial />
        <HeroBanner />
        <Footer />
    </>
  );
};

export default Home;