import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const OurServices = () => {
  const [services, setServices] = useState([
    {
      title: "Visa Consultation and Guidance",
      description:
        "Navigating visa applications can be complex. Our team of visa experts will assist...",
      image: "https://via.placeholder.com/150",

      btntext: "Book a Consultation",
    },
    {
      title: "Test Preparation for IELTS, PTE, and TOEFL",
      description:
        "Get ready for success with our expert-led courses for language proficiency tests...",
      image: "https://via.placeholder.com/150",
      btntext: "Start Preparing Now",
    },
    {
      title: "Study Abroad Assistance",
      description:
"Plan your education in top countries worldwide with our tailored support. We provide personalized advice on university selection, course guidance, and application process management.",      image: "https://via.placeholder.com/150",

      btntext: "Book a Consultation",
    },
    {
      title: "Document Verification & Legalization",
      description:
      "Be fully prepared for your visa interview with mock sessions, interview tips, and one-on-one coaching to boost your confidence and increase your chances of approval.",
      image: "https://via.placeholder.com/150",
      btntext: "Start Preparing Now",
    },
  ]);

  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Our Services </h1>
      <div className="w-11/12 flex flex-col gap-6 mx-auto">
      

        {/* header section  */}
        <div className="bg-white border rounded p-6 shadow-md">
          <h2 className="font-semibold mb-4">Add Header Data</h2>
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

              <input type="file" className="p-2 border rounded w-full" />
            </div>
          </div>
          <button className="px-8 py-1 mt-4 bg-[#415FF2] text-white rounded">
            Save
          </button>
        </div>

        {/* Add/Edit Form */}
        <div className="bg-white border rounded p-6  shadow-md">
          <h2 className="font-semibold mb-4">Add Data</h2>
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
            <input
              type="text"
              placeholder="Button text"
              className="p-2 border rounded w-full"
            />
          </div>
          <button className="px-8 py-1 mt-4 bg-[#415FF2] text-white rounded">
            Save
          </button>
        </div>

        {/* Add/Edit Form */}
        <div className="bg-white border rounded p-6  shadow-md">
          <h2 className="font-semibold mb-4">Add Data Image</h2>
          <input type="file" className="p-2 border rounded w-full" />
          <button className="px-8 py-1 mt-4 bg-[#415FF2] text-white rounded">
            Save
          </button>
        </div>

        {/* Data Table */}
        <table className="w-full bg-white border rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Subtitle</th>
              <th className="p-4 text-left">ButtonText</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{service.title}</td>
                <td className="p-4">{service.description}</td>
                <td className="p-4">{service.btntext}</td>

                <td className="p-4 flex gap-4 justify-center">
                  <button
                    onClick={ setEditIndex}
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
        </table>

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
                  placeholder="Title"
                  className="p-2 border rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Subtitle"
                  className="p-2 border rounded w-full"
                />
                    <input
              type="text"
              placeholder="Button text"
              className="p-2 border rounded w-full"
            />
              </div>
              <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
                Save Changes{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
