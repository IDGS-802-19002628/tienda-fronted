import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Compras.css';

export const Compras = () => {

  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('https://tienda-production-38a3.up.railway.app/api/sales')
      .then((response) => {
        const productDetails = response.data.productDetails;

        if (Array.isArray(productDetails)) {
          setPurchases(productDetails); 
        } else {
          console.error("La respuesta de la API no contiene el arreglo esperado.");
          setError('Error: No se encontraron productos en la respuesta.');
        }
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los productos:", error);
        setError('Hubo un error al obtener los productos');
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="purchases">
      <h2>Registro de compras</h2>
      {purchases.length > 0 ? (
        purchases.map((purchase, index) => (
          <div key={index} className="purchase-item">
            <div className="product-title">{purchase.producto_titulo}</div>
            <div className="purchase-details">
              <p><strong>Precio:</strong> ${purchase.producto_precio}</p>
              <p><strong>Descuento:</strong> ${purchase.producto_descuento}</p>
              <p><strong>Rating:</strong> {purchase.producto_rating}</p>
            </div>
            <div className="product-image">
              <img src={purchase.producto_imagen} alt={purchase.producto_titulo} />
            </div>
          </div>
        ))
      ) : (
        <p>No hay compras registradas.</p>
      )}
    
      <button 
        className="logout-button" 
        onClick={() => navigate('/')}
      >
        Regresar al Buscador
      </button>
    </div>
  );
};
