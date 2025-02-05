import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

const UpcomingAppointments = () => {
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
  return (
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
        </div>  )
}

export default UpcomingAppointments