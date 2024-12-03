import React, { useState } from 'react';

const Libros = () => {
  const [bookName, setBookName] = useState(''); // Estado para el nombre del libro
  const [books, setBooks] = useState([]); // Estado para los libros encontrados
  const [randomBook, setRandomBook] = useState(null); // Estado para el libro aleatorio
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(''); // Estado de error

  // Función para buscar libros por nombre con retraso
  const fetchBooksByName = async (name) => {
    if (!name) {
      setError('Por favor ingresa un título de libro para buscar.');
      return;
    }

    setLoading(true);
    setError(''); // Limpiar errores anteriores
    setRandomBook(null); // Limpiar libro aleatorio al hacer una nueva búsqueda por nombre

    console.log("Buscando libro por nombre:", name); // Depuración

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`);
      const data = await response.json();
      console.log('Respuesta de la API de búsqueda:', data); // Ver la respuesta de la API

      if (data.items && data.items.length > 0) {
        setBooks(data.items); // Guardar los resultados de la búsqueda
      } else {
        setError('No se encontraron libros.');
        setBooks([]);
      }
    } catch (err) {
      console.log("Error en la búsqueda:", err); // Depuración
      setError('Error al buscar libros.');
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener un libro aleatorio desde Google Books con retraso
  const fetchRandomBook = async () => {
    setLoading(true);
    setError('');
    setBooks([]); // Limpiar los resultados de búsqueda al obtener una recomendación aleatoria

    try {
      // Usamos la API de Google Books para obtener un libro aleatorio del tema "fiction"
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=1');
      const data = await response.json();
      console.log('Respuesta de la API de Google Books:', data);

      if (data.items && data.items.length > 0) {
        setRandomBook(data.items[0].volumeInfo);  // Guardar el libro aleatorio
      } else {
        setError('No se pudo obtener un libro aleatorio.');
      }
    } catch (err) {
      console.error('Error al hacer la llamada a la API:', err);
      setError('Error al obtener el libro aleatorio.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080&h=720')" }}>
      <div className="max-w-4xl mx-auto p-6 bg-opacity-75 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl text-center font-semibold mb-6">Explora Libros</h2>

        {/* Campo de búsqueda */}
        <div className="flex gap-4 justify-center mb-6">
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Buscar libro por título"
            className="px-4 py-2 rounded-lg border border-gray-300 w-3/4 text-black placeholder-black"
          />
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            onClick={() => fetchBooksByName(bookName)}
          >
            Buscar
          </button>
        </div>

        {/* Botón para recomendación aleatoria */}
        <div className="flex justify-center mb-6">
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            onClick={fetchRandomBook}
          >
            Recomendación Aleatoria
          </button>
        </div>

        {/* Cargando o error */}
        {loading && <p className="text-center text-white">Cargando...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Mostrar resultados de búsqueda */}
        <ul className="space-y-4">
          {books.length === 0 ? (
            <p className="text-center text-white">No se encontraron libros.</p>
          ) : (
            books.map((book) => (
              <li key={book.id} className="p-4 bg-white rounded-lg shadow-md text-black">
                <h4 className="font-semibold">{book.volumeInfo.title}</h4>
                <p className="text-gray-700">{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconocido'}</p>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="mt-4 rounded-lg"
                  />
                )}
              </li>
            ))
          )}
        </ul>

        {/* Mostrar recomendación aleatoria */}
        {randomBook && (
          <div className="mt-6 p-4 bg-yellow-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Libro Recomendado</h3>
            <p><strong>Título:</strong> {randomBook.title}</p>
            <p><strong>Autor:</strong> {randomBook.authors ? randomBook.authors.join(', ') : 'Autor desconocido'}</p>
            {randomBook.imageLinks && randomBook.imageLinks.thumbnail && (
              <img
                src={randomBook.imageLinks.thumbnail}
                alt={randomBook.title}
                className="mt-4 rounded-lg"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Libros;
