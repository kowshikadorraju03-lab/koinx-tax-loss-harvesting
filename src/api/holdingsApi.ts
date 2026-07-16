import holdings from "../data/holdings.json";

export function getHoldings(): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(holdings);
    }, 1000);
  });
}