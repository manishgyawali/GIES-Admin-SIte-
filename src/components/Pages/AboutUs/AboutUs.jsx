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
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

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
                      onClick={() => setEditIndex(index)}
                      className="px-4 py-1 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      <IoPencil />
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteIndex(index)}
                      className="px-4 py-1 bg-red-500 text-white rounded-md flex items-center gap-2"
                    >
                      <IoTrash />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
