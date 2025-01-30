import React from "react";
import { Bar } from "react-chartjs-2";

const barchartData = {
  labels: ["2003", "Feb '03", "Mar '03", "Apr '03", "May '03", "Jun '03"],
  datasets: [
    {
      label: "Australia",
      data: [10, 15, 22, 18, 25, 20],
      backgroundColor: "#6366F1",
    },
    {
      label: "Japan",
      data: [5, 12, 17, 12, 18, 15],
      backgroundColor: "#F59E0B",
    },
    {
      label: "Canada",
      data: [3, 8, 10, 9, 12, 10],
      backgroundColor: "#10B981",
    },
  ],
};

const BarChart = () => {
  return (
    <div className=" ">
      <Bar data={barchartData} className="w-[500px]"/>
    </div>
  );
};

export default BarChart;