import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#08ff1c]/50">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#08ff1c]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                : UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                nam asperiores libero quibusdam harum! Iste sunt, tempora
                voluptas repudiandae beatae dicta amet aperiam adipisci
                obcaecati temporibus aspernatur quidem praesentium est.
              </p>
            </div>
          </div>
        ))}
        {/*Projects*/}
        {/*Projects*/}
        {/*Projects*/}
      </div>
      <div className="w-full absolute top-[30%] bg-[#08ff1c]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
