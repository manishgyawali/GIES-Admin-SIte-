import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const ManageChooseUs = () => {
  const [chooseData, setChooseData] = useState([
    {
      image: "/Images/cup.png",
      number: "3+",
      text: "years",
    },
    {
      image: "/Images/star.png",
      number: "98K",
      text: "Happy Clients",
    },
    {
      image: "/Images/cup.png",
      number: "235+",
      text: "Best Award",
    },
    {
      image: "/Images/star.png",
      number: "9K",
      text: "Visa Success",
    },
  ]);

  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Why Us</h1>
      <div className="w-11/12 flex flex-col gap-6 mx-auto">

        <div className="bg-white border rounded p-6  shadow-md">
          <h2 className="text-lg font-medium mb-4">Add Title Data </h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Subtitle"
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Description"
                className="p-2 border rounded w-full"
              />
              <input
                type="file"
                placeholder="Description"
                className="p-2 border rounded w-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 mt-4 py-2 bg-[#415FF2] text-white rounded-md">
              Add Title{" "}
            </button>
            <button className="px-4 flex items-center justify-center gap-2 mt-4 py-2 bg-yellow-400 text-white rounded-md">
              <IoPencil /> Edit
            </button>
          </div>
        </div>

        {/* Add/Edit Form */}
        <div className="bg-white border rounded p-6  shadow-md">
          <h2 className=" font-semibold mb-4">Add Data</h2>
          <div className="grid  gap-4">
            <div className="flex gap-4 items-center">
              <input type="file" className="p-2 border rounded w-full" />

              <input
                type="text"
                placeholder="Number (e.g., 3+)"
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Text (e.g., years)"
                className="p-2 border rounded w-full"
              />
            </div>
          </div>
          <button className="px-8 py-1 mt-4 bg-[#415FF2] text-white rounded">
            Save
          </button>
        </div>

        {/* Data Table */}
        <table className="w-full bg-white border rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Number</th>
              <th className="p-4 text-left">Text</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {chooseData.map((val, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <img
                    src={val.image}
                    alt="Icon"
                    className="h-16 w-16 object-contain"
                  />
                </td>
                <td className="p-4">{val.number}</td>
                <td className="p-4">{val.text}</td>
                <td className="p-4 flex items-center justify-center  gap-4">
                  <button
                    onClick={setEditIndex}
                    className="px-3 py-1 bg-yellow-400 text-white rounded flex items-center gap-2"
                  >
                    <IoPencil /> Edit
                  </button>
                  <button
                    onClick={setDeleteIndex}
                    className="px-3 py-1 bg-red-500 text-white rounded flex items-center gap-2"
                  >
                    <IoTrash /> Delete
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
                  <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* popup for edit button  */}
          {editIndex && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white px-12 py-8 rounded shadow-md max-w-sm w-full transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                <h2 className="font-medium text-lg mb-4">Edit Destination</h2>
                <div className="grid gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Number (e.g., 3+)"
                    className="p-2 border rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Text (e.g., years)"
                    className="p-2 border rounded w-full"
                  />
                  <input type="file" className="p-2 border rounded w-full" />
                </div>
                <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
                  Save Changes{" "}
                </button>
              </div>
            </div>
          )}
        </table>
      </div>
    </div>
  );
};

export default ManageChooseUs;
