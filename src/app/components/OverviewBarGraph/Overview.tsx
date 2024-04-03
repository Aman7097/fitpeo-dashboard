import React, { useRef, useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Ref type annotation corrected
  const chartInstanceRef = useRef<ChartJS | null>(null); // Ref for chart instance
  const [selectedOption, setSelectedOption] = useState("monthly"); // State to track selected option

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    // You can add logic here to update the chart based on the selected option
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [
          5000, 8000, 6500, 7200, 9500, 6800, 7000, 8200, 6000, 7500, 6300,
          8700,
        ],
        backgroundColor: "#645DEA",
        borderRadius: 9, // Rounded edges
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis gridlines
        },
        ticks: {
          display: true, // Hide x-axis ticks
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Hide y-axis gridlines
        },
        ticks: {
          display: false, // Hide y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = new ChartJS(chartRef.current, {
        type: "bar",
        data: data,
        options: options,
      });

      // Cleanup function to destroy the chart instance
      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }
  }, [data, options]);

  return (
    <div className="w-2/3 rounded-lg bg-white p-6 shadow-md">
      <div className="flex justify-between">
        <div className="flex-col">
          <h2 className=" text-2xl font-bold">Overview</h2>

          <h2 className="mx-2 mb-4 text-sm font-bold text-gray-300">
            Monthly Earnings
          </h2>
        </div>

        <div className="">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="rounded-lg border w-full px-6 border-gray-300 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default BarChart;
