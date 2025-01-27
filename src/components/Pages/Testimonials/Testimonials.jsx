import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import JoditEditor from "jodit-react";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Artemisia Udinese",
      title: "Marketing Specialist",
      text: "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionized the way we operate.",
      image: "/Images/pp2.png",
    },
    {
      id: 2,
      name: "Lorenzo Rossi",
      title: "Product Manager",
      text: "The tools provided by WDK AI ToolKit have increased our team’s productivity tenfold.",
      image: "/Images/pp3.png",
    },
    {
      id: 3,
      name: "Sophia Lorenzo",
      title: "Software Engineer",
      text: "Using WDK AI ToolKit has made development processes seamless and efficient.",
      image: "/Images/pp2.png",
    },
    {
      id: 4,
      name: "Marco Bianchi",
      title: "Business Analyst",
      text: "WDK AI ToolKit is a game changer in our analytics workflow, saving us hours of work.",
      image: "/Images/pp3.png",
    },
    {
      id: 5,
      name: "Artemisia Udinese",
      title: "Marketing Specialist",
      text: "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionized the way we operate.",
      image: "/Images/pp2.png",
    },
    {
      id: 6,
      name: "Lorenzo Rossi",
      title: "Product Manager",
      text: "The tools provided by WDK AI ToolKit have increased our team’s productivity tenfold.",
      image: "/Images/pp3.png",
    },
    {
      id: 7,
      name: "Sophia Lorenzo",
      title: "Software Engineer",
      text: "Using WDK AI ToolKit has made development processes seamless and efficient.",
      image: "/Images/pp2.png",
    },
    {
      id: 8,
      name: "Marco Bianchi",
      title: "Business Analyst",
      text: "WDK AI ToolKit is a game changer in our analytics workflow, saving us hours of work.",
      image: "/Images/pp3.png",
    },
    {
      id: 9,
      name: "Artemisia Udinese",
      title: "Marketing Specialist",
      text: "As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionized the way we operate.",
      image: "/Images/pp2.png",
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
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Testimonial</h1>{" "}
      <div className=" w-11/12 mx-auto bg-white border rounded p-6  shadow-md ">
        <h2 className="font-medium text-lg mb-4">Add New Testimonial</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="file"
            name="image"
            className="p-2 border text-sm rounded w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 border text-sm rounded w-full"
          />{" "}
          <input
            type="text"
            name="name"
            placeholder="Position"
            className="p-2 border text-sm rounded w-full"
          />
        </div>
        <div className="grid gap-4">
          <JoditEditor
            value={editorContent}
            onChange={(newContent) => setEditorContent(newContent)}
          />
          <input
            type="text"
            name="name"
            placeholder="Bottom Paragraph"
            className="p-2 border text-sm rounded w-full"
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
          Add Testimonial
        </button>
      </div>
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
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Position</th>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Comment</th>
                <th className="p-4 text-center">Actions</th>
                <th className="p-4 text-center">Preview</th>
              </tr>
            </thead>
            <tbody>
              {testimonialData.map((val, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{val.name}</td>
                  <td className="p-4">{val.title}</td>
                  <td className="p-4">
                    <img
                      src={val.image}
                      alt={val.name}
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="p-4">{val.text}</td>
                  <td className="p-4 md:grid grid items-center justify-center gap-4">
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
                      placeholder="Enter name"
                    />

                    <input
                      type="text"
                      className="border p-2 w-full rounded-md"
                      placeholder="Enter Position"
                    />
                    <input
                      type="text"
                      className="border p-2 w-full rounded-md"
                      placeholder="Comment"
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
                <div className="bg-white flex flex-col  gap-2  p-6 rounded-lg w-96 transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                  <img
                    src={testimonialData[previewIndex].image}
                    alt={testimonialData[previewIndex].title}
                    className="h-24 w-24  rounded  object-cover"
                  />
                  <h2 className="text-xl font-semibold ">
                    {testimonialData[previewIndex].name}
                  </h2>
                  <h2 className=" ">
                    {testimonialData[previewIndex].title}
                  </h2>

                  <p className="text-sm text-gray-700">
                    {testimonialData[previewIndex].text}
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
  );
};

export default Testimonials;
