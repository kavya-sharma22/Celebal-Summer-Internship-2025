import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

 //Import pages/components
import Dashboard from "./pages/Dashboard";
import Charts from "./components/Charts"; // Make sure this file exists
import Calendar from "./pages/Calendar"; // Placeholder
import Kanban from "./pages/Kanban";     // Placeholder

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* Sidebar */}
      <aside className="w-48 bg-blue-900 text-white p-4 flex flex-col">
        <button
          onClick={toggleDropdown}
          className="bg-blue-700 px-4 py-2 rounded-md font-semibold focus:outline-none"
        >
          Admin Panel
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <nav className="mt-3 flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded hover:bg-blue-700 ${
                  isActive ? "bg-blue-700 font-bold" : ""
                }`
              }
              end
              onClick={() => setDropdownOpen(false)}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `block px-3 py-2 rounded hover:bg-blue-700 ${
                  isActive ? "bg-blue-700 font-bold" : ""
                }`
              }
              onClick={() => setDropdownOpen(false)}
            >
              Calendar
            </NavLink>

            <NavLink
              to="/kanban"
              className={({ isActive }) =>
                `block px-3 py-2 rounded hover:bg-blue-700 ${
                  isActive ? "bg-blue-700 font-bold" : ""
                }`
              }
              onClick={() => setDropdownOpen(false)}
            >
              Kanban
            </NavLink>

            <NavLink
              to="/charts"
              className={({ isActive }) =>
                `block px-3 py-2 rounded hover:bg-blue-700 ${
                  isActive ? "bg-blue-700 font-bold" : ""
                }`
              }
              onClick={() => setDropdownOpen(false)}
            >
              Charts
            </NavLink>
          </nav>
        )}

        {/* Theme Toggle */}
        <div className="mt-auto pt-4">
          <ThemeToggle />
        </div>
      </aside>

      {/* Main Content Area with Routing */}
      <main className="flex-1 flex flex-col justify-center items-center text-center min-h-screen px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/charts" element={<Charts />} />
          { <Route path="/calendar" element={<Calendar />} /> }
          {<Route path="/kanban" element={<Kanban />} /> }
        </Routes>
      </main>
    </div>
  );
}

export default App;
