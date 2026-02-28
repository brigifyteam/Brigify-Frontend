import Navbar from "../../components/landingpage/Navbar";
import Hero from "../../components/landingpage/Hero";
import TrustedBy from "../../components/landingpage/Trustedby";
import HowItWorks from "../../components/landingpage/howItWork";
import Feature from "../../components/landingpage/feature";
import WhatYouNeed from "../../components/landingpage/whatYouNeed";
import Testimonial from "../../components/landingpage/testimonial";
import HeroBanner from "../../components/landingpage/banner";
import Footer from "../../components/landingpage/footer";
import { motion } from 'framer-motion';
import { container } from '../../animations';

const Home = () => {
  return (
    <motion.main initial="hidden" animate="visible" variants={container}>
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Feature />
      <WhatYouNeed />
      <Testimonial />
      <HeroBanner />
      <Footer />
    </motion.main>
  );
};

export default Home;