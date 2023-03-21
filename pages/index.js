import { engines } from "./api/data";

import Head from "next/head";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Card from "../components/Card";
import Link from "next/link";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Feature from "../components/Feature";
import Modal from "../components/Modal";

const HomePage = () => {
  const [result, setResult] = useState([]);
  const [display, setDisplay] = useState(64);
  const getResult = (result) => setResult(result);

  return (
    <>
      <Modal />
      <Head>
        <title>EISPA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {result.length == 0 ? <Hero /> : <></>}
      <div className="-translate-y-1/2">
        <Search
          paddingTop={result.length == 0 ? "pt-0" : "pt-80"}
          engines={engines}
          onChange={getResult}
        />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {result.length == 0 ? (
              <>
                <Feature />
                {/* <Testimonials /> */}
              </>
            ) : (
              <>
                {result.slice(0, display).map((e) => (
                  <Link
                    href={e.id.toString()}
                    key={e.id}
                    className="lg:w-1/4 sm:w-1/2 p-4"
                  >
                    <Card engine={e} />
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
        {display < result.length && (
          <div className="flex justify-center my-2">
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setDisplay(display + 64)}
            >
              Plus de résultats
            </button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
