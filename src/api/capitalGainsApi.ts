import capitalGains from "../data/capitalGains.json";

export function getCapitalGains(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(capitalGains);
    }, 1000);
  });
}