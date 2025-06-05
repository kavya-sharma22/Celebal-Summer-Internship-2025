import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col p-6">
      <h2 className="text-3xl font-bold mb-10">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-blue-700 ${
              isActive ? 'bg-blue-700 font-semibold' : ''
            }`
          }
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-blue-700 ${
              isActive ? 'bg-blue-700 font-semibold' : ''
            }`
          }
        >
          Calendar
        </NavLink>
        <NavLink
          to="/kanban"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-blue-700 ${
              isActive ? 'bg-blue-700 font-semibold' : ''
            }`
          }
        >
          Kanban
        </NavLink>
        <NavLink
          to="/charts"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-blue-700 ${
              isActive ? 'bg-blue-700 font-semibold' : ''
            }`
          }
        >
          Charts
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
