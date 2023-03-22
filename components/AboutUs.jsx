const AboutUs = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 pt-32 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
            Qui sommes nous ?
          </h1>
          <p class="leading-relaxed text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint
            facere repudiandae ad atque placeat magni magnam molestiae labore
            iure, praesentium reprehenderit minus illum assumenda, unde vero
            omnis officia. Repellendus fugit eaque voluptate, reiciendis ipsum
            sapiente veritatis beatae sed voluptates porro. Libero magnam
            laborum adipisci? Distinctio aperiam praesentium expedita quod.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          ></img>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
