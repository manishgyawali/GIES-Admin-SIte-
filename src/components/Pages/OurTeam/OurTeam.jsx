import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import PP1 from "../../../../public/Images/pp1.png";
import PP2 from "../../../../public/Images/pp2.png";
import PP3 from "../../../../public/Images/pp3.png";
import PP4 from "../../../../public/Images/pp4.png";
import Vector1 from "../../../../public/Images/vector1.png";
import Vector2 from "../../../../public/Images/vector2.png";
import Vector3 from "../../../../public/Images/vector3.png";

const OurTeam = () => {
  const teamData = [
    {
      name: "Candice Wu",
      role: "Backend Developer",
      description: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
      imgSrc: PP1,
      socials: {
        x: Vector1,
        linkedin: Vector2,
        dribbble: Vector3,
      },
    },
    {
      name: "Orlando Diggs",
      role: "Customer Success",
      description: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
      imgSrc: PP2,
      socials: {
        x: Vector1,
        linkedin: Vector2,
        dribbble: Vector3,
      },
    },
    {
      name: "Natali Craig",
      role: "Product Designer",
      description:
        "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
      imgSrc: PP3,
      socials: {
        x: Vector1,
        linkedin: Vector2,
        dribbble: Vector3,
      },
    },
    {
      name: "Drew Cano",
      role: "UX Researcher",
      description:
        "Lead user research for Slack. Contractor for Netflix and Udacity.",
      imgSrc: PP4,
      socials: {
        x: Vector1,
        linkedin: Vector2,
        dribbble: Vector3,
      },
    },
  ];

  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Our Team</h1>
      <div className=" w-11/12 mx-auto flex flex-col gap-6">
        <div className="bg-white border rounded p-6  shadow-md ">
          <h2 className="text-lg font-medium mb-4">Add Team Data </h2>
          <div className="grid gap-4 ">
            <div className="grid grid-cols-2 gap-4">
              <input type="file" className="p-2 border rounded w-full" />
              <input
                type="text"
                placeholder="Name"
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Position"
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
            Add Team{" "}
          </button>
        </div>

        {/* Courses Table */}
        <div className="bg-white border rounded p-6  shadow-md">
          <div className="flex items-center mb-6 justify-between">
            <h2 className="text-lg font-medium ">Manage Team Data</h2>
            {/* search section  */}
            <div className="relative lg:flex hidden flex-col items-center">
              <input
                type="text"
                placeholder="Search here..."
                className="w-48 p-2 pl-10 text-sm rounded-full bg-[#415FF2] text-white placeholder-white outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute top-2 left-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.35-3.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </div>
          </div>

          {/* Team Members List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src={member.imgSrc}
                  alt={member.name}
                  width={96}
                  height={96}
                />
                <h3 className="text-lg font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 text-center">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  {Object.entries(member.socials).map(([key, value], i) => (
                    <a key={i} target="_blank" rel="noreferrer">
                      <img src={value} alt={key} width={15} height={15} />
                    </a>
                  ))}
                </div>
                <div className="flex justify-center mt-4 space-x-3">
                  <button
                    onClick={setEditIndex}
                    className="px-3 py-1 bg-yellow-400 text-white rounded flex items-center gap-2"
                  >
                    <IoPencil /> Edit
                  </button>
                  <button
                    onClick={setDeleteIndex}
                    className="px-3 py-1 bg-red-500 text-white rounded flex items-center gap-2"
                  >
                    <IoTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
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
              <input type="file" className="p-2 border rounded w-full" />
              <input
                type="text"
                placeholder="Name"
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Position"
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Description"
                className="p-2 border rounded w-full"
              />
            </div>
            <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
              Save Changes{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
