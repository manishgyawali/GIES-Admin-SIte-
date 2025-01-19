import React, { useState } from "react";
import { IoTrash, IoPencil } from "react-icons/io5";

const Events = () => {
  const [events] = useState([
    {
      image: "/Images/event.png",
      title: "Choosing the Right Payment Solution for Your Business",
      date: "Sep 4, 2024",
      images: [
        "/Images/blogimg1.png",
        "/Images/blogimg2.png",
        "/Images/event.png",
      ],
      description:
        "Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.",
    },
    {
      image: "/Images/event.png",
      title: "Maximizing Your Business Efficiency",
      date: "Oct 12, 2024",
      images: ["/Images/event.png"],
      description:
        "Learn strategies to enhance productivity and manage resources efficiently.",
    },
    {
      image: "/Images/event.png",
      title: "Digital Transformation Strategies",
      date: "Nov 23, 2024",
      images: ["/Images/blogimg1.png", "/Images/blogimg2.png"],
      description:
        "Explore cutting-edge technologies and their role in driving business transformation.",
    },
  ]);

  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

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
        <h1 className="text-lg font-semibold text-[#172155]">Manage Events</h1>

        {/* Form to Add/Edit Event */}
        <div className="p-6 bg-white rounded-md flex flex-col gap-5 shadow-md">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="font-semibold mb-4">Add New Events</h2>
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
                type="date"
                name="date"
                placeholder="Event Date"
                className="p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="font-semibold mb-4">Add Events Data</h2>
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
              Add Events Data
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
              {events.map((event, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  {/* Cover Image */}
                  <td className="px-4 py-2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-16 h-16 rounded-md object-cover cursor-pointer"
                      onClick={() => handleImageClick(event.image)} // Open image modal
                    />
                  </td>
                  {/* Title */}
                  <td className="px-4 py-2">{event.title}</td>
                  {/* Date */}
                  <td className="px-4 py-2">{event.date}</td>
                  {/* Images */}
                  <td className="px-4 py-2">
                    <div className="grid gap-2">
                      {event.images.map((img, i) => (
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
                    onClick={() => handleDescriptionClick(event.description)} // Open description modal
                  >
                    {truncateDescription(event.description, 80)}
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

        {/* Image Modal */}
        {imageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white flex flex-col gap-6 p-8 rounded-3xl shadow-md relative">
              <button
                className="absolute top-2 right-2 px-4 py-2 rounded-lg bg-red-500 text-white  "
                onClick={closeModal} // Close modal
              >
                Close
              </button>
              <img
                src={imageModal}
                alt="Full Size"
                className="w-96 rounded-md"
              />
            </div>
          </div>
        )}

        {/* Description Modal */}
        {descriptionModal && (
          <div className="fixed inset-0  bg-black  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-6/12 mx-auto  flex flex-col gap-6 p-8 rounded-3xl shadow-md relative">
              <button
                className="absolute top-2 right-2 px-4 text-white py-2 rounded-lg bg-red-500 "
                onClick={closeModal} // Close modal
              >
                Close
              </button>
              <p className="text-black">{descriptionModal}</p>{" "}
              {/* Change this line */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
