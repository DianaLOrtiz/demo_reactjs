import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-dark navbar dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              React xD
            </a>
          </div>
          <ul className="nav navbar-dark">
            <li className="active">

            </li>
            <li>
                <Link to="/" className="nav-link">Inicio</Link >
            </li>
            <li>
              <Link to="/pagina" className="nav-link">Pagina</Link>
            </li>
            <li>
              <Link to="/pagina2" className="nav-link">Pagina2</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
