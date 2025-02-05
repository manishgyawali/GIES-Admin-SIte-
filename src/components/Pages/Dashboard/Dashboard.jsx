import React from "react";
import { FaCalendarAlt, FaBell } from "react-icons/fa";
import { FaArrowUp, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaUserFriends, FaStamp, FaPlaneDeparture } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

import { IoMdAdd } from "react-icons/io";
import PieChart from "../../GraphCharts/PieChart/PieChart";
import AreaChart from "../../GraphCharts/AreaChart/AreaChart";
import BarChart from "../../GraphCharts/BarChart/BarChart";
import Table from "./../../GraphCharts/Table/Table";
import TrendsSummary from "../../GraphCharts/TrendsSummary/TrendsSummary";
import UpcomingAppointments from "../../GraphCharts/UpcomingAppointments/UpcomingAppointments";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);
const Dashboard = () => {
  const notifications = [
    {
      id: 1,
      message: "New visa policies updated for Australia.",
      icon: <FaBell className="text-blue-500 text-lg" />,
    },
    {
      id: 2,
      message: "Next batch for UK consultation starts soon.",
      icon: <FaCalendarAlt className="text-yellow-500 text-lg" />,
    },
    {
      id: 3,
      message: "New visa policies updated for Australia.",
      icon: <FaBell className="text-blue-500 text-lg" />,
    },
    {
      id: 4,
      message: "Next batch for UK consultation starts soon.",
      icon: <FaCalendarAlt className="text-yellow-500 text-lg" />,
    },
  ];
  const data = [
    {
      id: 1,
      title: "Total Consultations",
      value: "3500",
      change: "12.3%",
      changeType: "grow",
      icon: <FaUserFriends className="text-yellow-50 text-2xl" />,
      bgColor: "bg-[#F7B924]",
      textColor: "text-yellow-600",
    },
    {
      id: 2,
      title: "Visa Approvals",
      value: "1.5K",
      change: "8.1%",
      changeType: "increase",
      icon: <FaStamp className="text-pink-50 text-2xl" />,
      bgColor: "bg-[#DC3A61]",
      textColor: "text-pink-600",
    },
    {
      id: 3,
      title: "Top Destination",
      value: "Australia",
      change: "Most Preferred",
      changeType: "neutral",
      icon: <FaPlaneDeparture className="text-green-50 text-2xl" />,
      bgColor: "bg-[#4DC98A]",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="py-10 flex flex-col gap-5 bg-[#F9FAFB] rounded-2xl">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button className="px-3 py-2 bg-[#3AC47D] text-sm shadow-md flex gap-1 items-center justify-center rounded font-semibold mr-6 text-white ">
          <IoMdAdd className="text-xl" />
          Create New{" "}
        </button>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 mt-4 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl  text-gray-800">Consultancy Performance</h2>
          <button className="px-4 py-1 rounded text-sm border-2 border-gray-500">
            View All
          </button>
        </div>

        <div className="grid grid-cols-3 py-7  gap-6">
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className={`p-4 ${item.bgColor} rounded-full`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-gray-600 text-sm">{item.title}</h3>
                <h1 className="text-3xl font-bold text-gray-700">
                  {item.value}
                </h1>
                <p className={`text-sm ${item.textColor}`}>
                  {item.changeType === "grow" && (
                    <span className="text-[#415FF2]">▲ </span>
                  )}
                  {item.changeType === "increase" && (
                    <span className="text-green-500">▲ </span>
                  )}
                  {item.changeType === "neutral" && (
                    <span className="text-xl">🔹 </span>
                  )}
                  {item.change}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center">
          <button className="bg-[#415FF2] text-white py-2 px-6 rounded-full font-medium shadow-md hover:bg-blue-700 transition">
            View Complete Report
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 w-11/12 mx-auto gap-4">
        <div className="grid gap-2 shadow bg-white rounded-md py-4 px-6">
          <h1 className="text-xl font-semibold">Customer Satisfaction</h1>
          <PieChart />
        </div>
        <div className="grid gap-2 shadow bg-white rounded-md py-4 px-6">
          <h1 className="text-xl font-semibold">Country-wise Booking</h1>
          <AreaChart />
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="flex w-11/12 mx-auto gap-4">
        <div className="w-8/12 grid gap-6 shadow bg-white rounded-md py-4 px-6">
          <h1 className="text-2xl font-semibold">Booking Trends</h1>
          <BarChart />
        </div>

        <TrendsSummary />
      </div>

      {/* Recent Consultations Table */}
      <div className="w-11/12 mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Recent Consultations</h1>
        <Table />
      </div>

      {/* Appointments Calendar & Notifications */}
      <div className="grid grid-cols-2 w-11/12 mx-auto gap-6">
        {/* Upcoming Appointments */}

        <UpcomingAppointments />

        {/* Notifications */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <FaBell className="text-red-500" /> Notifications
          </h1>
          <div className="mt-4 space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center gap-3 bg-gray-100 p-3 rounded-md hover:shadow-md transition"
              >
                {notification.icon}
                <p className="text-gray-700">{notification.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
