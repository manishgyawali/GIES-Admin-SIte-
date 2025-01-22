import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { IoPencil, IoTrash } from "react-icons/io5";

const AboutUs = () => {
  const aboutusData = [
    {
      icon: "/Images/compensation.png",
      title: "Compensation Consulting",
      description:
        "Compensation Consulting are always help for a companies marketing, customer growths.",
    },
    {
      icon: "/Images/leadership.png",
      title: "Leadership Training",
      description:
        "The Leadership Training are always help for a companies marketing, customer growths.",
    },
    {
      icon: "/Images/corporate.png",
      title: "Corporate Programs",
      description:
        "The Corporated Programs are always help for a companies marketing, customer growths.",
    },
  ];

  const [editorContent, setEditorContent] = useState("");
  const [previewIndex, setPreviewIndex] = useState(null); // For managing the preview modal

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto">About Us</h1>

      <div className="bg-white border rounded w-11/12 mx-auto p-6 shadow-md">
        <h2 className="text-lg font-medium mb-4">Add Data</h2>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="file" className="p-2 border rounded w-full" />
            <input
              type="text"
              placeholder="Title"
              className="p-2 border rounded w-full"
            />
            <JoditEditor
              value={editorContent}
              onChange={(newContent) => setEditorContent(newContent)}
            />
          </div>
        </div>
        <button className="px-4 mt-4 py-2 bg-[#415FF2] text-white rounded-md">
          Add
        </button>
      </div>

      <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
        <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">
          Manage Data
        </h2>
        <div className="md:w-11/12 mx-auto">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Icon</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-center">Actions</th>
                <th className="p-4 text-center">Preview</th>

              </tr>
            </thead>
            <tbody>
              {aboutusData.map((val, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">
                    <img
                      src={val.icon}
                      alt={val.title}
                      className="h-10 w-10 rounded"
                    />
                  </td>
                  <td className="p-4">{val.title}</td>
                  <td className="p-4">{val.description}</td>

                  <td className="p-4 md:grid grid items-center justify-center gap-4">
                   
                    <button
                      onClick={() => console.log("Edit", index)}
                      className="px-4 py-1 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      <IoPencil />
                      Edit
                    </button>
                    <button
                      onClick={() => console.log("Delete", index)}
                      className="px-4 py-1 bg-red-500 text-white rounded-md flex items-center gap-2"
                    >
                      <IoTrash />
                      Delete
                    </button>
                  </td>
                  <td className="p-4"> <button
                      onClick={() => setPreviewIndex(index)} // Open modal
                      className="px-4 py-1 bg-blue-500 text-white rounded-md"
                    >
                      Preview
                    </button></td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Preview Modal */}
      {previewIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {aboutusData[previewIndex].title}
            </h2>
            <img
              src={aboutusData[previewIndex].icon}
              alt={aboutusData[previewIndex].title}
              className="h-24 w-24 mb-4 rounded mx-auto"
            />
            <p className="text-sm text-gray-700">
              {aboutusData[previewIndex].description}
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

export default AboutUs;
