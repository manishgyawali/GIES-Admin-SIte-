import React from 'react'

const ReusableDelete = () => {
  return (
    <div>
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
    </div>
  )
}

export default ReusableDelete