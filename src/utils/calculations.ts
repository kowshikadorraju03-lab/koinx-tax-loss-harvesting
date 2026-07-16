export function calculateAfterHarvest(
  capitalGains: any,
  selectedHoldings: any[]
) {
  let stcgProfit = capitalGains.stcg.profits;
  let stcgLoss = capitalGains.stcg.losses;

  let ltcgProfit = capitalGains.ltcg.profits;
  let ltcgLoss = capitalGains.ltcg.losses;

  selectedHoldings.forEach((item) => {
    // Short Term Gain/Loss
    if (item.stcg.gain > 0) {
<<<<<<< HEAD
    stcgProfit += item.stcg.gain;
} else {
    stcgLoss += Math.abs(item.stcg.gain);
}

if (item.ltcg.gain > 0) {
    ltcgProfit += item.ltcg.gain;
} else {
    ltcgLoss += Math.abs(item.ltcg.gain);
}
=======
      stcgProfit -= item.stcg.gain;
    } else {
      stcgLoss += Math.abs(item.stcg.gain);
    }

    // Long Term Gain/Loss
    if (item.ltcg.gain > 0) {
      ltcgProfit -= item.ltcg.gain;
    } else {
      ltcgLoss += Math.abs(item.ltcg.gain);
    }
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2
  });

  return {
    stcg: {
      profits: stcgProfit,
      losses: stcgLoss,
    },
    ltcg: {
      profits: ltcgProfit,
      losses: ltcgLoss,
    },
  };
}