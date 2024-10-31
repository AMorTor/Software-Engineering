import { NavLink, useLoaderData } from "react-router-dom";
import Button from "../../components/Button/index.js";

export default function Home() {
  const users = useLoaderData();

  return (
    <main
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080&h=720')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <section
        className="flex gap-6 flex-col md:flex-row justify-between md:items-center w-full max-w-3xl p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Usuarios</h1>
          <p className="mt-2 text-sm text-gray-700">
            Administra todos los usuarios desde aquí
          </p>
        </div>
        <div>
          <NavLink to="/user">
            <Button className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500">
              Nuevo usuario
            </Button>
          </NavLink>
        </div>
      </section>

      <section className="mt-10 w-full max-w-3xl overflow-x-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        {users.length === 0 && (
          <p className="text-center text-sm font-medium text-gray-700">
            -- No hay usuarios --
          </p>
        )}
        {users.length > 0 && (
          <table className="text-sm w-full" style={{ fontFamily: "'Arial', sans-serif" }}>
            <thead className="text-left border-b border-gray-300">
              <tr>
                {["Nombre", "Apellido", "Email", "Rol", ""].map((header) => (
                  <th
                    key={header}
                    className="py-3.5 px-3 first-of-type:pl-0 font-semibold text-gray-800"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(
                ({
                  id,
                  username,
                  last_name,
                  email,
                  role,
                }) => (
                  <tr
                    key={id}
                    className="text-gray-700 border-b last-of-type:border-b-0"
                  >
                    <td className="py-4 px-3">{username}</td>
                    <td className="py-4 px-3">{last_name}</td>
                    <td className="py-4 px-3">{email}</td>
                    <td className="py-4 px-3 capitalize">{role.toLowerCase()}</td>
                    <td className="py-4 px-3 text-indigo-600 font-semibold">
                      <NavLink to={`/user/${id}`}>Editar</NavLink>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}
