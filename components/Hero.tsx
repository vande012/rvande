import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Ryan Vandehey",
      "What can I do for you?",
      "Web Development",
      "SEO",
      "UX/UI Design",
      "Let's build together!",
    ],
    loop: true,
    delaySpeed: 900,
    deleteSpeed: 45,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="A picture of Front-End Developer Ryan Vandehey"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Front-End Developer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#28dc28" />
        </h1>

        <div className="pt-8">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
