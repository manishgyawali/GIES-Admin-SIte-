import React from "react";

const ReusableTable = ({ columns, data, actions }) => {
  return (
    <table className="w-full bg-white rounded shadow">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col, index) => (
            <th key={index} className="p-4 text-left">
              {col.header}
            </th>
          ))}
          {actions && <th className="p-4 text-center">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="p-4">
                {col.render ? col.render(row) : row[col.field]}
              </td>
            ))}
            {actions && (
              <td className="p-4 flex justify-center gap-2">
                {actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    onClick={() => action.onClick(row, rowIndex)}
                    className={`${action.className} px-4 py-1 rounded-md`}
                  >
                    {action.label}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;
