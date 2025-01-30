import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const Destinations = () => {
  const countryData = [
    { name: "Australia", image: "/Images/australia.png" },
    { name: "Canada", image: "/Images/canada.png" },
    { name: "Germany", image: "/Images/germany.png" },
    { name: "Denmark", image: "/Images/denmark.png" },
    { name: "UK", image: "/Images/uk.png" },
    { name: "Japan", image: "/Images/japan.png" },
    { name: "Korea", image: "/Images/korea.png" },
    { name: "US", image: "/Images/us.png" },
  ];

  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto">Destinations</h1>
      <div className="flex flex-col gap-8 ">
        <div className=" w-11/12 mx-auto bg-white border rounded p-6  shadow-md ">
          <h2 className="font-medium text-lg mb-4">Add New Destination</h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Country Name"
              className="p-2 border text-sm rounded w-full"
            />
            <input
              type="file"
              name="image"
              className="p-2 border text-sm rounded w-full"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
            Add destinations
          </button>
        </div>

        {/* Destinations Table */}
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
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Country</th>
                  <th className="p-4 text-center">Actions</th>
                  <th className="p-4 text-center">Preview</th>
                </tr>
              </thead>
              <tbody>
                {countryData.map((country, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="h-12 w-12 rounded"
                      />
                    </td>
                    <td className="p-4">{country.name}</td>

                    <td className="p-4  grid items-center justify-center gap-4">
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
                    <td className="p-4 text-center">
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
                    <h2 className="font-medium text-lg mb-6 ">Edit Data</h2>
                    <div className="grid gap-4 mb-6">
                      <input
                        type="file"
                        name="image"
                        className="p-2 border text-sm rounded w-full"
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Country Name"
                        className="p-2 border text-sm rounded w-full"
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
                  <div className="bg-white   w-[500px]  p-6 rounded-lg  transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                    <img
                      src={countryData[previewIndex].image}
                      alt={countryData[previewIndex].title}
                      className=" mb-4 rounded w-[200px]"
                    />
                    <h2 className="text-xl font-bold ">
                      {countryData[previewIndex].name}
                    </h2>

                    <button
                      onClick={() => setPreviewIndex(null)} // Close modal
                      className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md"
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

export default Destinations;
