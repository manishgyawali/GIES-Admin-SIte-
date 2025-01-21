import React from "react";

const DestinationsT = () => {
    const destinationtData = [
        {
          title: "Your Global Education Partner for Visa Success",
          subtitle:
            "Guiding you through every step of the process—student visas, test preparation, and beyond",
          image: "/Images/Frame 38.png",
        },
      ]
  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Destinations Title</h1>
      {/* Add/Edit Form */}
      <div className="bg-white border rounded w-11/12 mx-auto p-6  shadow-md">
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


    </div>
  );
};

export default DestinationsT;
