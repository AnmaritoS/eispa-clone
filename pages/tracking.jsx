import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import AboutUs from "../components/AboutUs";

const Tracking = () => {
  return (
    <>
      <Modal />
      <Head>
        <title>EISPA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="-translate-y-1/2"></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <AboutUs />
            {/* <Testimonials /> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Tracking;
