import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import JoditEditor from "jodit-react";

const Courses = () => {
  const coursesData = [
    {
      name: "IELTS Preparation",
      title:
        "Master IELTS with expert-led classes, mock tests, and personalized feedback.",

      description:
        "Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.",
      image: "/Images/ielts.png",
      boxtext: "Weekly mock tests",
    },
    {
      name: "PTE Preparation",
      title:
        "Master IELTS with expert-led classes, mock tests, and personalized feedback.",

      description:
        "Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.",
      image: "/Images/pte.png",
      boxtext: "Weekly mock tests",
    },
    {
      name: "SAT Preparation",
      title:
        "Master IELTS with expert-led classes, mock tests, and personalized feedback.",

      description:
        "Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.",
      image: "/Images/sat.png",
      boxtext: "Weekly mock tests",
    },
    {
      name: "TOEFL Preparation",
      title:
        "Master IELTS with expert-led classes, mock tests, and personalized feedback.",

      description:
        "Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.",
      image: "/Images/toefl.png",
      boxtext: "Weekly mock tests",
    },
    {
      name: "CMAT Preparation",
      title:
        "Master IELTS with expert-led classes, mock tests, and personalized feedback.",

      description:
        "Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.Our IELTS course offers tailored lessons covering listening, reading, writing, and speaking. With flexible schedules, practice tests, and expert feedback, we ensure you’re ready to achieve a high band score.",
      image: "/Images/cmat.png",
      boxtext: "Weekly mock tests",
    },
  ];
  const [editorContent, setEditorContent] = useState("");
  const truncateDescription = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-semibold ">Our Courses</h1>
      </div>{" "}
      {/* Add/Edit Form */}
      <div className=" bg-white flex flex-col gap-4 border rounded w-11/12 mx-auto p-6  shadow-md ">
        <h2 className="text-lg font-medium mb-4">Add New Course </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="file"
            accept="image/*"
            className="p-2 border text-sm rounded w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            className="p-2 border text-sm rounded w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Title"
            className="p-2 border text-sm rounded w-full"
          />
           <input
          type="text"
          name="name"
          placeholder="Box Text"
          className="p-2 border text-sm rounded w-full"
        />
        </div>
        <JoditEditor
          value={editorContent}
          onChange={(newContent) => setEditorContent(newContent)}
        />
       
        <div>
          <button className="px-4 py-2 bg-[#415FF2] text-white rounded-md">
            Add Course{" "}
          </button>
        </div>
      </div>
      {/* Courses Table */}
      <div className="bg-white flex flex-col gap-4 border rounded w-11/12 mx-auto p-6  shadow-md">
        <div className="flex items-center  justify-between w-11/12 mx-auto">
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

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-md ">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="px-4 py-2">Cover Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">BoxText</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coursesData.map((val, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  {/* Cover Image */}
                  <td className="px-4 py-2">
                    <img
                      src={val.image}
                      alt={val.name}
                      className="w-16 h-16 rounded-md object-cover cursor-pointer"
                      onClick={() => handleImageClick(val.image)} // Open image modal
                    />
                  </td>
                  {/* Title */}
                  <td className="px-4 py-2">{val.name}</td>
                  <td className="px-4 py-2">{val.title}</td>

                  {/* Truncated Description */}
                  <td
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleDescriptionClick(val.description)} // Open description modal
                  >
                    {truncateDescription(val.description, 80)}
                  </td>
                  <td className="px-4 py-2">{val.boxtext}</td>
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
