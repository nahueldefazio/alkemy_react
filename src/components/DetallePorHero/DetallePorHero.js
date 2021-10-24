import React from 'react';
import "./DetallePorHero.css"
import {NavLink} from "react-router-dom";

function DetallePorHero({detalles}) {

    console.log(detalles)

    return (
        <div className={'d-flex align-items-center flex-column'}>
            <div className="card mt-5 detalles-container " >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={detalles.image.url} className="img-fluid rounded-start rounded-circle" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2>Nombre completo: {detalles.biography["full-name"]}</h2>
                            <h2>Alias: {detalles.biography.aliases.map(alias => {
                                return alias + " - "
                            })}</h2>
                            <h2>Lugar de trabajo: {detalles.work.base}</h2>
                            <h2>Color de ojos: {detalles.appearance["eye-color"]}</h2>
                            <h2>Color de cabello: {detalles.appearance["hair-color"]}</h2>
                            <h2>Peso: {detalles.appearance.weight[1]}</h2>
                            <h2>Altura: {detalles.appearance.height[1]}</h2>

                        </div>
                    </div>
                </div>

            </div>
            <NavLink to={'/alkemy_react/team'} className={'m-3 btn btn-dark fs-1 neon'} style={{width: "40%"}}>Volver a tu equipo</NavLink>
        </div>
    );
}

export default DetallePorHero;