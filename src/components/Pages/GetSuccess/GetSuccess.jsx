import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import JoditEditor from "jodit-react";

const GetSuccess = () => {
  const [editorContent, setEditorContent] = useState("");

  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  const getsucessData = [
    {
      image: "/Images/ssi4.png",
      title: "Get Success Together!",
      subtitle: "The Path to Success",
    },
  ];

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto "> Get Success</h1>
      <div className=" grid gap-4 bg-white border rounded w-11/12 mx-auto p-6  shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="file"
            className="border p-2 w-full rounded-md"
            placeholder="Enter Image URL"
          />

          <input
            type="text"
            className="border p-2 w-full rounded-md"
            placeholder="Enter Title"
          />

          <input
            type="text"
            className="border p-2 w-full rounded-md"
            placeholder="Enter Subtitle"
          />
        </div>

        <div className="">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg">
            Save
          </button>
        </div>
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
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Subtitle</th>
                <th className="p-4 text-center">Actions</th>
                <th className="p-4">Preview</th>
              </tr>
            </thead>
            <tbody>
              {getsucessData.map((val, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">
                    <img
                      src={val.image}
                      alt={val.title}
                      className="h-20 w-20 rounded object-cover"
                    />
                  </td>
                  <td className="p-4">{val.title}</td>
                  <td className="p-4">{val.subtitle}</td>

                  <td className="p-4 flex flex-col gap-4 justify-center">
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
            <h2 className="font-medium text-lg mb-6 ">Edit Data</h2>
            <div className="grid gap-4 mb-6">
              <input
                type="file"
                className="border p-2 w-full rounded-md"
                placeholder="Enter Image URL"
              />

              <input
                type="text"
                className="border p-2 w-full rounded-md"
                placeholder="Enter Title"
              />

              <input
                type="text"
                className="border p-2 w-full rounded-md"
                placeholder="Enter Subtitle"
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
          <div className="bg-white flex flex-col   p-6 rounded-lg w-[500px] transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
            <img
              src={getsucessData[previewIndex].image}
              alt={getsucessData[previewIndex].title}
              className="w-[250px] mb-4 rounded  object-cover"
            />

            <h2 className="text-xl font-semibold mb-3">
              {getsucessData[previewIndex].title}
            </h2>
            <h2 className="text-xl font-semibold mb-3">
              {getsucessData[previewIndex].subtitle}
            </h2>

            <h2 className="  mb-3">{getsucessData[previewIndex].btntext}</h2>
            <button
              onClick={() => setPreviewIndex(null)} // Close modal
              className=" px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetSuccess;
