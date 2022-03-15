import React from "react";
import { Routes, Route} from "react-router-dom";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
      <Routes>
				<Route path="/" exact element={<ProductosList/>} />
				<Route path="/productos" exact element={<ProductosList/>} />
        <Route path="/producto/:id" exact element={<ProductosDetalles/>} />
			</Routes>
  );
}
