import engines from "./data/suggestions.json";

const clean = (str) => {
  str = str.toLowerCase();
  str = str.replace(/[^\w\s]/gi, "").replace(/\s+/g, "");
  return str;
};

const includes = (str1, str2) => {
  const words = str2.split(" ");
  for (let i = 0; i < words.length; i++) if (!clean(str1).includes(clean(words[i]))) return false;
  return true;
};

export function searchEngines({ modelName, modelYear, engineCode }) {
  if (!modelName && !modelYear && !engineCode) return [];
  let filteredEngines = engines.filter((engine) => {
    return includes(engine.make + " " + engine.model + " " + engine.spec, modelName) && includes(engine.engine, engineCode);
  });

  if (!modelYear) return filteredEngines;
  return filteredEngines.filter((engine) => {
    return engine.cis.substring(0, modelYear.length) <= modelYear && engine.cie.substring(0, modelYear.length) >= modelYear;
  });
}
export function findEngine(id) {
  return engines.find((engine) => engine.id == parseInt(id));
}
