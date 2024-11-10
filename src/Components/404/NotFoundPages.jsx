import React from 'react';
import { useNavigate } from 'react-router-dom';
import './404.css';

export const NotFoundPages = () => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate('/');
  };

  const handleRedirectToSearch = () => {
    navigate('/search'); // Ajusta la ruta al buscador según tu configuración
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Pagina no encontrada</h2>
        <p>No se encontro lo que buscaba</p>
        <div className="button-group">
          <button onClick={handleRedirectToHome} className="home-link">
            Regresar
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default NotFoundPages;
