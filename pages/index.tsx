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
      <main className="flex flex-col justify-center items-center min-h-screen w-full">
        <h1 className="text-8xl font-semibold m-5">Frontend developer</h1>
        <h2 className="text-5xl font-semibold">Linus Foxell</h2>
        <p className="text-3xl mb-20">Student @ Changemaker Education</p>
      </main>
      <div className="absolute top-64 left-8 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70" />
      <div className="absolute top-64 left-80 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70" />
      <div className="absolute top-80 left-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70" />
    </div>
  );
};

export default Home;
