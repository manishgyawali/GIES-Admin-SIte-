import React, { useState } from "react";
import { IoTrash, IoPencil } from "react-icons/io5";

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

  const [deleteIndex, setDeleteIndex] = useState(null); // Use null instead of false
  const [editIndex, setEditIndex] = useState(null); // Use null instead of false

  const [selectedImages, setSelectedImages] = useState([]);

  const [imageModal, setImageModal] = useState(null); // State for image modal
  const [descriptionModal, setDescriptionModal] = useState(null); // State for description modal

  // Open image modal
  const handleImageClick = (image) => {
    setImageModal(image);
  };

  // Open description modal
  const handleDescriptionClick = (description) => {
    setDescriptionModal(description);
  };

  // Close both modals
  const closeModal = () => {
    setImageModal(null);
    setDescriptionModal(null);
  };

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
        <h1 className="text-lg font-semibold text-[#172155]">Manage Articles</h1>

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
              <textarea
                type="text"
                name="title"
                placeholder="Description"
                className="p-2 border rounded-md"
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
                  <td className="px-4 py-2 text-center flex flex-col justify-center gap-2">
                    <button
                      onClick={() => setEditIndex(index)} // Set the index for edit
                      className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      <IoPencil /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteIndex(index)} // Set the index for delete
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

        {/* Image Modal */}
        {imageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white flex flex-col gap-6 p-8 rounded-3xl shadow-md relative">
              <button
                className="absolute top-2 right-2 px-4 py-2 rounded-lg bg-red-500 text-white"
                onClick={closeModal} // Close modal
              >
                Close
              </button>
              <img src={imageModal} alt="Full Size" className="w-96 rounded-md" />
            </div>
          </div>
        )}

        {/* Description Modal */}
        {descriptionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-6/12 mx-auto flex flex-col gap-6 p-8 rounded-3xl shadow-md relative">
              <button
                className="absolute top-2 right-2 px-4 text-white py-2 rounded-lg bg-red-500"
                onClick={closeModal} // Close modal
              >
                Close
              </button>
              <p className="text-black">{descriptionModal}</p>
            </div>
          </div>
        )}

        {/* Delete Confirmation Popup */}
        {deleteIndex !== null && (
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
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                  onClick={() => setDeleteIndex(null)} // Close popup
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Popup */}
        {editIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white px-12 py-8 rounded shadow-md max-w-sm w-full transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
              <h2 className="font-medium text-lg mb-4">Edit Events</h2>
              <div className="grid gap-4 mb-4">
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
              </div>
              <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTestimonials;
