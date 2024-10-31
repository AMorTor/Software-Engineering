import { Form } from "react-router-dom";
import UserForm from "../../components/UserForm";
import Button from "../../components/Button/index.js";

export default function NewUser() {
  return (
    <main
      className="flex flex-col min-h-screen items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080&h=720')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section
        className="flex gap-6 flex-col md:flex-row justify-between md:items-center w-full max-w-2xl p-6 rounded-lg shadow-lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco semitransparente
          fontFamily: "'Arial', sans-serif", // Cambia la tipografía
        }}
      >
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Nuevo perfil</h1>
          <p className="mt-2 text-sm text-gray-700">
            Aquí puedes crear un nuevo perfil de usuario con la información que desees
          </p>
        </div>
      </section>

      <Form action="/user" method="POST" className="mt-10 w-full max-w-2xl">
        <UserForm>
          <Button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500">
            Guardar
          </Button>
        </UserForm>
      </Form>
    </main>
  );
}
