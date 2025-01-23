import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import JoditEditor from "jodit-react";

const OurServices = () => {
  const servicesData = [
    {
      title: "Visa Consultation and Guidance",
      description:
        "Navigating visa applications can be complex. Our team of visa experts will assist you with country-specific advice, documentation preparation, and application tracking to ensure a smooth process for student, work, and visit visas.",

      btntext: "Book a Consultation",
    },
    {
      title: "Test Preparation for IELTS, PTE, and TOEFL",
      description:
        "Get ready for success with our expert-led courses for language proficiency tests like IELTS, PTE, and TOEFL. We offer flexible schedules, practice tests, and personalized feedback to ensure you’re fully prepared.",
      btntext: "Start Preparing Now",
    },
    {
      title: "Study Abroad Assistance",
      description:
        "Plan your education in top countries worldwide with our tailored support. We provide personalized advice on university selection, course guidance, and application process management.",
      btntext: "Book a Consultation",
    },
    {
      title: "Document Verification & Legalization",
      description:
        "Be fully prepared for your visa interview with mock sessions, interview tips, and one-on-one coaching to boost your confidence and increase your chances of approval.",
      btntext: "Start Preparing Now",
    },
  ];
  const [editorContent, setEditorContent] = useState("");

  const truncateDescription = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  
  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Our Services </h1>
      <div className="w-11/12 flex flex-col gap-6 mx-auto">
        {/* Add/Edit Form */}
        <div className="bg-white border rounded p-6  shadow-md">
          <h2 className="font-semibold text-lg mb-4">Add Data</h2>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Title"
              className="p-2 border rounded w-full"
            />
            <JoditEditor
              value={editorContent}
              onChange={(newContent) => setEditorContent(newContent)}
            />

            <input
              type="text"
              placeholder="Button text"
              className="p-2 border rounded w-full"
            />
          </div>
          <button className="px-8 py-1 mt-4 bg-[#415FF2] text-white rounded">
            Add
          </button>
        </div>

        {/* Add/Edit Form */}
        <div className="bg-white border rounded p-6  shadow-md">
          <h2 className="font-semibold text-lg mb-4">Add Data Image</h2>
          <input type="file" className="p-2 border rounded w-full" />
          <button className="px-8 py-1 mt-4 bg-[#415FF2] text-white rounded">
            Add
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white  border rounded py-6  shadow-md">
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
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Subtitle</th>
                  <th className="p-4 text-left">ButtonText</th>
                  <th className="p-4 text-center">Actions</th>
                  <th className="p-4">Preview</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{service.title}</td>
                    <td
                      className="px-4 py-2"
                    >
                      {truncateDescription(service.description, 80)}
                    </td>{" "}
                    <td className="p-4">{service.btntext}</td>
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
            <div className="bg-white flex flex-col  gap-4  p-6 rounded-lg w-96 transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
              <h2 className="text-xl font-semibold mb-3">
                {servicesData[previewIndex].title}
              </h2>
              <p className="text-sm text-gray-700">
                {servicesData[previewIndex].description}
              </p>
              <h2 className="  mb-3">{servicesData[previewIndex].btntext}</h2>
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
    </div>
  );
};

export default OurServices;
