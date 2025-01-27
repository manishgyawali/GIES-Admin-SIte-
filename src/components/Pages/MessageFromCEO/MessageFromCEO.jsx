import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import JoditEditor from "jodit-react";

const MessageFromCEO = () => {
  const messageData = [
    {
      title: "Message",
      subtitle: "Message From CEO",
      image: "/Images/message.png",
      icon: "/Images/messageicon.png",
      description:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Message",
      subtitle: "Message From CEO",
      image: "/Images/message.png",
      icon: "/Images/messageicon.png",
      description:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  const [editorContent, setEditorContent] = useState("");

  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...fileURLs]);
  };

  const truncateDescription = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div className="p-6 bg-white rounded-md shadow-md flex flex-col gap-5">
      <h2 className="font-semibold text-xl">Message From CEO</h2>

      {/* Add Data Section */}
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="font-semibold mb-4">Add Data</h2>
        <div className="flex flex-col gap-4">
          <input
            type="file"
            name="image"
            multiple
            className="p-2 border rounded-md"
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Title"
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Subtitle"
            className="p-2 border rounded-md"
          />
          <JoditEditor
            value={editorContent}
            onChange={(newContent) => setEditorContent(newContent)}
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
          Add Data
        </button>
      </div>

      {/* Table */}
      <div className="bg-white   border rounded py-6  shadow-md">
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
        </div>{" "}
        <div className="w-11/12 mx-auto">
          <table className=" bg-white border rounded shadow">
            <thead className="bg-gray-200">
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Icon</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Subtitle</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2 text-center">Actions</th>
                <th className="px-4 py-2 text-center">Preview</th>
              </tr>
            </thead>
            <tbody>
              {messageData.map((val, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  {/* Cover Image */}
                  <td className="px-4 py-2">
                    <img
                      src={val.image}
                      alt={val.title}
                      className="w-16 h-16 rounded-md object-cover cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={val.icon}
                      alt={val.title}
                      className="w-10 h-10 rounded-md object-cover cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-2">{val.title}</td>

                  <td className="px-4 py-2">{val.subtitle}</td>

                  {/* Truncated Description */}
                  <td
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleDescriptionClick(val.description)}
                  >
                    {truncateDescription(val.description, 80)}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-2 text-center flex flex-col justify-center gap-2">
                    <button
                      onClick={() => setEditIndex(index)}
                      className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      <IoPencil /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteIndex(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2"
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
                    multiple
                    className="p-2 border rounded-md"
                    onChange={handleImageChange}
                  />
                  <input
                    type="text"
                    name="image"
                    placeholder="Title"
                    className="p-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Subtitle"
                    className="p-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="p-2 border rounded-md"
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
              <div className="bg-white flex flex-col gap-2  p-6 rounded-lg w-[500px] transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                <img
                  src={messageData[previewIndex].image}
                  alt={messageData[previewIndex].title}
                  className="h-24 w-24  rounded  object-cover"
                />
                <img
                  src={messageData[previewIndex].icon}
                  alt={messageData[previewIndex].title}
                  className="h-16 w-16  rounded  object-cover"
                />

                <h2 className="text-xl font-semibold ">
                  {messageData[previewIndex].title}
                </h2>
                <h2 className=" ">{messageData[previewIndex].subtitle}</h2>
                <p className=" ">{messageData[previewIndex].description}</p>

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
    </div>
  );
};

export default MessageFromCEO;
