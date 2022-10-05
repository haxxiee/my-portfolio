import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl m-auto text-black relative min-h-full">
      <Head>
        <title>Linus Portfolio</title>
        <meta name="description" content="Protfolio by Linus Foxell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="flex flex-col justify-center items-center min-h-screen relative w-full z-10">
        <h1 className="text-8xl font-semibold m-5">Frontend developer</h1>
        <h2 className="text-5xl font-semibold">Linus Foxell</h2>
        <p className="text-3xl mb-20">Student @ Changemaker Education</p>
        <div></div>
        <button className="flex flex-col justify-center items-center absolute bottom-5 text-xl font-semibold">
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </main>
      <div className="absolute top-64 left-8 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70" />
      <div className="absolute top-64 left-80 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70" />
      <div className="absolute top-80 left-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70" />

      <section className="min-h-screen">hello</section>
      <section className="min-h-screen">hello</section>
    </div>
  );
};

export default Home;
