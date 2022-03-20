import React from "react";
import { Routes, Route} from "react-router-dom";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import Login from "./Login/Login";
import CreateUser from "./CreateUser/CreateUser";
export default function Page() {
  return (
      <Routes>
				<Route path="/home" exact element={<ProductosList/>} />
				<Route path="/productos" exact element={<ProductosList/>} />
        <Route path="/producto/:id" exact element={<ProductosDetalles/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/createUser" exact element={<CreateUser/>} />
			</Routes>
  );  
}
