import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = (props: Props) => {
  const { experience } = props;

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] 
                        snap-center bg-gray-700 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        className="rounded-full h-32 w-32 xl:h-[200px] xl:w-[200px] object-cover object-center"
        whileInView={{ y: [60, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={urlFor(props.experience.companyImage).url()}
        alt={props.experience.company}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{props.experience.jobTitle}</h4>
        <p className="font-bld text-2xl mt-1">{props.experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} - {""}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc pr-5 space-y-4 ml-5 text-lg h-80 max-w-40 overflow-y-scroll scrollbar-thin scrollbar-track-gray scrollbar-thumb-[#08ff1c]/50">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
