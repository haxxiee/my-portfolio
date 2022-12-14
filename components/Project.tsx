import { FC } from "react";
import { motion } from "framer-motion";

import { githubMotion, liveMotion } from "../utils/animations";
import Image from "next/image";
import { ProjectInfo } from "../types/ProjectInfo";
import Link from "next/link";

const Project: FC<ProjectInfo> = ({
  title,
  desctiption,
  picUrl,
  stack,
  liveUrl,
  githubUrl,
}) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left">
      <motion.div
        className="md:w-1/2 md:pl-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <h1 className="text-6xl font-bold my-2">{title}</h1>
        <p className="text-lg font-semibold my-2">{desctiption}</p>
        <div className="flex justify-center md:justify-start items-center gap-1 my-2 flex-wrap">
          {stack.map((item) => (
            <span
              key={item}
              className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 my-2 font-semibold md:justify-start justify-center items-center">
          <Link href={liveUrl} className="cursor-pointer">
            <a target={"_blank"}>
              <motion.div
                className="flex justify-center items-center py-1 px-6 border-2 border-gray-400 rounded-xl cursor-pointer"
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
            </a>
          </Link>
          <Link href={githubUrl}>
            <a target={"_blank"}>
              <motion.div
                className="flex justify-center items-center py-1 pr-2 pl-5 border-2 border-gray-400 rounded-xl cursor-pointer"
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
            </a>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-2/3"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
      >
        <Image
          src={picUrl}
          alt={title}
          layout="responsive"
          width={1008}
          height={591}
        />
      </motion.div>
    </section>
  );
};

export default Project;
