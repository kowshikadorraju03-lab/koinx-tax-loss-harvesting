interface Props {
  title: string;
  stcg: {
    profits: number;
    losses: number;
  };
  ltcg: {
    profits: number;
    losses: number;
  };
}

function CapitalCard({ title, stcg, ltcg }: Props) {
  const stcgNet = stcg.profits - stcg.losses;
  const ltcgNet = ltcg.profits - ltcg.losses;

  const totalCapitalGains = stcgNet + ltcgNet;

  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      <h3 className="font-semibold">
        Short Term
      </h3>

      <p>
        Profit: ₹{stcg.profits.toFixed(2)}
      </p>

      <p>
        Loss: ₹{stcg.losses.toFixed(2)}
      </p>

      <p>
        Net: ₹{stcgNet.toFixed(2)}
      </p>

      <h3 className="font-semibold mt-4">
        Long Term
      </h3>

      <p>
        Profit: ₹{ltcg.profits.toFixed(2)}
      </p>

      <p>
        Loss: ₹{ltcg.losses.toFixed(2)}
      </p>

      <p>
        Net: ₹{ltcgNet.toFixed(2)}
      </p>

      <p className="mt-4 font-bold">
        Realised Capital Gains: ₹{totalCapitalGains.toFixed(2)}
      </p>
    </div>
  );
}

export default CapitalCard;