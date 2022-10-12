import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";

import Header from "../components/Header";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import scrollToSection from "../utils/scrollToSection";
import Project from "../components/Project";
import { InvenireGit, Tickstem } from "../utils/projectInfo";
import CodeSection from "../components/CodeSection";

const Home: NextPage = () => {
  const firstProject = useRef(null);
  const aboutSection = useRef(null);

  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null!;
  }
  return (
    <div>
      <div className="max-w-7xl m-auto text-gray-800 dark:text-gray-200 relative min-h-full overflow-hidden transition-all">
        <Head>
          <title>Linus Portfolio</title>
          <meta name="description" content="Protfolio by Linus Foxell" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Header aboutSection={aboutSection} />
        </header>
        <main className="flex flex-col justify-center items-center min-h-screen relative w-full z-10 text-center">
          <motion.h1
            className="text-9xl font-semibold m-5"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            Hi, I&apos;m{" "}
            <span className={`${theme === "dark" && "animate-test"}`}>
              Linus!
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <h2
              className={`text-6xl font-semibold ${
                theme === "dark" && "animate-test"
              }`}
            >
              A Frontend developer
            </h2>
            <p className="text-4xl mb-20">Student @ Changemaker Education</p>
          </motion.div>

          <motion.button
            className="flex flex-col justify-center items-center absolute bottom-5 text-xl font-semibold"
            onClick={() => scrollToSection(firstProject)}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
          >
            Projects
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce w-5 mt-1"
            >
              <path
                d="M14.8284 12.0259L16.2426 13.4402L12 17.6828L7.75733 13.4402L9.17155 12.0259L11 13.8544V6.31724H13V13.8544L14.8284 12.0259Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
        </main>
        <div
          className={`absolute top-64 left-8 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70 animate-test2 ${
            theme === "dark" && "opacity-0"
          }`}
        />
        <div
          className={`absolute top-64 left-80 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70 ${
            theme === "dark" && "opacity-0"
          }`}
        />
        <div
          className={`absolute top-96 left-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70 ${
            theme === "dark" && "opacity-0"
          }`}
        />
        <div ref={firstProject}>
          <Project
            title={InvenireGit.title}
            desctiption={InvenireGit.desctiption}
            picUrl={InvenireGit.picUrl}
            stack={InvenireGit.stack}
            liveUrl={InvenireGit.liveUrl}
            githubUrl={InvenireGit.githubUrl}
          />
        </div>

        <Project
          title={Tickstem.title}
          desctiption={Tickstem.desctiption}
          picUrl={Tickstem.picUrl}
          stack={Tickstem.stack}
          liveUrl={Tickstem.liveUrl}
          githubUrl={Tickstem.githubUrl}
        />
        <section
          className="min-h-screen w-full flex flex-col justify-center items-center"
          ref={aboutSection}
        >
          <h1 className="text-4xl font-semibold my-32">{"<About/>"}</h1>
          <div className="w-full flex justify-center items-center">
            <div className="flex items-center justify-center w-1/2 h-[30rem] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl ml-2 ">
              <CodeSection />
            </div>

            <div className="flex flex-col justify-center items-center w-1/2">
              <div className="flex flex-col justify-start w-[90%] text-left">
                <h2 className="text-4xl mb-4 font-bold">Linus Foxell</h2>
                <p className="text-lg font-semibold">
                  I am a competitive person with a great sense of humor that is
                  interested in anything that has to do with sports, gaming and
                  new tech. Frontend is what I&apos;m focusing on but I am
                  willing to expand my knowledge and learn more about everything
                  in the dev world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-60 w-full bg-gray-700"></div>
    </div>
  );
};

export default Home;
