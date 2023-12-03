// TaxLiabilityChart.js

import React from "react";
import { Bar } from "react-chartjs-2";

const TaxLiabilityChart = ({ data }) => {
  // Extracting data for chart
  const names = data.map((item) => `${item.FirstName} ${item.LastName}`);
  const taxLiabilities = data.map((item) => item.TaxLiability);

  // Chart configuration
  const chartData = {
    labels: names,
    datasets: [
      {
        label: "Tax Liability",
        data: taxLiabilities,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          // Add more colors if needed
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Tax Liability Chart</h2>
      <div style={{ width: "800px", height: "400px" }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default TaxLiabilityChart;
