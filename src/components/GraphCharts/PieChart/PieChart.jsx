import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [12, 7, 17, 10, 2, 7],

      backgroundColor: ["#6366F1", "#F59E0B", "#10B981", "#EF4444"],
      borderWidth: 0,
    },
  ],
};

const PieChart = () => (
  <div className="w-96">
    <PolarArea data={data} />
  </div>
);

export default PieChart;
