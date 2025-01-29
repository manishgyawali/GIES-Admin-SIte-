import React from "react";
import { IoStatsChart, IoPeople, IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import LineChart from "./../../LineChart/LineChart";
import PieChart from "../../PieChart/PieChart";
import { FaWallet, FaGraduationCap, FaChartBar } from "react-icons/fa";
import AreaChart from "../../AreaChart/AreaChart";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      title: "Booking",
      value: "2500",
      change: "54.1%",
      changeType: "less",
      icon: <FaWallet className="text-yellow-600 text-3xl" />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      id: 2,
      title: "Users",
      value: "10K",
      change: "14.1%",
      changeType: "grow",
      icon: <FaGraduationCap className="text-pink-600 text-3xl" />,
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      id: 3,
      title: "Capital Gains",
      value: "$563",
      change: "7.35%",
      changeType: "increase",
      icon: <FaChartBar className="text-green-600 text-3xl" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
  ];
  
  return (
    <div className="py-10  flex flex-col gap-5 bg-[#F9FAFB] rounded-2xl">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Portfolio Performance</h2>
        <button className="px-4 py-1 border border-gray-400 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
          View All
        </button>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className={`p-4 ${item.bgColor} rounded-full`}>{item.icon}</div>
            <div>
              <h3 className="text-gray-600 text-sm">{item.title}</h3>
              <h1 className="text-3xl font-bold text-gray-700">{item.value}</h1>
              <p className={`text-sm ${item.textColor}`}>
                {item.changeType === "less" && <span className="text-red-500">▼ </span>}
                {item.changeType === "grow" && <span className="text-blue-500">▼ </span>}
                {item.changeType === "increase" && <span className="text-green-500">▲ </span>}
                {item.changeType === "less" ? "less " : "Grow Rate: "}
                {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="mt-10 flex justify-center">
        <button className="bg-[#415FF2] text-white py-2 px-6 rounded-full font-medium shadow-md hover:bg-blue-500 transition">
          View Complete Report
        </button>
      </div>
    </div>

      {/* Pie Chart Section */}
      <div className="flex w-11/12 mx-auto gap-4">
        <div className="w-8/12 grid gap-2 shadow bg-white rounded-md py-4 px-6">
          <h1 className="text-xl font-semibold">Customer Satisfaction</h1>
          <PieChart />
        </div>
        <div className="w-4/12 shadow flex flex-col gap-4 bg-white rounded-md py-4 px-6">
          <h1 className="text-xl font-semibold">Insights</h1>
          <div className="flex flex-col gap-8 text-gray-700">
          <p className="text-gray-600 mt-2">
            🔹 80% of customers are satisfied with our service.
          </p>
          <p className="text-gray-600 mt-1">
            🔹 15% reported minor issues, mostly related to booking delays.
          </p>
          <p className="text-gray-600 mt-1">
            🔹 5% expressed dissatisfaction due to room availability concerns.
          </p>
         </div>
        </div>
      </div>
      

      {/* Line Chart Section */}
      <div className="flex w-11/12 mx-auto gap-4">
        <div className="w-8/12 grid gap-6 shadow bg-white rounded-md py-4 px-6">
          <h1 className="text-2xl font-semibold">Booking Trends</h1>
          <LineChart />
        </div>
        <div className="w-4/12 shadow bg-white flex flex-col gap-5 rounded-md py-4 px-6">
          <h1 className="text-xl font-semibold">Trends Summary</h1>
        <div className="flex flex-col gap-8 text-gray-700">
        <p className=" ">
            📈 Bookings have increased by <span className="text-green-500 font-semibold">15%</span> this month.
          </p>
          <p className=" ">
            📉 Peak booking time is between <span className="font-semibold">6-9 PM</span>.
          </p>
          <p className=" ">
            🚀 Most popular properties are in the **Downtown** area.
          </p>
        </div>
        </div>
      </div>

      <div>
        <AreaChart />
      </div>
    </div>
  );
};

export default Dashboard;
