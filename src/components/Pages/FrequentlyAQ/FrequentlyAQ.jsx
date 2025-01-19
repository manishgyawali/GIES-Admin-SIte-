import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const FrequentlyAQ = () => {
  const faqs = [
    {
      question: "The standard Lorem Ipsum passage, used since the 1500s",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc parturient adipiscing commodo",
    },
    {
      question: "The standard Lorem Ipsum passage, used since the 1500s",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc parturient adipiscing commodo",
    },
    {
      question: "The standard Lorem Ipsum passage, used since the 1500s",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc parturient adipiscing commodo",
    },
  ];
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">
        Frequently Asked Questions
      </h1>
      <div className="bg-white flex flex-col gap-4 border rounded w-11/12 mx-auto p-6  shadow-md ">
        <div className=" grid grid-cols-2 gap-4 ">
          <input
            type="text"
            className="border p-2 w-full rounded-md"
            placeholder="Enter Question"
          />

          <input
            type="text"
            className="border p-2 w-full rounded-md"
            placeholder="Enter Answer"
          />
        </div>
        <div className="">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg">
            Save
          </button>
        </div>
      </div>
      {/* Destinations Table */}
      <div className="bg-white w-11/12 mx-auto border rounded py-6  shadow-md">
        <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage FAQ</h2>
        <div className="md:w-11/12 mx-auto">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Questions</th>
                <th className="p-4 text-left">Answers</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((val, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{val.question}</td>
                  <td className="p-4">{val.answer}</td>
                  <td className="p-4 md:flex grid items-center justify-center gap-4">
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
                  <h2 className="font-medium text-lg mb-4">Edit FAQ</h2>
                  <div className="grid gap-4 mb-4">
                    <input
                      type="text"
                      className="border p-2 w-full rounded-md"
                      placeholder="Enter Question"
                    />

                    <input
                      type="text"
                      className="border p-2 w-full rounded-md"
                      placeholder="Enter Answer"
                    />
                  </div>
                  <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
                    Save Changes{" "}
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

export default FrequentlyAQ;
