import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import JoditEditor from "jodit-react";

const AdminTestimonials = () => {
  const articlesData = [
    {
      image: "/Images/blogimg.png",
      title: "How to Craft The Perfect Web Design and Developer",
      date: "01 Aug, 2025",
      images: [
        "/Images/blogimg1.png",
        "/Images/blogimg2.png",
        "/Images/event.png",
      ],
      description:
        "When an unknown printer took a galley of type and scrambled it.",
    },
    {
      image: "/Images/blogimg.png",
      title: "The Future of Digital Marketing",
      date: "15 Sep, 2025",
      images: ["/Images/event.png"],
      description:
        "Discover the latest trends in digital marketing and how to stay ahead.",
    },
    {
      image: "/Images/blogimg.png",
      title: "Mastering UX Design",
      date: "22 Oct, 2025",
      images: ["/Images/blogimg1.png", "/Images/blogimg2.png"],
      description:
        "Learn how to create seamless user experiences for web and mobile.",
    },
  ];
  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const [selectedImages, setSelectedImages] = useState([]);

  // Utility function to truncate description
  const truncateDescription = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...fileURLs]);
  };

  return (
    <div className="p-8 bg-[#F9FAFB] rounded-2xl min-h-screen">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-[#172155]"> Articles</h1>

        {/* Form to Add/Edit Event */}
        <div className="p-6 bg-white rounded-md flex flex-col gap-5 shadow-md">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="font-semibold mb-4">Add New Articles</h2>
            <div className="flex flex-col gap-4">
              <input
                type="file"
                name="image"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="title"
                placeholder="Subtitle"
                className="p-2 border rounded-md"
              />
              <input
                type="date"
                name="date"
                placeholder="Event Date"
                className="p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="font-semibold mb-4">Add Articles Data</h2>
            <div className="flex flex-col gap-4">
              <input
                type="file"
                name="image"
                className="p-2 border rounded-md"
                multiple
                onChange={handleImageChange}
              />
              <JoditEditor
                value={editorContent}
                onChange={(newContent) => setEditorContent(newContent)}
              />
            </div>
            <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
              Add Articles
            </button>
          </div>
        </div>

        {/* Preview Selected Images */}
        {selectedImages.length > 0 && (
          <div className="flex gap-4 mt-4">
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Selected ${index}`}
                className="w-32 h-32 object-cover rounded-md cursor-pointer"
                onClick={() => handleImageClick(image)} // Open image modal
              />
            ))}
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-md p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="px-4 py-2">Cover Image</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Images</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2 text-center">Actions</th>
                <th className="px-4 py-2 text-center">Preview</th>
              </tr>
            </thead>
            <tbody>
              {articlesData.map((val, index) => (
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
                      onClick={() => handleImageClick(val.image)} // Open image modal
                    />
                  </td>
                  {/* Title */}
                  <td className="px-4 py-2">{val.title}</td>
                  {/* Date */}
                  <td className="px-4 py-2">{val.date}</td>
                  {/* Images */}
                  <td className="px-4 py-2">
                    <div className="grid gap-2">
                      {val.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Event ${index} Image ${i + 1}`}
                          className="w-12 h-12 rounded-md object-cover cursor-pointer"
                          onClick={() => handleImageClick(img)} // Open image modal
                        />
                      ))}
                    </div>
                  </td>
                  {/* Truncated Description */}
                  <td
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleDescriptionClick(val.description)} // Open description modal
                  >
                    {truncateDescription(val.description, 80)}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-2 text-center flex flex-col  justify-center gap-2">
                    <button
                      onClick={setEditIndex}
                      className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      <IoPencil /> Edit
                    </button>
                    <button
                      onClick={setDeleteIndex}
                      className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2"
                    >
                      <IoTrash /> Delete
                    </button>
                  </td>
                  <td className="p-4 ">
                    <button
                      onClick={() => setPreviewIndex(index)}
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
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  className="p-2 border rounded-md"
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Event Date"
                  className="p-2 border rounded-md"
                />
                <input
                  type="file"
                  name="image"
                  className="p-2 border rounded-md"
                  multiple
                  onChange={handleImageChange}
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
            <div className="bg-white flex flex-col p-6 rounded-lg w-[500px] transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
              {/* Main Cover Image */}
              <img
                src={articlesData[previewIndex].image}
                alt={articlesData[previewIndex].title}
                className="h-24 w-24 mb-4 rounded object-cover"
              />

              {/* Event Title */}
              <h2 className="text-xl font-semibold mb-3">
                {articlesData[previewIndex].title}
              </h2>

              {/* Event Date */}
              <h2 className="  mb-3">
                {articlesData[previewIndex].date}
              </h2>

              {/* Additional Images */}
              <div className="flex gap-2 flex-wrap">
                {articlesData[previewIndex].images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Event ${idx + 1}`}
                    className="h-24 w-24 mb-4 rounded object-cover"
                  />
                ))}
              </div>

              {/* Event Description */}
              <h2 className="mb-3">{articlesData[previewIndex].description}</h2>

              {/* Close Button */}
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

export default AdminTestimonials;
