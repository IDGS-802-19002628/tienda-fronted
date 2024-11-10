import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from "../../json/products";
import axios from 'axios';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import "./DetalleCompras.css";
import { Buscador } from '../Buscador/Buscador';

export const DetalleCompras = () => {
  const { id } = useParams();  
  const producto = products.find(p => p.id === parseInt(id));  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); 

  if (!producto) {
    return <div>Producto no encontrado</div>;  
  }

  const handleCompra = async () => {
    const purchaseData = {
      title: producto.title,
      description: producto.description,
      category: producto.category,
      price: producto.price,
      discountPercentage: producto.discountPercentage,
      rating: producto.rating,
      stock: producto.stock,
      brand: producto.brand,
      sku: producto.sku,
      weight: producto.weight,
      dimensions_width: producto.dimensions_width,
      dimensions_height: producto.dimensions_height,
      dimensions_depth: producto.dimensions_depth,
      warrantyInformation: producto.warrantyInformation,
      shippingInformation: producto.shippingInformation,
      availabilityStatus: producto.availabilityStatus,
      returnPolicy: producto.returnPolicy,
      minimumOrderQuantity: producto.minimumOrderQuantity,
      createdAt: new Date().toISOString(), 
      updatedAt: new Date().toISOString(), 
      barcode: producto.barcode,
      qrCode: producto.qrCode,
      thumbnail: producto.thumbnail,
    };

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('tienda-production-38a3.up.railway.app/api/addSale', purchaseData); 
      setSuccess(true);
      console.log('Compra realizada con éxito:', response.data);


      Swal.fire({
        icon: 'success',
        title: '¡Compra realizada con éxito!',
        text: 'Tu compra se ha procesado correctamente.',
        confirmButtonText: 'Aceptar',
      });

 
      navigate('/compras');  

    } catch (err) {
      setError('Hubo un error al realizar la compra.');
      console.error('Error:', err);

 
      Swal.fire({
        icon: 'error',
        title: 'Error al realizar la compra',
        text: 'Hubo un problema al procesar tu compra. Intenta nuevamente.',
        confirmButtonText: 'Aceptar',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Buscador />
      <div className='detalle-producto-container'>
        <div className='card-producto'>
          <div className='card-imagenes'>
            <div className='imagen-principal'>
              <img src={producto.thumbnail} alt={producto.title} className='imagen-producto' />
            </div>

            <div className='imagenes-adicionales'>
              <img src={producto.images[0]} alt={producto.title + " - Imagen 1"} className='imagen-producto' />
            </div>
          </div>

          <div className='informacion-producto'>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p><strong>Precio:</strong> ${producto.price}</p>
            <p><strong>Descuento:</strong> {producto.discountPercentage}%</p>
            <p><strong>Rating:</strong> {'★'.repeat(Math.round(producto.rating))}</p>
            <button className="boton-comprar" onClick={handleCompra} disabled={loading}>
              {loading ? 'Cargando...' : 'Comprar'}
            </button>
            {success && <p>Compra realizada con éxito!</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
