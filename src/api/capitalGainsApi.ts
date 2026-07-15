import capitalGains from "../data/capitalGains.json";

export function getCapitalGains() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(capitalGains);
    }, 1000);
  });
}