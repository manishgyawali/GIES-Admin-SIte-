import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const Gallery = () => {
  const galleryData = [
    {
      images: [
        "/Images/gallery1.png",
        "/Images/gallery2.png",
        "/Images/gallery3.png",
        "/Images/gallery4.png",
        "/Images/gallery5.png",
      ],
      title: "Success Stories Images",
      subtitle: "Images and events pictures held at GIES, explore them",

      images1: [
        "/Images/ssi1.png",
        "/Images/ssi2.png",
        "/Images/ssi3.png",
        "/Images/ssi4.png",
        "/Images/ssi5.png",
      ],
    },
  ];

  const [previewIndex, setPreviewIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...fileURLs]);
  };

  const truncateDescription = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Gallery</h1>
      <div className=" grid gap-4 bg-white border rounded w-11/12 mx-auto p-6  shadow-md">
        <h1 className="text-lg font-semibold ">Add data</h1>
        <div className="flex flex-col gap-4">
          <input
            type="file"
            name="image"
            multiple
            className="p-2 border rounded-md"
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Title"
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Subtitle"
            className="p-2 border rounded-md"
          />

          <input
            type="file"
            name="image"
            multiple
            className="p-2 border rounded-md"
            onChange={handleImageChange}
          />
        </div>{" "}
      </div>

      {/* Table */}
      <div className="bg-white w-11/12 mx-auto  border rounded py-6  shadow-md">
        <div className="flex items-center mb-4 justify-between w-11/12 mx-auto">
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

        <div className="w-11/12 mx-auto">
          <table className=" bg-white border rounded shadow">
            <thead className="bg-gray-200">
              <tr className=" text-gray-700 text-center uppercase text-sm">
                <th className="px-4 py-2"> Images</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Subtitle</th>
                <th className="px-4 py-2"> Success Stories Images</th>
                <th className="px-4 py-2 ">Actions</th>
                <th className="px-4 py-2 ">Preview</th>
              </tr>
            </thead>
            <tbody>
              {galleryData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  {/* Images */}
                  <td className="px-4 py-2">
                    <div className="grid grid-cols-2 gap-2">
                      {item.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt="Gallery"
                          className="w-36 h-20 rounded-md object-cover cursor-pointer"
                        />
                      ))}
                    </div>
                  </td>
                  {/* Title */}
                  <td className="px-4 py-2">{item.title}</td>

                  {/* Subtitle */}
                  <td className="px-4 py-2">
                    {truncateDescription(item.subtitle, 100)}
                  </td>

                  {/* Images */}
                  <td className="px-4 py-2">
                    <div className="grid grid-cols-2 gap-2">
                      {item.images1.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt="Gallery"
                          className="w-36 h-20 rounded-md object-cover cursor-pointer"
                        />
                      ))}
                    </div>
                  </td>
                  {/* Actions */}
                  <td className="px-4 py-2 text-center flex flex-col  justify-center gap-2">
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
                  </td>

                  <td className="p-4 ">
                    <button
                      onClick={() => setPreviewIndex(index)} // Open modal
                      className="px-4 py-1 bg-blue-500 text-white rounded-md"
                    >
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
                  <button
                    onClick={() => setDeleteIndex(null)}
                    className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* popup for edit button  */}
          {editIndex && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white px-8 py-6 rounded shadow-md max-w-sm w-full transform transition-all duration-500 ease-out scale-90 opacity-0 animate-popup">
                <h2 className="font-medium text-lg mb-6 ">Edit Data</h2>
                <div className="grid gap-4 mb-6">
                  <input
                    type="file"
                    name="image"
                    multiple
                    className="p-2 border rounded-md"
                    onChange={handleImageChange}
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    className="p-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Subtitle"
                    className="p-2 border rounded-md"
                  />

                  <input
                    type="file"
                    name="image"
                    multiple
                    className="p-2 border rounded-md"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="flex items-center  gap-4">
                  <button className="px-6 py-2 bg-[#415FF2] text-white rounded-md hover:bg-blue-600">
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditIndex(null)}
                    className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Preview Modal */}
          {previewIndex !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-lg  w-96 transform transition-all duration-500 ease-out scale-100 opacity-100 animate-popup">
                {/* Show the first image for simplicity */}
                <img
                  src={galleryData[previewIndex].images[0]} // Show the first image
                  alt={galleryData[previewIndex].title}
                  className="h-40 w-full object-cover rounded"
                />

                <h2 className="text-xl font-semibold text-center">
                  {galleryData[previewIndex].title}
                </h2>
                <p className="text-center">
                  {galleryData[previewIndex].subtitle}
                </p>
                <div className="flex gap-2 flex-wrap">
                {galleryData[previewIndex].images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="h-24 w-24  rounded object-cover"
                  />
                ))}
              </div>

                <button
                  onClick={() => setPreviewIndex(null)} // Close modal
                  className=" px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
