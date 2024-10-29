import { Form } from "react-router-dom";

export default function Signup() {
  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <section className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-3xl md:text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Crear cuenta
        </h1>
      </section>

      <section className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form action="/signup" method="POST" className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-1 after:text-red-500"
              htmlFor="email"
            >
              Correo
            </label>
            <div className="mt-2">
              <input
                autoComplete="email"
                className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="email"
                name="email"
                placeholder="Tu correo"
                required
                type="email"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-1 after:text-red-500"
              htmlFor="username"
            >
              Usuario
            </label>
            <div className="mt-2">
              <input
                autoComplete="username"
                className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="username"
                name="username"
                placeholder="Tu nombre de usuario"
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-1 after:text-red-500"
              htmlFor="lastname"
            >
              Apellido
            </label>
            <div className="mt-2">
              <input
                autoComplete="lastname"
                className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="lastname"
                name="lastname"
                placeholder="Tu apellido"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-1 after:text-red-500"
                htmlFor="password"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="password"
                name="password"
                placeholder="Tu contraseña"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Crear cuenta
            </button>
          </div>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Ya tienes una cuenta?{" "}
          <a
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            href="/signin"
          >
            Inicia sesión
          </a>
        </p>
      </section>
    </main>
  );
}
