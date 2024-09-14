import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import Characters from './Characters.js';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        //en este ejemplo debemos setear los errores
        setLoading(true);
        setError('');
        setCharacters([]);
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        if (data.error) {
          throw new Error('error cargando datos');
        }
        setLoading(false);
        setError('');
        setCharacters(data.results); ///results es de la api
      } catch (error) {
        console.error('error fetch', error);
        setLoading(false);
        setError(error);
        setCharacters([]);
      }
    };
    fetchCharacters();
  }, []);
  //early returns
  // if (characters.length===0){
  //   return <p>loading...</p>
  // }
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <Characters characters={characters} />

    //  <BrowserRouter>
    //  <Routes>
    //  <Route path='/' element={<Characters characters={characters}/>}/>
    //   </Routes>
    //</BrowserRouter>
  );
}
