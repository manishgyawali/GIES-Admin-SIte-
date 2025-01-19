import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const Destinations = () => {
  const [countryData] = useState([
    { name: "Australia", image: "/Images/australia.png" },
    { name: "Canada", image: "/Images/canada.png" },
    { name: "Germany", image: "/Images/germany.png" },
    { name: "Denmark", image: "/Images/denmark.png" },
    { name: "UK", image: "/Images/uk.png" },
    { name: "Japan", image: "/Images/japan.png" },
    { name: "Korea", image: "/Images/korea.png" },
    { name: "US", image: "/Images/us.png" },
  ]);

  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
        <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Destination</h1>
      {/* Add/Edit Form */}
      <div className="bg-white border rounded w-11/12 mx-auto p-6  shadow-md">
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
          </div>
        </div>
        <button className="px-4 mt-4 py-2 bg-[#415FF2] text-white rounded-md">
          Add Title{" "}
        </button>
      </div>
      <div className=" ">
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
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">
            Manage Destinations
          </h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4 text-left">Country</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {countryData.map((country, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{country.name}</td>
                    <td className="p-4">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="h-12 w-12 rounded"
                      />
                    </td>
                    <td className="p-4 md:flex grid items-center justify-center gap-4">
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
                    <h2 className="font-medium text-lg mb-4">
                      Edit Destination
                    </h2>
                    <div className="grid gap-4 mb-4">
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
                      Save Changes{" "}
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
