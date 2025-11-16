import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#a6412f] to-[#212921] text-white py-20 px-6 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-6"
          whileHover={{ scale: 1.05 }}
        >
          About FoodLover
        </motion.h2>

        <p className="text-lg leading-relaxed mb-8">
          Welcome to{" "}
          <span className="font-semibold text-yellow-300">FoodLover</span> — your
          trusted spot for heartfelt food reviews! 🍴  
          We connect food enthusiasts who share their favorite dishes, hidden gems,
          and genuine ratings from around the city.  
          Explore trending meals and join a community that truly loves food.
        </p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#facc15" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-4 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutSection;
