import React, { useContext} from "react";
import { Link } from "react-router-dom";


export const Header = () => {
 
  return (
    <header>
   
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <img src="https://w7.pngwing.com/pngs/224/696/png-transparent-nike-logo-movement-brands-black.png" alt="Nike" width="150" />
      </div>
      </Link>
      <ul>
        
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Sobre nosotros</Link>
        </li>
      </ul>
      
    </header>
  );
};