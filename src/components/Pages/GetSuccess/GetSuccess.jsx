import React from "react";

const TakeAction = () => {
  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Get Success</h1>
      <div className="bg-white flex flex-col gap-4 border rounded w-11/12 mx-auto p-6  shadow-md ">
        <div className=" grid grid-cols-2 gap-4 ">
          <div className="flex flex-col gap-3">
            <label className="block  ">Background Image</label>
            <input
              type="file"
              className="border p-2 w-full rounded-md"
              placeholder="Enter Image URL"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="block">Title</label>
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              placeholder="Enter Title"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="block ">Subtitle</label>
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              placeholder="Enter Subtitle"
            />
          </div>
        </div>
        <div className="">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeAction;
