import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink to="/clientes" className="nav-link" >Clientes</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/empleados" className="nav-link" >Empleados</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/items" className="nav-link" >Items</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/ordenes" className="nav-link">Ordenes</NavLink>
            </li>
        </ul>
    );
}