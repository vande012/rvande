import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        className="-mb-20 mt-20 sm:15 md:mb-0 flexshrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px]"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="about.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#08ff1c]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus
          quos molestias blanditiis suscipit ducimus porro dolorum at placeat?
          Ipsum quis magni consequatur magnam quia accusamus ipsam praesentium,
          distinctio natus!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
