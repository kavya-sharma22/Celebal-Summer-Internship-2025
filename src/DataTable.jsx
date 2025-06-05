import { useState } from "react";

const data = [
  { id: 1, name: "Kavya Sharma", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "User" },
  { id: 3, name: "Alice Johnson", role: "Editor" },
  { id: 4, name: "Bob Brown", role: "User" },
  { id: 5, name: "Eva White", role: "Admin" },
  { id: 6, name: "Mike Green", role: "Editor" },
  { id: 7, name: "Laura Grey", role: "User" },
  { id: 8, name: "Tom Black", role: "Admin" },
];

export default function DataTable() {
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "ascending" });
  const [filterRole, setFilterRole] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const filteredData = data
    .filter((item) => filterRole === "All" || item.role === filterRole)
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div className="w-full p-4">
      {/* Filter & Search */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="font-semibold mr-2">Filter by Role:</label>
          <select
            value={filterRole}
            onChange={(e) => {
              setFilterRole(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
          >
            <option value="All">All</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
          </select>
        </div>
        <div>
          <label className="font-semibold mr-2">Search:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
            placeholder="Search by name"
          />
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead>
          <tr>
            <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort("id")}>
              ID
            </th>
            <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort("name")}>
              Name
            </th>
            <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort("role")}>
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-600 dark:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
