import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { IoTrash, IoPencil } from "react-icons/io5";

const MessageFromCEO = () => {
  const messageData = [
    {
        title: "Message",
        subtitle:"Message From CEO",
        image:"/Images/message.png",
        icon:"/Images/messageicon.png",
        description:"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        title: "Message",
        subtitle:"Message From CEO",
        image:"/Images/message.png",
        icon:"/Images/messageicon.png",
        description:"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
  ]
  const [editorContent, setEditorContent] = useState("");

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
            name="image"
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
      <div className="overflow-x-auto bg-white shadow-md rounded-md p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Icon</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Subtitle</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2 text-center">Actions</th>
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
                  onClick={() => handleDescriptionClick(val.description)} // Open description modal
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageFromCEO;
