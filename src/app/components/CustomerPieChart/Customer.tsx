import React, { useRef, useEffect, useState } from "react";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);

const CustomerChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<'doughnut', number[], string> | null>(null); // Specify chart configuration type

//   const data = {
//     labels: [
//       "Users", "New Users"
//     ],
//     datasets: [
//       {
//         data: [650, 200], // Example data, you can replace it with your actual data
//         backgroundColor: ['#FF6B6B', '#6CB2EB'], 
//         borderRadius: 6,
//       },
//     ],
//   };

  const existingUsers = 300;
  const newUsers = 350;
  const totalCapacity = 1000;

  const data = {
    labels: ["Existing Customers", "New Customers", ""],
    datasets: [
      {
        data: [existingUsers, newUsers, totalCapacity - existingUsers - newUsers],
        backgroundColor: ["#FFC0CB", "#6495ED", "#D3D3D3"], // Pink for existing users, Blue for new users, Grey for vacant
        hoverOffset: 20,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: data,
        options: options,
      });

      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }
  }, [data, options]);

  return (
    <div className="w-1/3 h-full rounded-lg bg-white p-6 shadow-md">
      <div className="flex justify-between">
        <div className="flex-col">
          <h2 className="text-2xl font-bold">Customers</h2>
          <h2 className="mx-2 mb-4 text-sm font-bold text-gray-300">Customers that Buy Products</h2>
        </div>
      </div>
      <div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default CustomerChart;
