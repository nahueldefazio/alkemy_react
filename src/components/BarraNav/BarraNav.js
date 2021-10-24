import React from 'react';
import {NavLink} from "react-router-dom";
import "./BarraNav.css"

function BarraNav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={'/alkemy_react'}>Alkemy Challenge</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link submenu" aria-current="page" to={'/alkemy_react/'}>Buscador</NavLink>
                        <NavLink className="nav-link  submenu" to={'/alkemy_react/team'}>Equipo</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default BarraNav;