import { engines } from "./api/data";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

// const EnginePage = () => {
//   const [engine, setEngine] = useState(null);
//   const router = useRouter();
//   useEffect(() => {
//     if (!router.isReady) return;
//     setEngine(engines.find((engine) => engine.id == parseInt(router.query.engine)));
//   }, [router.isReady]);

//   const [toSend, setToSend] = useState({
//     first: "",
//     last: "",
//     phone: "",
//     email: "",
//   });

//   // vin code
//   // ? complete bare

//   const onSubmit = (e) => {
//     e.preventDefault();
//     {
//       /* --- METHOD TO SEND THE MAIL --- */
//     }
//   };

//   const handleChange = (e) => {
//     setToSend({ ...toSend, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <Head>
//         <title>EISPA</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <Header />
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 mx-auto">
//           <div className="flex flex-col text-center w-full mb-12">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Demandez un devis, c'est gratuit !</h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//               Complétez les champs ci-dessous et envoyez la demande, nous vous répondrons dans la journée.
//             </p>
//           </div>
//           <div className="flex flex-wrap mx-auto">
//             <div className="md:w-1/2 p-5">
//               <h2 className="block mb-5 text-gray-900 text-lg font-medium title-font">Informations sur le moteur</h2>
//               <div className="flex flex-wrap -m-2">
//                 {engine ? <Card engine={engine} /> : <></>}
//                 <div className="p-2 w-1/2">
//                   <div className="relative">
//                     <label htmlFor="power" className="leading-7 text-sm text-gray-600">
//                       Puissance
//                     </label>
//                     <div className="flex">
//                       <input
//                         type="number"
//                         id="power"
//                         name="power"
//                         className="z-10 block flex-1 w-full bg-gray-100 bg-opacity-50 rounded-none rounded-l-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                       />
//                       <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-500">
//                         kW
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-2 w-1/2">
//                     <div className="relative">
//                       <label htmlFor="power" className="leading-7 text-sm text-gray-600">
//                         Type
//                       </label>
//                       <div className="flex">
//                         <input
//                           type="checkbox"
//                           id="complete"
//                           name="complete"
//                           className="flex-1 bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                         />
//                         <label htmlFor="complete">Complete</label>
//                         <input
//                           type="checkbox"
//                           id="bare"
//                           name="bare"
//                           className="flex-1 bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                         />
//                         <label htmlFor="bare">Bare</label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-1/2 p-5">
//               <h2 className="block mb-5 text-gray-900 text-lg font-medium title-font">Informations personelles</h2>
//               <div className="flex flex-wrap -m-2">
//                 <div className="p-2 w-1/2">
//                   <div className="relative">
//                     <label htmlFor="first" className="leading-7 text-sm text-gray-600">
//                       Prénom
//                     </label>
//                     <input
//                       type="text"
//                       id="first"
//                       name="first"
//                       autoComplete="given-name"
//                       className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 <div className="p-2 w-1/2">
//                   <div className="relative">
//                     <label htmlFor="last" className="leading-7 text-sm text-gray-600">
//                       Nom
//                     </label>
//                     <input
//                       type="text"
//                       id="last"
//                       name="last"
//                       autoComplete="family-name"
//                       className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 <div className="p-2 w-1/2">
//                   <div className="relative">
//                     <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                       Numéro de téléphone
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 <div className="p-2 w-1/2">
//                   <div className="relative">
//                     <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                       Email (Obligatoire)
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     />
//                   </div>
//                 </div>
//                 <div className="p-2 w-1/2">
//                   <div className="relative">
//                     <label htmlFor="delivery" className="leading-7 text-sm text-gray-600">
//                       Livraison
//                     </label>
//                     <select
//                       id="delivery"
//                       name="delivery"
//                       className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                     >
//                       <option value="fr">France</option>
//                       {/* <option value="fr">France</option>
//                       <option value="fr">France</option>
//                       <option value="fr">France</option>
//                       <option value="fr">France</option>
//                       <option value="fr">France</option> */}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="p-2 w-full">
//                   <div className="relative">
//                     <label htmlFor="message" className="leading-7 text-sm text-gray-600">
//                       Spécifications supplémentaires
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                     ></textarea>
//                   </div>
//                 </div>
//                 <div className="p-2 w-full">
//                   <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
//                     Envoyez la demande
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default EnginePage;

const EnginePage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.engine);
    setEngine(engines.find((engine) => engine.id == parseInt(router.query.engine)));
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
      body: JSON.stringify({ engine, power, type, vin, firstName, lastName, phone, email, delivery, specifications }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
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
        <title>EISPA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="text-gray-600 body-font relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Demandez un devis, c'est gratuit !</h1>
          <p className="text-center lg:w-2/3 mx-auto leading-relaxed text-base">Envoyez la demande, nous vous répondrons dans les 15 minutes.</p>
          <Card engine={engine} />
          <Link
            href={"https://api.whatsapp.com/send/?phone=33781193148&text=Demande%20" + engine?.id}
            className="flex mx-auto my-2 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg"
          >
            Envoyez la demande
          </Link>
          {/* <form className="w-full px-3 md:px-32 py-12" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-full md:w-1/5 flex flex-col px-3 md:px-6">
                <Card engine={engine} />
              </div>
              <div className="w-full md:w-2/5 flex flex-col px-3 md:px-6">
                <label className="text-lg font-bold block mb-5 text-gray-900 title-font">Informations sur le moteur</label>
                <label className="leading-7 text-sm text-gray-600">Puissance</label>

                <div className="flex">
                  <input
                    type="number"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                    className="z-10 w-full bg-gray-100 bg-opacity-50 rounded-l-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-500">
                    kW
                  </span>
                </div>

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
                <label className="leading-7 text-sm text-gray-600">Code VIN</label>
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

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
              </div>
              <div className="w-full md:w-2/5 flex flex-col px-3 md:px-6">
                <label className="text-lg font-bold block mb-5 text-gray-900 title-font">Informations personnelles</label>
                <label className="leading-7 text-sm text-gray-600">Prénom</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label className="leading-7 text-sm text-gray-600">Nom</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label className="leading-7 text-sm text-gray-600">Numéro de téléphone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
          </form> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EnginePage;
