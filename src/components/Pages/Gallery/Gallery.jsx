import React, { useState } from "react";
import { IoTrash, IoPencil } from "react-icons/io5";

const Gallery = () => {
  const visaData = [
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
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="font-semibold text-xl mb-4"> Gallery</h2>
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
      </div>
      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
              <th className="px-4 py-2"> Images</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Subtitle</th>
              <th className="px-4 py-2"> Success Stories Images</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visaData.map((item, index) => (
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
                    onClick={() => handleEdit(index)}
                    className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                  >
                    <IoPencil /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
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
    </div>
  );
};

export default Gallery;
