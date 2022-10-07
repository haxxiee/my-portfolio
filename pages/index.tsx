import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";

import Header from "../components/Header";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import scrollToSection from "../utils/scrollToSection";
import { githubMotion, liveMotion } from "../utils/animations";

const Home: NextPage = () => {
  const firstProject = useRef(null);
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
          <Header />
        </header>
        <main className="flex flex-col justify-center items-center min-h-screen relative w-full z-10 text-center">
          <motion.h1
            className="text-9xl font-semibold m-5"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            Frontend{" "}
            <span className={`${theme === "dark" && "animate-test"}`}>
              developer
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-6xl font-semibold">Linus Foxell</h2>
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

        <section
          className="min-h-screen flex flex-col md:flex-row justify-center items-center"
          ref={firstProject}
        >
          <motion.div
            className="w-1/2 pl-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <h1 className="text-6xl font-bold my-2">InvenireGit</h1>
            <p className="text-lg font-semibold my-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
              possimus? Voluptas maiores sit iure. Laborum incidunt quia
              deleniti minima iure ipsa facere provident labore numquam? Quae
              atque qui veritatis minus?
            </p>
            <div className="flex gap-1 my-2">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                React
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                NextJS
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                TailwindCSS
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                Redux Toolkit
              </span>
            </div>
            <div className="flex gap-4 my-2 font-semibold">
              <motion.div
                className="flex justify-center items-center py-1 px-6 border-2 border-gray-400 rounded-xl"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <h2>LIVE</h2>
                <motion.div variants={liveMotion}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 ml-2"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center items-center py-1 pr-2 pl-5 border-2 border-gray-400 rounded-xl"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <div className="">GITHUB</div>
                <motion.div variants={githubMotion}>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 mx-2 fill-gray-800 dark:fill-gray-200"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <Image
              src={"/assets/invgitPic.png"}
              alt="hello"
              layout="responsive"
              width={1008}
              height={591}
            />
          </motion.div>
        </section>
        <section className="min-h-screen flex justify-center items-center">
          <div className="w-1/2 pl-4">
            <h1 className="text-4xl font-bold">TICKSTEM</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
              possimus? Voluptas maiores sit iure. Laborum incidunt quia
              deleniti minima iure ipsa facere provident labore numquam? Quae
              atque qui veritatis minus?
            </p>
            <div className="flex gap-1 my-2">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                React
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                NextJS
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                Prisma
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                tRCP
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                MongoDB
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                TailwindCSS
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={"/assets/tickstemPic.png"}
              alt="hello"
              layout="responsive"
              width={1008}
              height={591}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
