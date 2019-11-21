import React from 'react';
import "./style.css"
import { NavLink } from "react-router-dom";


const Menu = ["Novo Cliente", "Alterar Cliente", "Resumo"];

function DrawerLeft() {
  return (
    <div className="root">
      <div className="drawer">
        <p className="titulo"> Painel de Administrador</p>
        {Menu.map((text, index) => (
          <NavLink 
            key={index} 
            to={`/${text.toLowerCase()}`}
            className="linkDrawer"
          >
            {text.toLocaleUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default DrawerLeft;
