"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Daniel Rodrigues",
                5000,
                "Web Developer",
                5000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-primary-400"
            />
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl">
            I&apos;m a passionate developer who loves coding and learning new technologies.
          </p>
          <Link href="/contact">
            <a className="mt-8 inline-block bg-primary-500 text-white py-3 px-6 rounded-lg text-lg">
              Contact Me
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
