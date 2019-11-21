import React from 'react';
import "./style.css"
import { NavLink } from "react-router-dom";
import DrawerLeftRouter from "./drawerLeft.routes"

const Menu = ["Pessoa fisica", "Pessoa juridica", "Resumo"];

function DrawerLeft() {
  return (
    <div className="pageContainer">
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
      <main className="content">
        <DrawerLeftRouter />
      </main>
    </div>
  );
}

export default DrawerLeft;
