import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(42,41,41)] text-white h-screen snap-y snap-mandatory overvflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#08ff1c]/50">
      <Head>
        <title>Ryan's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-end justify-end px-2">
            <div className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer">
              <HomeIcon className="text-[#08ff1c] h-7 w-7 animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}
