import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const Banner = () => {
  const bannerData = [
    {
      title: "Your Global Education Partner for Visa Success",
      subtitle:
        "Guiding you through every step of the process—student visas, test preparation, and beyond",
      image: "/Images/Frame 38.png",
    },
  ];

  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10  flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl w-11/12 mx-auto font-semibold ">Banner</h1>

      <div className=" w-11/12 mx-auto bg-white border rounded p-6 shadow-md">
        <h2 className="font-medium text-lg mb-4">Add New Banner</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <input
            type="text"
            name="title"
            placeholder="Banner Title"
            className="p-2 border text-sm rounded w-full"
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Banner Subtitle"
            className="p-2 border text-sm rounded w-full"
          />
          <input
            type="file"
            name="image"
            placeholder="Image URL"
            className="p-2 border text-sm rounded w-full"
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
          Add Banner
        </button>
      </div>

      {/* Manage Banners */}
      <div className="bg-white w-11/12 mx-auto flex flex-col gap-5 border rounded py-6  shadow-md">
        <div className="flex items-center justify-between w-11/12 mx-auto">
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
        <div className=" md:w-11/12 mx-auto">
          <table className="w-full bg-white rounded shadow ">
            <thead>
              <tr className="bg-gray-200 font-semibold">
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Subtitle</th>
                <th className="p-4 text-center">Actions</th>
                <th className="p-4 text-center">Preview</th>
              </tr>
            </thead>
            <tbody>
              {bannerData.map((banner, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="h-20 w-20 rounded object-cover"
                    />
                  </td>
                  <td className="p-4">{banner.title}</td>
                  <td className="p-4">{banner.subtitle}</td>
                  <td className="p-4 grid gap-4 ">
                    <button
                      onClick={setEditIndex}
                      className="px-4 py-1 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      <IoPencil />
                      Edit
                    </button>
                    <button
                      onClick={setDeleteIndex}
                      className="px-4 py-1 bg-red-500 text-white rounded-md flex items-center gap-2"
                    >
                      <IoTrash />
                      Delete
                    </button>
                  </td>
                  <td className="p-4">
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
          </table>
        </div>
      </div>

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
                name="image"
                placeholder="Image URL"
                className="p-2 border text-sm rounded w-full"
              />
              <input
                type="text"
                name="title"
                placeholder="Banner Title"
                className="p-2 border text-sm rounded w-full"
              />
              <input
                type="text"
                name="subtitle"
                placeholder="Banner Subtitle"
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
          <div className="bg-white p-6 rounded-lg w-[500px] transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
            <img
              src={bannerData[previewIndex].image}
              alt={bannerData[previewIndex].title}
              className="w-[200px] mb-4 rounded "
            />
            <h2 className="text-xl font-bold mb-4">
              {bannerData[previewIndex].title}
            </h2>
            <p className="text-sm text-gray-700">
              {bannerData[previewIndex].subtitle}
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
    </div>
  );
};

export default Banner;
