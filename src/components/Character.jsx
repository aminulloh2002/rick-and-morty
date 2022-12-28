import React from 'react'

export default function Character({ character }) {
  return (
    <div className='card'>
      <img src={character.image} alt="" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <span className="status-text">
           <span className={`status ${character?.status || 'unknown'}`}></span>{character?.status || "unknown"}
        </span>
        <p className="title">
          Species: <span className='text'>{character?.species || "unknown"}</span>
        </p>
        <p className="title">
          Gender: <span className='text'>{character?.gender || "unknown"}</span>
        </p>
        <p className="title">
          Last seen:
        </p>
        <p>{character.location.name}</p>
      </div>
    </div>
  )
}
