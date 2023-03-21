const Hero = () => {
  return (
    <section className="text-white body-font pt-24">
      <div className="container mx-auto flex px-4 md:px-40 py-10 rounded-3xl md:flex-row flex-col items-center justify-between bg-cover bg-[url('/liquid-cheese.svg')]">
        <div className=" flex flex-col md:w-2/3 md:items-start md:text-left w-full items-center text-center">
          <h1 className="title-font sm:text-7xl text-3xl mb-8 font-medium letterOutline">
            Trouvez le moteur
            <br />
            que vous méritez
          </h1>
          <p className="mb-8 leading-relaxed text-lg letterOutline">
            EISPA est un leader européen sur le marché des moteurs d’occasion.
            Avec plus de 300 fournisseurs à travers l'Europe, EISPA est en
            mesure d'offrir à ses clients les meilleurs prix possibles pour des
            moteurs de qualité supérieure.
          </p>
        </div>
        <div className="w-2/3 md:w-1/3">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="happy-engine.png"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
