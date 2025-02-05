import React from 'react'
import { FaArrowUp, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const TrendsSummary = () => {
  return (
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
        </div>  )
}

export default TrendsSummary