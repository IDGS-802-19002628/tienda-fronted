import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { products } from "../../json/products";
import './productos.css';
import { Buscador } from '../Buscador/Buscador';

export const Lista_productos = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const verDetalleProducto = (id) => {
    navigate(`/item/${id}`);  
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery) {
      const filtrados = products.filter(producto =>
        producto.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProductosFiltrados(filtrados);
    } else {
      setProductosFiltrados(products);  
    }
  }, [location.search]); 

  return (
    <div className="resultados-busqueda">
        
      <div className="contenedor-buscador">
      
      </div>

      <div className="lista-productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(product => (
            <div key={product.id} className="tarjeta-producto" onClick={() => verDetalleProducto(product.id)}>
              <img src={product.thumbnail} alt={product.title} className="imagen-producto" />
              <div className="informacion-producto">
                <h3>{product.title}</h3>
                <p>{product.discountPercentage}% de descuento</p>
                <p className="precio">${product.price}</p>
                <p className="calificacion">Rating: {'★'.repeat(Math.round(product.rating))}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos para esa búsqueda.</p>
        )}
      </div>
    </div>
  );
};
