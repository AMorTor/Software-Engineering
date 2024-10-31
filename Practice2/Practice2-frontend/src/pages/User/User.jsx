import { useLoaderData } from "react-router-dom";
import UserDeleteDialog from "./UserDeleteDialog.jsx";
import UserUpdateForm from "./UserUpdateForm.jsx";

export default function User() {
  const user = useLoaderData();

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
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco semitransparente
          fontFamily: "'Arial', sans-serif", // Cambia la tipografía
        }}
      >
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Perfil</h1>
          <p className="mt-2 text-sm text-gray-700">
            Este es tu perfil de usuario, aquí puedes ver y editar tu información
          </p>
        </div>
        <UserDeleteDialog userID={user.id} />
      </section>

      <section className="mt-10 w-full max-w-3xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <UserUpdateForm user={user} />
      </section>
    </main>
  );
}
