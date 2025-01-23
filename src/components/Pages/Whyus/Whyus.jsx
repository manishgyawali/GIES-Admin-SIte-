import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const WhyUs = () => {
  const whyusData = [
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
  ];

  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto">Why Us</h1>
      <div className=" flex flex-col gap-6 ">
        {/* Add/Edit Form */}
        <div className=" w-11/12 mx-auto bg-white border rounded p-6  shadow-md ">
          <h2 className="font-medium text-lg mb-4">Add Data</h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input type="file" className="p-2 border rounded w-full" />
            <input
              type="text"
              placeholder="Number (e.g., 3+)"
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Text"
              className="p-2 border rounded w-full"
            />
          </div>
          <button className="mt-4 px-6 py-2 bg-[#415FF2] text-white rounded-md">
            Add
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white w-11/12 mx-auto border rounded py-6  shadow-md">
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
            <table className="w-full bg-white border rounded shadow">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Number</th>
                  <th className="p-4 text-left">Text</th>
                  <th className="p-4 text-center">Actions</th>
                  <th className="p-4 ">Preview</th>
                </tr>
              </thead>
              <tbody>
                {whyusData.map((val, index) => (
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
                    <td className="p-4 grid  items-center justify-center  gap-4">
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
                    <td className="p-4 text-center ">
                      {" "}
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
                    <h2 className="font-medium text-lg mb-6 ">
                      Edit Data
                    </h2>
                    <div className="grid gap-4 mb-6">
                      <input
                        type="file"
                        className="p-2 border rounded w-full"
                      />
                      <input
                        type="text"
                        placeholder="Number (e.g., 3+)"
                        className="p-2 border rounded w-full"
                      />
                      <input
                        type="text"
                        placeholder="Text"
                        className="p-2 border rounded w-full"
                      />
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
                  <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg w-96 transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                    <img
                      src={whyusData[previewIndex].image}
                      alt={whyusData[previewIndex].title}
                      className="h-24 w-24 mb-4 rounded  object-cover"
                    />
                    <h2 className="text-xl font-bold mb-3">
                      {whyusData[previewIndex].number}
                    </h2>
                    <p className="text-sm text-gray-700">
                      {whyusData[previewIndex].text}
                    </p>
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
    </div>
  );
};

export default WhyUs;
