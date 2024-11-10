import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importamos Routes y Route
import { Buscador } from './Components/Buscador/Buscador';
import { Lista_productos } from './Components/Lista/Lista_productos';
import { DetalleCompras } from './Components/DetalleCompras/DetalleCompras';
import "./App.css"
import { Compras } from './Components/Compras/Compras';
import NotFoundPages from './Components/404/NotFoundPages';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Buscador />} />
      <Route path="/items" element={<Lista_productos />} />
      <Route path="/item/:id" element={<DetalleCompras />} />  
      <Route path="/compras" element={<Compras />} />  
      <Route path="/*" element={<NotFoundPages />} />  
    </Routes>
  );
}

export default App;
