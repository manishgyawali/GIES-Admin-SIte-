import React from "react";
import { FaCalendarAlt, FaBell, FaUserCircle } from "react-icons/fa";
import { FaArrowUp, FaClock, FaMapMarkerAlt } from "react-icons/fa";

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

import { FaWallet, FaGraduationCap, FaChartBar, FaGlobe } from "react-icons/fa";
import PieChart from "./../../PieChart/PieChart";
import AreaChart from "./../../AreaChart/AreaChart";
import BarChart from "./../../BarChart/BarChart";
import Table from "../../GraphCharts/Table/Table";

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
  const appointments = [
    {
      id: 1,
      name: "John Doe",
      country: "Canada",
      date: "Feb 5, 2025",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      country: "USA",
      date: "Feb 7, 2025",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      country: "Canada",
      date: "Feb 5, 2025",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Jane Smith",
      country: "USA",
      date: "Feb 7, 2025",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

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
      icon: <FaWallet className="text-yellow-600 text-3xl" />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      id: 2,
      title: "Visa Approvals",
      value: "1.5K",
      change: "8.1%",
      changeType: "increase",
      icon: <FaGraduationCap className="text-pink-600 text-3xl" />,
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      id: 3,
      title: "Top Destination",
      value: "Canada",
      change: "Most Preferred",
      changeType: "neutral",
      icon: <FaGlobe className="text-green-600 text-3xl" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="py-10 flex flex-col gap-5 bg-[#F9FAFB] rounded-2xl">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Consultancy Performance
          </h2>
          <button className="px-4 py-1 border border-gray-400 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            View All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
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
                    <span className="text-blue-500">▲ </span>
                  )}
                  {item.changeType === "increase" && (
                    <span className="text-green-500">▲ </span>
                  )}
                  {item.changeType === "neutral" && <span>🔹 </span>}
                  {item.change}
                </p>
              </div>
            </div>
          ))}
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
        <div className="w-4/12 shadow bg-white flex flex-col gap-5 rounded-lg py-6 px-6 border border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            📊 Trends Summary
          </h1>

          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-md">
              <FaArrowUp className="text-green-500 text-lg" />
              <p>
                <span className="text-green-500 font-semibold">15%</span>{" "}
                increase in bookings this month.
              </p>
            </div>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-md">
              <FaClock className="text-blue-500 text-lg" />
              <p>
                Peak booking time: <span className="font-semibold">6-9 PM</span>
                .
              </p>
            </div>

            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-md">
              <FaMapMarkerAlt className="text-yellow-500 text-lg" />
              <p>
                Most popular destination:{" "}
                <span className="font-semibold">Australia</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Consultations Table */}
      <div className="w-11/12 mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Recent Consultations</h1>
        <Table />
      </div>

      {/* Appointments Calendar & Notifications */}
      <div className="grid grid-cols-2 w-11/12 mx-auto gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <FaCalendarAlt className="text-green-500" /> Upcoming Appointments
          </h1>
          <div className="mt-4 space-y-3">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center gap-3 bg-gray-100 p-3 rounded-md hover:shadow-md transition"
              >
                <img
                  src={appointment.image}
                  alt={appointment.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-700 font-medium">
                    {appointment.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {appointment.country} - {appointment.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
