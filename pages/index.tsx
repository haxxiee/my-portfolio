import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";

import Header from "../components/Header";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import scrollToSection from "../utils/ScrollToSection";

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
      <div className="max-w-7xl m-auto text-gray-800 dark:text-gray-200 relative min-h-full transition-all">
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
          className="min-h-screen flex justify-center items-center"
          ref={firstProject}
        >
          <motion.div
            className="w-1/2 pl-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <h1 className="text-5xl font-bold">InvenireGit</h1>
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
                Redux Toolkit
              </span>
            </div>
            <div className="flex gap-2">
              <h2>LIVE</h2>
              <div>GITHUB</div>
            </div>
          </motion.div>
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
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
              priority={true}
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
                TCRP
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                Prisma
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
              priority={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
