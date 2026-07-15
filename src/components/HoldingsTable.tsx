import { useState } from "react";

interface Props {
  holdings: any[];
  setSelectedHoldings: (items: any[]) => void;
}

function HoldingsTable({
  holdings,
  setSelectedHoldings,
}: Props) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const displayedHoldings = showAll
    ? holdings
    : holdings.slice(0, 10);

  function handleSelect(id: number) {
    let updatedRows: number[];

    if (selectedRows.includes(id)) {
      updatedRows = selectedRows.filter((item) => item !== id);
    } else {
      updatedRows = [...selectedRows, id];
    }

    setSelectedRows(updatedRows);

    const selectedItems = holdings.filter((item) =>
      updatedRows.includes(item.id)
    );

    setSelectedHoldings(selectedItems);
  }

  function handleSelectAll() {
    if (selectedRows.length === holdings.length) {
      setSelectedRows([]);
      setSelectedHoldings([]);
    } else {
      const allIds = holdings.map((item) => item.id);
      setSelectedRows(allIds);
      setSelectedHoldings(holdings);
    }
  }

  return (
    <div className="bg-white shadow rounded-xl p-5">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={
                    selectedRows.length === holdings.length &&
                    holdings.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>

              <th className="p-2 text-left">Asset</th>
              <th className="p-2 text-left">Holdings</th>
              <th className="p-2 text-left">Current Price</th>
              <th className="p-2 text-left">ST Gain</th>
              <th className="p-2 text-left">LT Gain</th>
              <th className="p-2 text-left">Amount to Sell</th>
            </tr>
          </thead>

          <tbody>
            {displayedHoldings.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />
                </td>

                <td className="p-2">
                  <div className="flex items-center gap-2">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.asset}
                        className="w-8 h-8 rounded-full"
                      />
                    )}

                    <div>
                      <div className="font-semibold">{item.asset}</div>
                      <div className="text-sm text-gray-500">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Holdings */}
                <td className="p-2">
                  <div>{item.holding}</div>
                </td>

                {/* Current Price */}
                <td className="p-2">
                  ₹{item.price.toFixed(2)}
                </td>

                {/* ST Gain */}
                <td
                  className={`p-2 ${
                    item.stcg.gain >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ₹{item.stcg.gain.toFixed(2)}
                </td>

                {/* LT Gain */}
                <td
                  className={`p-2 ${
                    item.ltcg.gain >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ₹{item.ltcg.gain.toFixed(2)}
                </td>

                {/* Amount to Sell */}
                <td className="p-2">
                  {selectedRows.includes(item.id)
                    ? item.holding
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {holdings.length > 10 && (
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
    </div>
  );
}

export default HoldingsTable;