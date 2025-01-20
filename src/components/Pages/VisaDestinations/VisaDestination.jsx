import React, { useState } from "react";
import JoditEditor from "jodit-react"; // Make sure to install this library
import { IoTrash, IoPencil } from "react-icons/io5";

const VisaDestination = () => {
  const visaData = [
    {
      image: "/Images/australia.png",
      countryvisa: "Australia Visa",
      description:
        "Student visas, work visas, and visitor visas for Australia. Start your journey down under!",

      images: [
        "/Images/blogimg1.png",
        "/Images/blogimg2.png",
        "/Images/event.png",
      ],
      title: "Visa For Australia",
    },
    {
      image: "/Images/korea.png",
      countryvisa: "Korea Visa",
      description:
        "Explore the land of opportunities with student, work, and visitor visas for Korea.",
      images: ["/Images/blogimg2.png"],
      title: "Visa For Korea",
    },
    {
      image: "/Images/germany.png",
      countryvisa: "German Visa",
      description:
        "Study or work in Germany with a range of visa options suited to your needs.",
      images: ["/Images/blogimg1.png"],
      title: "Visa For German",
    },
    {
      image: "/Images/denmark.png",
      countryvisa: "Denmark Visa",
      description:
        "These services may include medical or non-medical care provided by licensed healthcare.",
      images: ["/Images/event.png"],
      title: "Visa For Denmark",
    },
    {
      image: "/Images/canada.png",
      countryvisa: "Canada Visa",
      description:
        "These services may include medical or non-medical care provided by licensed healthcare.",
      images: ["/Images/event.png"],
      title: "Visa For Canada",
    },
    {
      image: "/Images/japan.png",
      countryvisa: "Japan Visa",
      description:
        "These services may include medical or non-medical care provided by licensed healthcare.",
      images: ["/Images/blogimg1.png"],
      title: "Visa For Japan",
    },
  ];
  const [editorContent, setEditorContent] = useState("");

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
    <div className="p-6 bg-white rounded-md shadow-md flex flex-col gap-5">
      {/* Add Country Visas Section */}
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="font-semibold mb-4">Add Country Visas</h2>
        <div className="flex flex-col gap-4">
          <input
            type="file"
            name="image"
            className="p-2 border rounded-md"
            onChange={handleImageChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Country Visa"
            className="p-2 border rounded-md"
          />
          {/* <textarea
            name="description"
            placeholder="Description"
            className="p-2 border rounded-md"
          /> */}
        </div>
      </div>

      {/* Add Data Section */}
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="font-semibold mb-4">Add Data</h2>
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
            name="image"
            placeholder="Title"
            className="p-2 border rounded-md"
          />
          <input type="file" name="image" className="p-2 border rounded-md" />
          <JoditEditor
            value={editorContent}
            onChange={(newContent) => setEditorContent(newContent)}
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-[#415FF2] text-white rounded-md">
          Add Data
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
              <th className="px-4 py-2">Cover Image</th>
              <th className="px-4 py-2">Country Visas</th>
              <th className="px-4 py-2">Images</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visaData.map((val, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50"
              >
                {/* Cover Image */}
                <td className="px-4 py-2">
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-16 h-16 rounded-md object-cover cursor-pointer"
                  />
                </td>
                <td className="px-4 py-2">{val.countryvisa}</td>

                <td className="px-4 py-2">
                  <div className="grid gap-2">
                    {val.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="w-12 h-12 rounded-md object-cover cursor-pointer"
                      />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">{val.title}</td>

                {/* Truncated Description */}
                <td
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleDescriptionClick(val.description)} // Open description modal
                >
                  {truncateDescription(val.description, 80)}
                </td>

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
    </div>
  );
};

export default VisaDestination;
