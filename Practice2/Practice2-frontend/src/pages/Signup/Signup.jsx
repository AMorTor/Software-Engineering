import { Form } from "react-router-dom";

export default function Signup() {
  return (
    <main
      className="flex min-h-screen items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080&h=720')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section
        className="flex flex-col justify-center p-6 rounded-lg shadow-lg w-full max-w-md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco semitransparente
          fontFamily: "'Arial', sans-serif", // Cambia la tipografía
        }}
      >
        <h1 className="text-center text-3xl md:text-4xl font-bold leading-9 tracking-tight text-gray-800">
          Crear cuenta
        </h1>

        <Form action="/signup" method="POST" className="space-y-6 mt-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-700"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              autoComplete="email"
              className="block w-full rounded-md px-3 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
              id="email"
              name="email"
              placeholder="Tu correo"
              required
              type="email"
              style={{ fontFamily: "'Arial', sans-serif" }}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-700"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              autoComplete="username"
              className="block w-full rounded-md px-3 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
              id="username"
              name="username"
              placeholder="Tu nombre de usuario"
              required
              style={{ fontFamily: "'Arial', sans-serif" }}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-700"
              htmlFor="lastname"
            >
              Apellido
            </label>
            <input
              autoComplete="lastname"
              className="block w-full rounded-md px-3 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
              id="lastname"
              name="lastname"
              placeholder="Tu apellido"
              required
              style={{ fontFamily: "'Arial', sans-serif" }}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-700"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              autoComplete="current-password"
              className="block w-full rounded-md px-3 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
              id="password"
              name="password"
              placeholder="Tu contraseña"
              required
              type="password"
              style={{ fontFamily: "'Arial', sans-serif" }}
            />
          </div>

          <button
            className="w-full rounded-md bg-indigo-600 px-3 py-2 text-white font-semibold hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
            type="submit"
          >
            Crear cuenta
          </button>
        </Form>

        <p className="mt-6 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <a
            className="text-indigo-600 hover:text-indigo-500 font-semibold"
            href="/signin"
          >
            Inicia sesión
          </a>
        </p>
      </section>
    </main>
  );
}
