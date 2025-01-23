import React from "react";

import { IoStatsChart, IoPeople, IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import LineChart from "./../../LineChart/LineChart";

const Dashboard = () => {
  const metrics = [
    {
      id: 1,
      title: "Bookings",
      value: "Total: 125+",
      icon: <IoStatsChart className="text-2xl" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Users",
      value: "Active: 50+",
      icon: <IoPeople className="text-2xl" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 3,
      title: "Events",
      value: "Ongoing: 10+",
      icon: <FaRegCalendarAlt className="text-2xl" />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      id: 4,
      title: "Properties",
      value: "Available: 8+",
      icon: <IoHomeOutline className="text-2xl" />,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
  ];
  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
      </div>

      {/* Metrics Section */}
      <div className="grid  w-11/12 mx-auto grid-cols-3 gap-4 mb-10">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-white p-6 shadow justify-center rounded-lg flex items-center gap-6"
          >
            <div
              className={`p-4 ${metric.bgColor} ${metric.textColor} rounded-full`}
            >
              {metric.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {metric.title}
              </h2>
              <p className="text-gray-500">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex w-11/12 mx-auto ">
        <div className="w-8/12">
          <LineChart />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
