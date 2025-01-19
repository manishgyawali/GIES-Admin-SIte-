import React, { useState } from "react";
import { IoTrash, IoPencil } from "react-icons/io5";

const Events = () => {
  const [events] = useState([
    {
      image: "/Images/event.png",
      title: "Choosing the Right Payment Solution for Your Business",
      date: "Sep 4, 2024",
      images: ["/Images/blogimg1.png", "/Images/blogimg2.png", "/Images/event.png"],
      description:
        "Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.",
    },
    {
      image: "/Images/event.png",
      title: "Maximizing Your Business Efficiency",
      date: "Oct 12, 2024",
      images: ["/Images/event.png"],
      description: "Learn strategies to enhance productivity and manage resources efficiently.",
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
            <h2 className=" font-semibold mb-4">Add New Events</h2>
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
            <h2 className=" font-semibold mb-4">Add Events Data</h2>
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
                className="w-32 h-32 object-cover rounded-md"
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
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </td>
                {/* Title */}
                <td className="px-4 py-2">{event.title}</td>
                {/* Date */}
                <td className="px-4 py-2">{event.date}</td>
                {/* Images */}
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    {event.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Event ${index} Image ${i + 1}`}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                    ))}
                  </div>
                </td>
                {/* Truncated Description */}
                <td className="px-4 py-2">
                  {truncateDescription(event.description, 100)}
                </td>
                {/* Actions */}
                <td className="px-4 py-2 text-center flex justify-center gap-2">
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
              <h2 className="font-medium text-lg mb-4">Edit Events</h2>
              <div className="grid gap-4 mb-4">
                <input
                  type="file"
                  name="image"
                  className="p-2 border rounded-md"
                  multiple
                  onChange={handleImageChange}
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
                Save Changes{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
