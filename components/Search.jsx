import React, { useEffect, useState } from "react";
import { searchEngines } from "../pages//api/handler";

const Search = ({ onChange, paddingTop }) => {
  const [modelName, setModelName] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [engineCode, setEngineCode] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(searchEngines({ modelName, modelYear, engineCode }));
  }, [modelName, modelYear, engineCode]);

  useEffect(() => {
    console.log(results);
    onChange(results);
  }, [results]);

  const handleModelNameChange = (e) => {
    setModelName(e.target.value.trim());
  };

  const handleModelYearChange = (e) => {
    setModelYear(e.target.value.trim());
  };

  const handleEngineCodeChange = (e) => {
    setEngineCode(e.target.value.trim());
  };

  return (
    <div className={`flex justify-center mx-2 ${paddingTop}`}>
      <div className="drop-shadow-xl">
        <input
          className="w-1/3 rounded-xl rounded-r-none border-r border-gray-200 text-base outline-none text-gray-700 py-6 px-4 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Modèle"
          // onChange={(e) => setFilter({ ...filter, model: e.target.value })}
          // value={modelName}
          onChange={handleModelNameChange}
        />
        <input
          className="w-1/3 border-r border-gray-200 text-base outline-none text-gray-700 py-6 px-4 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Année"
          // onChange={(e) => setFilter({ ...filter, year: e.target.value })}
          // value={modelYear}
          onChange={handleModelYearChange}
        />
        <input
          className="w-1/3 rounded-xl rounded-l-none text-base outline-none text-gray-700 py-6 px-4 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Code"
          // onChange={(e) => setFilter({ ...filter, code: e.target.value })}
          // value={engineCode}
          onChange={handleEngineCodeChange}
        />
      </div>
    </div>
  );
};
export default Search;
