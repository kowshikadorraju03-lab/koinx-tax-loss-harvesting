import { useEffect, useState } from "react";

import Header from "./components/Header";
import CapitalCard from "./components/CapitalCard";
import HoldingsTable from "./components/HoldingsTable";

import { getHoldings } from "./api/holdingsApi";
import { getCapitalGains } from "./api/capitalGainsApi";

import { calculateAfterHarvest } from "./utils/calculations";

function App() {
  const [holdings, setHoldings] = useState<any[]>([]);
  const [capitalGains, setCapitalGains] = useState<any>(null);
  const [selectedHoldings, setSelectedHoldings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const holdingsData = await getHoldings();
        const capitalData = await getCapitalGains();

        setHoldings(holdingsData);
        setCapitalGains(capitalData);
      } catch (err) {
        console.error(err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <h2 className="p-10 text-xl">
        Loading holdings...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="p-10 text-xl text-red-600">
        {error}
      </h2>
    );
  }

  if (!capitalGains) {
    return null;
  }

  const afterHarvest = calculateAfterHarvest(
    capitalGains,
    selectedHoldings
  );

  const before =
    capitalGains.stcg.profits -
    capitalGains.stcg.losses +
    capitalGains.ltcg.profits -
    capitalGains.ltcg.losses;

  const after =
    afterHarvest.stcg.profits -
    afterHarvest.stcg.losses +
    afterHarvest.ltcg.profits -
    afterHarvest.ltcg.losses;

  const savings = before - after;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6 space-y-6">

        <div className="grid md:grid-cols-2 gap-6">

          <CapitalCard
            title="Before Harvesting"
            stcg={capitalGains.stcg}
            ltcg={capitalGains.ltcg}
          />

          <CapitalCard
            title="After Harvesting"
            stcg={afterHarvest.stcg}
            ltcg={afterHarvest.ltcg}
          />

        </div>

        {savings > 0 && (
          <p className="text-green-600 font-bold text-lg">
            You are going to save ₹{savings.toFixed(2)}
          </p>
        )}

        <HoldingsTable
          holdings={holdings}
          setSelectedHoldings={setSelectedHoldings}
        />

      </main>
    </div>
  );
}

export default App;