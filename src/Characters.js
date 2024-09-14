import React from 'react';

export default function Characters({characters}){

  return(
    <div className='contenedor-prin'>
    <div className='title'>
    <h1>Ryck and Morty</h1>
    </div>
    {/* {characters.length>0?( */}
    <div className='conteiner'>
      {characters.map((character) => (
        <div className="img-personajes">
          <h2>{character.name}</h2>
          <img src={character.image} />
          <div className='especificaciones'>
          <h3 className="status">{character.status}</h3>
          <h2 className='species'>{character.species}</h2>
          <p className='origins'>{character.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
    {/* ):(<p>loading...</p>)} */}
  </div>
  )
}