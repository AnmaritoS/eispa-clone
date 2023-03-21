const Card = ({ engine }) => {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/1080x720" alt="blog" />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{engine?.start + " - " + engine?.end}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-1">{engine?.make + " " + engine?.model}</h1>
        <p className="leading-relaxed mb-3">{engine?.code}</p>
      </div>
    </div>
  );
};
export default Card;
