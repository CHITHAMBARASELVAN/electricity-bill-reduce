import React, { useState } from 'react';

function Calculator() {
  const [usage, setUsage] = useState(0);
  const [savings, setSavings] = useState(0);

  const averageRatePerKWh = 7; // Average rate in ₹ per kWh

  const calculateSavings = () => {
    const potentialSavings = (usage * averageRatePerKWh) * 0.2; // Example calculation
    setSavings(potentialSavings);
  };

  return (
    <div>
      <h2>Energy Consumption Calculator</h2>
      <input
        type="number"
        value={usage}
        onChange={(e) => setUsage(e.target.value)}
        placeholder="Enter your usage in kWh"
      />
      <button onClick={calculateSavings}>Calculate Savings</button>
      <p>Potential Savings: ₹{savings.toFixed(2)}</p>
    </div>
  );
}

export default Calculator;
