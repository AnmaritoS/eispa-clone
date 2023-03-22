import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Modal />
      <Head>
        <title>EISPA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
