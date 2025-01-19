import React, { useState } from "react";
import { IoTrash, IoPencil } from "react-icons/io5";

const AdminTestimonials = () => {
  const [testimonials] = useState([
    {
      image: "/Images/blogimg.png",
      title: "How to Craft The Perfect Web Design and Developer",
      description:
        "When an unknown printer took a galley of type and scrambled it.",
      date: "01 Aug, 2025",
    },
    {
      image: "/Images/blogimg.png",
      title: "The Future of Digital Marketing",
      description:
        "Discover the latest trends in digital marketing and how to stay ahead.",
      date: "15 Sep, 2025",
    },
    {
      image: "/Images/blogimg.png",
      title: "Mastering UX Design",
      description:
        "Learn how to create seamless user experiences for web and mobile.",
      date: "22 Oct, 2025",
    },
  ]);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  return (
    <div className="p-8 bg-[#F9FAFB] rounded-2xl min-h-screen">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <h1 className="text-xl font-semibold text-[#172155]">
          Manage Articles
        </h1>

        {/* Form to Add/Edit Testimonial */}
        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">Add New Articles</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="p-2 border rounded-md"
            />
            <textarea
              name="description"
              placeholder="Description"
              className="p-2 border rounded-md"
              rows={3}
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="p-2 border rounded-md"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
            Add Articles
          </button>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-md shadow-md flex flex-col gap-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.title}
                className="rounded-md"
                width={300}
                height={200}
              />
              <h3 className="text-lg font-semibold text-[#172155]">
                {testimonial.title}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.description}</p>
              <p className="text-sm text-gray-400">{testimonial.date}</p>
              <div className="flex gap-4">
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
              </div>
            </div>
          ))}
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
              <h2 className="font-medium text-lg mb-4">Edit Articles</h2>
              <div className="grid gap-4 mb-4">
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="p-2 border rounded-md"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  className="p-2 border rounded-md"
                  rows={3}
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
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

export default AdminTestimonials;
