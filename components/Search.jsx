import React, { useEffect, useState } from "react";

const Search = ({ engines, onChange, paddingTop }) => {
  engines.sort((a, b) => {
    a = a.make.toLowerCase();
    b = b.make.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  });

  const [modelName, setModelName] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [engineCode, setEngineCode] = useState("");
  const [results, setResults] = useState([]);

  const searchEngines = () => {
    if (!modelName && !modelYear && !engineCode) return [];
    let filteredEngines = engines.filter((engine) => {
      return (
        (engine.make + " " + engine.model)
          .toLowerCase()
          .includes(modelName.toLowerCase()) &&
        engine.code.toLowerCase().includes(engineCode.toLowerCase())
      );
    });

    if (!modelYear) return filteredEngines;
    return filteredEngines.filter((engine) => {
      return (
        engine.start.substring(0, modelYear.length) <= modelYear &&
        engine.end.substring(0, modelYear.length) >= modelYear
      );
    });
  };

  useEffect(() => {
    setResults(searchEngines());
  }, [modelName, modelYear, engineCode]);

  useEffect(() => {
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

  // function similarity(s1, s2) {
  //   var longer = s1;
  //   var shorter = s2;
  //   if (s1.length < s2.length) {
  //     longer = s2;
  //     shorter = s1;
  //   }
  //   var longerLength = longer.length;
  //   if (longerLength == 0) {
  //     return 1.0;
  //   }
  //   return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  // }

  // function editDistance(s1, s2) {
  //   s1 = s1.toLowerCase();
  //   s2 = s2.toLowerCase();

  //   var costs = new Array();
  //   for (var i = 0; i <= s1.length; i++) {
  //     var lastValue = i;
  //     for (var j = 0; j <= s2.length; j++) {
  //       if (i == 0) costs[j] = j;
  //       else {
  //         if (j > 0) {
  //           var newValue = costs[j - 1];
  //           if (s1.charAt(i - 1) != s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
  //           costs[j - 1] = lastValue;
  //           lastValue = newValue;
  //         }
  //       }
  //     }
  //     if (i > 0) costs[s2.length] = lastValue;
  //   }
  //   return costs[s2.length];
  // }

  // const compare = (engine, input) => {
  //   // // let end;
  //   // // if (value.end === "Present") end = new Date().getFullYear();
  //   // // else end = value.end;
  //   // let b = false;
  //   // Object.keys(input).forEach((key) => {
  //   //   input[key] = input[key].trim();
  //   //   b = b || input[key] != "";
  //   // });
  //   // // input.year == "" ? (input.year = 0) : (input.year = parseInt(input.year));
  //   // // value.end = parseInt(value.end) || 2022;
  //   // if (!(value.make.toLowerCase() + " " + value.model.toLowerCase()).includes(input.model.toLowerCase())) b = false;
  //   // // if (!(value.end < Number(input.year) && Number(input.year) < value.start)) b = false;
  //   // // console.log(input.year);
  //   // // console.log(value.start, value.start > Number(input.year));
  //   // // console.log(value.end, value.end < Number(input.year));
  //   // if ((input.year > value.end || input.year < value.start) && input.year != "") b = false;
  //   // if (!value.code.toLowerCase().startsWith(input.code.toLowerCase())) b = false;
  //   // return b;

  //   return (
  //     (engine.make + " " + engine.model).toLowerCase().includes(input.model.toLowerCase()) &&
  //     engine.start <= input.year &&
  //     engine.end >= input.year &&
  //     engine.code.toLowerCase().includes(input.code.toLowerCase())
  //   );
  // };

  // useEffect(() => {
  //   console.log(filter);
  //   let r = engines.filter((engine) => compare(engine, filter));
  //   // console.log("r", r);
  //   onChange(r);
  // }, [filter]);

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
