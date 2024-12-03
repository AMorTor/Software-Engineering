import React, { useState } from 'react';

const RickAndMorty = () => {
  const [character, setCharacter] = useState(null); // Estado para el personaje aleatorio
  const [episode, setEpisode] = useState(null); // Estado para el episodio aleatorio
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(''); // Estado de error

  // Función para obtener un personaje aleatorio
  const fetchRandomCharacter = async () => {
    setLoading(true);
    setError('');
    setEpisode(null); // Limpiar episodio al obtener un nuevo personaje

    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/' + (Math.floor(Math.random() * 826) + 1));
      const data = await response.json();
      setCharacter(data); // Guardar el personaje aleatorio
    } catch (err) {
      setError('Error al obtener el personaje.');
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener un episodio aleatorio
  const fetchRandomEpisode = async () => {
    setLoading(true);
    setError('');
    setCharacter(null); // Limpiar personaje al obtener un nuevo episodio

    try {
      const episodeNumber = Math.floor(Math.random() * 51) + 1; // Número aleatorio de episodio entre 1 y 51
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`);
      const data = await response.json();
      setEpisode(data); // Guardar el episodio aleatorio
    } catch (err) {
      setError('Error al obtener el episodio.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080&h=720')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto p-6 bg-opacity-75 rounded-lg shadow-lg text-black">
        <h2 className="text-3xl text-center font-semibold mb-6">Explora Rick and Morty</h2>

        {/* Botones para obtener contenido aleatorio */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            onClick={fetchRandomCharacter}
          >
            Obtener Personaje Aleatorio
          </button>
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            onClick={fetchRandomEpisode}
          >
            Obtener Episodio Aleatorio
          </button>
        </div>

        {/* Cargando o error */}
        {loading && <p className="text-center text-black">Cargando...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Mostrar Personaje Aleatorio */}
        {character && (
          <div 
            className="text-center p-4 rounded-lg shadow-md mt-6"
            style={{
              backgroundColor: "white", // Fondo blanco para el personaje
              color: "black", // Color de texto negro
            }}
          >
            <h3 className="text-xl font-semibold">Personaje Aleatorio</h3>
            <img
              src={character.image}
              alt={character.name}
              className="mx-auto rounded-full"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <p><strong>Nombre:</strong> {character.name}</p>
            <p><strong>Especie:</strong> {character.species}</p>
            <p><strong>Estado:</strong> {character.status}</p>
          </div>
        )}

        {/* Mostrar Episodio Aleatorio */}
        {episode && (
          <div 
            className="text-center p-4 rounded-lg shadow-md mt-6"
            style={{
              backgroundColor: "white", // Fondo blanco para el episodio
              color: "black", // Color de texto negro
            }}
          >
            <h3 className="text-xl font-semibold">Episodio Aleatorio</h3>
            <p><strong>Título:</strong> {episode.name}</p>
            <p><strong>Fecha de estreno:</strong> {episode.air_date}</p>
            <p><strong>Temporada:</strong> {episode.episode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RickAndMorty;
