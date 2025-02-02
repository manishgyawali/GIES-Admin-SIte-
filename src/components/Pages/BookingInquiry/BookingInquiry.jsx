import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const BookingInquiry = () => {
  const bookingDetails = [
    {
      firstname: "Manish",
      secondname: "Gyawali",
      email: "support@giesedu.com",
      phone: "9876543210",
      date: "25 November 2025",
    },
    {
      firstname: "Abeen",
      secondname: "Khanal",
      email: "support@giesedu.com",
      phone: "9876543210",
      date: "25 November 2025",
    },
    {
      firstname: "Manish",
      secondname: "Gyawali",
      email: "support@giesedu.com",
      phone: "9876543210",
      date: "25 November 2025",
    },
    {
      firstname: "Abeen",
      secondname: "Khanal",
      email: "support@giesedu.com",
      phone: "9876543210",
      date: "25 November 2025",
    },
  ];
  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <div className="flex items-center  justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-semibold ">Booking Inquiry</h1>
        {/* search section  */}
       
      </div>
      <div className="  bg-white shadow-lg rounded py-6  ">
        <div className="flex items-center mb-4 justify-between w-11/12 mx-auto">
          <h1 className="text-lg font-semibold ">Manage Data</h1>
          {/* search section  */}
          <div className="relative flex justify-center flex-col items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="w-40 p-2 pl-10 text-sm rounded-full bg-[#415FF2] text-white placeholder-white outline-none"
            />
            <RiSearchLine className="h-4 w-4 absolute  left-4 text-white" />
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <table className=" bg-white border rounded shadow">
            <thead className="bg-gray-200">
              <tr className="">
                <th className="p-4 ">First Name</th>
                <th className="p-4 ">Last Name</th>
                <th className="p-4 ">Email</th>
                <th className="p-4 ">Date</th>
                <th className="p-4 ">Phone Number</th>

                <th className="p-4 text-center">Actions</th>
                <th className="p-4 text-center">Preview</th>
              </tr>
            </thead>
            <tbody>
              {bookingDetails.map((val, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{val.firstname}</td>
                  <td className="p-4">{val.secondname}</td>
                  <td className="p-4">{val.email}</td>
                  <td className="p-4">{val.date}</td>
                  <td className="p-4">{val.phone}</td>

                  <td className="p-4 md:grid grid items-center justify-center gap-4">
                    <button
                      onClick={setEditIndex}
                      className="px-4 py-1 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      {" "}
                      <IoPencil />
                      Edit
                    </button>
                    <button
                      onClick={setDeleteIndex}
                      className="px-4 py-1 bg-red-500 text-white rounded-md flex items-center gap-2"
                    >
                      {" "}
                      <IoTrash />
                      Delete
                    </button>
                  </td>
                  <td className="p-4 ">
                    <button
                      onClick={() => setPreviewIndex(index)} // Open modal
                      className="px-4 py-1 bg-blue-500 text-white rounded-md"
                    >
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* popup for deletion button  */}
            {deleteIndex && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                  <p className="text-lg text-center font-medium mb-4">
                    Are you sure you want to delete?
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <button className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                      Yes
                    </button>
                    <button
                      onClick={() => setDeleteIndex(null)}
                      className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* popup for edit button  */}
            {editIndex && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white px-8 py-6 rounded shadow-md max-w-sm w-full transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                  <h2 className="font-medium text-lg mb-6 ">Edit Data</h2>
                  <div className="grid gap-4 mb-6">
                    <input
                      type="text"
                      className="border p-2 w-full rounded-md"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="border p-2 w-full rounded-md"
                      placeholder="Second Name"
                    />
                    <input
                      type="text"
                      className="border p-2 w-full rounded-md"
                      placeholder="Email"
                    />{" "}
                      <input
                        type="date"
                        className="border p-2 w-full rounded-md"
                        placeholder="date"
                      />
                    <input
                      type="number"
                      className="border p-2 w-full rounded-md"
                      placeholder="Contact"
                    />{" "}
                  </div>
                  <div className="flex items-center  gap-4">
                    <button className="px-6 py-2 bg-[#415FF2] text-white rounded-md hover:bg-blue-600">
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Preview Modal */}
            {previewIndex !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white flex flex-col gap-2  p-6 rounded-lg w-96 transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                  <h2 className="text-xl font-semibold ">
                    {bookingDetails[previewIndex].firstname}
                  </h2>
                  <h2 className="text-xl font-semibold ">
                    {bookingDetails[previewIndex].secondname}
                  </h2>
                  <h2 className=" ">{bookingDetails[previewIndex].email}</h2>{" "}
                  <p className=" ">{bookingDetails[previewIndex].date}</p>
                  <h2 className=" ">{bookingDetails[previewIndex].phone}</h2>
                  <button
                    onClick={() => setPreviewIndex(null)} // Close modal
                    className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingInquiry;
