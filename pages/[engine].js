import { findEngine } from "./api/handler";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const EnginePage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setEngine(findEngine(router.query.engine));
  }, [router.isReady]);

  const [engine, setEngine] = useState(null);
  const [power, setPower] = useState("");
  const [type, setType] = useState({ complete: false, nu: false });
  const [vin, setVin] = useState("");
  const [delivery, setDelivery] = useState("France");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specifications, setSpecifications] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("/api/demand/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        engine,
        power,
        type,
        vin,
        firstName,
        lastName,
        phone,
        email,
        delivery,
        specifications,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
    console.log({
      power,
      type,
      vin,
      firstName,
      lastName,
      phone,
      email,
      delivery,
      specifications,
    });
  };

  return (
    <>
      <Head>
        <title>{engine?.fulldescription || "EISPA"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {/* <section className="text-gray-600 body-font relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Demandez un devis, c'est gratuit !</h1>
          <p className="text-center lg:w-2/3 mx-auto leading-relaxed text-base">Envoyez la demande, nous vous répondrons dans les 15 minutes.</p>
          <form className="w-full px-3 md:px-32 py-12" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-full md:w-1/3 flex flex-col px-3 md:px-6">
                <Card engine={engine} />
              </div>
              <div className="w-full md:w-1/3 flex flex-col px-3 md:px-6">
                <label className="leading-7 text-sm text-gray-600">Configuration</label>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input
                      type="checkbox"
                      id="complete-option"
                      value=""
                      className="hidden peer"
                      checked={type.complete}
                      onChange={(e) => setType({ ...type, complete: e.target.checked })}
                    />
                    <label
                      htmlFor="complete-option"
                      className="h-10 inline-flex items-center justify-between w-full py-1 px-3 text-gray-700 bg-gray-100 bg-opacity-50 border border-gray-300 rounded-lg cursor-pointer peer-checked:border-yellow-500 peer-checked:ring-2 peer-checked:ring-yellow-200 transition-colors duration-200 ease-in-out"
                    >
                      Complet
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="naked-option"
                      value=""
                      className="hidden peer"
                      checked={type.nu}
                      onChange={(e) => setType({ ...type, nu: e.target.checked })}
                    />
                    <label
                      htmlFor="naked-option"
                      className="h-10 inline-flex items-center justify-between w-full py-1 px-3 text-gray-700 bg-gray-100 bg-opacity-50 border border-gray-300 rounded-lg cursor-pointer peer-checked:border-yellow-500 peer-checked:ring-2 peer-checked:ring-yellow-200 transition-colors duration-200 ease-in-out"
                    >
                      Nu
                    </label>
                  </li>
                </ul>
                <label className="leading-7 text-sm text-gray-600">Prénom</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label className="leading-7 text-sm text-gray-600">Numéro de téléphone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="w-full md:w-1/3 flex flex-col px-3 md:px-6">
                <label className="leading-7 text-sm text-gray-600">Livraison</label>
                <select
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="h-10 w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="France">France</option>
                  <option value="Germany">Allemagne</option>
                  <option value="Italy">Italie</option>
                  <option value="Spain">Espagne</option>
                  <option value="United Kingdom">Royaume-Uni</option>
                  <option value="Belgium">Belgique</option>
                  <option value="Netherlands">Pays-Bas</option>
                  <option value="Switzerland">Suisse</option>
                  <option value="Austria">Autriche</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Greece">Grèce</option>
                  <option value="Denmark">Danemark</option>
                  <option value="Sweden">Suède</option>
                  <option value="Norway">Norvège</option>
                  <option value="Finland">Finlande</option>
                  <option value="Ireland">Irlande</option>
                </select>
                <label className="leading-7 text-sm text-gray-600">Nom</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label className="leading-7 text-sm text-gray-600 font-bold">Email (obligatoire)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out required"
                />
              </div>
            </div>
            <div className="p-6">
              <label className="leading-7 text-sm text-gray-600">Spécifications supplémentaires</label>
              <textarea
                value={specifications}
                onChange={(e) => setSpecifications(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
              Envoyez la demande
            </button>
          </form>
        </div>
      </section> */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {engine?.cis} - {engine?.cie}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {engine?.make} {engine?.model} {engine?.spec}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1">
                  Description
                </a>
                {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
              </div>
              <div className="flex py-2">
                <span className="text-gray-500">Constructeur</span>
                <span className="ml-auto text-gray-900">{engine?.make}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Modèle</span>
                <span className="ml-auto text-gray-900">{engine?.model}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Spécification</span>
                <span className="ml-auto text-gray-900">{engine?.spec}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Code moteur</span>
                <span className="ml-auto text-gray-900">{engine?.engine}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Puissance</span>
                <span className="ml-auto text-gray-900">{engine?.power}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Nombre de cylindres</span>
                <span className="ml-auto text-gray-900">{engine?.noc}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Type de carburant</span>
                <span className="ml-auto text-gray-900">{engine?.type}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Traction</span>
                <span className="ml-auto text-gray-900">{engine?.drive}</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {engine?.price} €
                </span>
                <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                  Demandez un devis
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EnginePage;
