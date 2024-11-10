import React, { useState } from 'react';
import './Buscador.css';
import { useNavigate } from 'react-router-dom';  

export const Buscador = () => {
  const [consultaBusqueda, setConsultaBusqueda] = useState('');
  const navigate = useNavigate();  

  const manejarCambioBusqueda = (e) => {
    setConsultaBusqueda(e.target.value);
  };

  const manejarClicBusqueda = () => {
    if (consultaBusqueda.trim() !== '') {
      navigate(`/items?search=${consultaBusqueda}`);
    } else {
      navigate('/items');
    }
  };

  return (
    <div className="buscador-container">
     
      <h1 className='l'>Bazar Online</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={consultaBusqueda}
          onChange={manejarCambioBusqueda}
        />
       
      </div>
      <button onClick={manejarClicBusqueda}>Buscar</button>
    </div>
  );
};
