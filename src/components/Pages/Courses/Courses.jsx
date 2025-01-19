import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const Courses = () => {
  const courses = [
    {
      name: "IELTS Preparation",
      description:
        "Master IELTS with expert-led classes, mock tests, and personalized feedback.",
      image: "/Images/ielts.png",
    },
    {
      name: "PTE Preparation",
      description:
        "Master PTE with expert-led classes, mock tests, and personalized feedback.",
      image: "/Images/pte.png",
    },
    {
      name: "SAT Preparation",
      description:
        "Master SAT with expert-led classes, mock tests, and personalized feedback.",
      image: "/Images/sat.png",
    },
    {
      name: "TOEFL Preparation",
      description:
        "Master TOEFL with expert-led classes, mock tests, and personalized feedback.",
      image: "/Images/toefl.png",
    },
    {
      name: "CMAT Preparation",
      description:
        "Master CMAT with expert-led classes, mock tests, and personalized feedback.",
      image: "/Images/cmat.png",
    },
  ];
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-semibold ">Our Courses</h1>

        {/* search section  */}
        <div className="relative flex justify-center flex-col items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="w-40 p-3 pl-10 text-sm rounded-full bg-[#415FF2] text-white placeholder-white outline-none"
          />
          <RiSearchLine className="h-4 w-4 absolute  left-4 text-white" />
        </div>
      </div>{" "}


      <div className="bg-white w-11/12 mx-auto border rounded p-6  shadow-md">
          <h2 className="text-lg font-medium mb-4">Add Title Data </h2>
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
            </div>
          </div>
          <button className="px-4 mt-4 py-2 bg-[#415FF2] text-white rounded-md">
            Add Title{" "}
          </button>
        </div>


      {/* Add/Edit Form */}
      <div className=" bg-white flex flex-col gap-4 border rounded w-11/12 mx-auto p-6  shadow-md ">
        <h2 className="text-lg font-medium mb-4">Add New Course </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            className="p-2 border text-sm rounded w-full"
          />
          <input
            type="file"
            accept="image/*"
            className="p-2 border text-sm rounded w-full"
          />
          <textarea
            name="description"
            placeholder="Course Description"
            className="p-2 border text-sm rounded w-full sm:col-span-2"
          ></textarea>
        </div>
        <div>
          <button className="px-4 py-2 bg-[#415FF2] text-white rounded-md">
            Add Course{" "}
          </button>
        </div>
      </div>


      {/* Courses Table */}
      <div className="bg-white flex flex-col gap-4 border rounded w-11/12 mx-auto p-6  shadow-md">
        <div className="flex items-center  justify-between">
          <h2 className="text-lg font-medium ">Manage Courses</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img
                src={course.image}
                alt={course.name}
                className="h-32 w-full object-cover rounded mb-4"
              />
              <h3 className="text-md font-semibold mb-2">{course.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between">
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
              <h2 className="font-medium text-lg mb-4">Edit Courses</h2>
              <div className="grid gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Course Name"
                  className="p-2 border text-sm rounded w-full"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="p-2 border text-sm rounded w-full"
                />{" "}
                <textarea
                  name="description"
                  placeholder="Course Description"
                  className="p-2 border text-sm rounded w-full sm:col-span-2"
                ></textarea>
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

export default Courses;
