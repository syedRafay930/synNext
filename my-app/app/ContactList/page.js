"use client";
import { useState } from "react";
export default function ContactList() {
  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState({ name: "", mobile: "", country: "" });

  const handleAddRow = () => {
    if (newRow.name && newRow.mobile && newRow.country) {
      setRows([...rows, newRow]);
      setNewRow({ name: "", mobile: "", country: "" }); // Reset form
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <div className="min-h-screen max-w-full bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* Add Row Form */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add New User</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newRow.name}
            onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Mobile"
            value={newRow.mobile}
            onChange={(e) => setNewRow({ ...newRow, mobile: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Country"
            value={newRow.country}
            onChange={(e) => setNewRow({ ...newRow, country: e.target.value })}
            className="p-2 border rounded-lg"
          />
        </div>
        <button
          onClick={handleAddRow}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add User
        </button>
      </div>

      {/* Full-Width Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Mobile</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Country</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.length > 0 ? (
              rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.mobile}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.country}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleDeleteRow(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                  No rows found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

