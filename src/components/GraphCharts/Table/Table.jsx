import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const consultations = [
  {
    id: 1,
    name: "John Doe",
    country: "Canada",
    status: "Approved",
    date: "Jan 25, 2025",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    statusIcon: <FaCheckCircle className="text-green-500 text-lg" />,
  },
  {
    id: 2,
    name: "Jane Smith",
    country: "USA",
    status: "Pending",
    date: "Jan 28, 2025",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    statusIcon: <FaClock className="text-yellow-500 text-lg" />,
  },
  {
    id: 3,
    name: "Michael Lee",
    country: "Australia",
    status: "Rejected",
    date: "Feb 2, 2025",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    statusIcon: <FaTimesCircle className="text-red-500 text-lg" />,
  },
];

const Table = () => {
  return (
    <div className="">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Client</th>
            <th className="p-3 text-left">Country</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {consultations.map((consultation) => (
            <tr key={consultation.id} className="border-t">
              <td className="p-3 flex items-center gap-3">
                <img
                  src={consultation.image}
                  alt={consultation.name}
                  className="w-10 h-10 rounded-full"
                />
                {consultation.name}
              </td>
              <td className="p-3">{consultation.country}</td>
              <td className="p-3 flex items-center gap-2">
                {consultation.statusIcon}
                {consultation.status}
              </td>
              <td className="p-3">{consultation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
