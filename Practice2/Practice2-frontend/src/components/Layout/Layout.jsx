import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Barra de navegación */}
      <nav>
        <ul className="flex gap-4 p-4 bg-indigo-600 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-md bg-indigo-800 text-white font-semibold"
                  : "px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/libros"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-md bg-indigo-800 text-white font-semibold"
                  : "px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-200"
              }
            >
              Libros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ram"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-md bg-indigo-800 text-white font-semibold"
                  : "px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-200"
              }
            >
              Rick and Morty 
            </NavLink>
          </li>
        </ul>
      </nav>

      {}
      <main>
        <Outlet /> {}
      </main>
    </div>
  );
}
