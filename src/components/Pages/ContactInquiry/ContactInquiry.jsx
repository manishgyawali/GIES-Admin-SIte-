import React, { useState } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const ContactInquiry = () => {
    const contactDetails = [
        {
          firstname: "Manish",
          secondname: "Gyawali",
          email: "support@giesedu.com",
          phone: "9876543210",
          message: "thank you for the help .",

        },
        {
            firstname: "Abeen",
            secondname: "Khanal",
            email: "support@giesedu.com",
            phone: "9876543210",
            message: "thank you for the help .",
        },
        {
            firstname: "Manish",
            secondname: "Gyawali",
            email: "support@giesedu.com",
            phone: "9876543210",
            message: "thank you for the help .",
        },
        {
            firstname: "Abeen",
            secondname: "Khanal",
            email: "support@giesedu.com",
            phone: "9876543210",
            message: "thank you for the help .",
        },
      ];
      const [deleteIndex, setDeleteIndex] = useState(false);
        const [editIndex, setEditIndex] = useState(false);
  return (
  <div className="py-10 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold w-11/12 mx-auto ">Contact Inquiry</h1>{" "}
    
      <div className="bg-white w-11/12 mx-auto border rounded py-6  shadow-md">
        <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">
          Manage Contact
        </h2>
        <div className="md:w-11/12 mx-auto">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">First Name</th>
                <th className="p-4 text-left">Last Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone Number</th>
                <th className="p-4 text-left">Message</th>

                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactDetails.map((val, index) => (
                <tr key={index} className="border-b">
                  
                  <td className="p-4">{val.firstname}</td>
                  <td className="p-4">{val.secondname}</td>
                  <td className="p-4">{val.email}</td>
                  <td className="p-4">{val.phone}</td>
                  <td className="p-4">{val.message}</td>

                  <td className="p-4 md:grid grid items-center justify-center gap-4">
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
                  <h2 className="font-medium text-lg mb-4">Edit Destination</h2>
                  <div className="grid gap-4 mb-4">
                    <input
                      type="file"
                      name="image"
                      className="p-2 border text-sm rounded w-full"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="p-2 border text-sm rounded w-full"
                    />{" "}
                    <input
                      type="text"
                      name="name"
                      placeholder="Position"
                      className="p-2 border text-sm rounded w-full"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Comment"
                      className="p-2 border text-sm rounded w-full"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Bottom Paragraph"
                      className="p-2 border  text-sm rounded w-full"
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
    </div>  )
}

export default ContactInquiry