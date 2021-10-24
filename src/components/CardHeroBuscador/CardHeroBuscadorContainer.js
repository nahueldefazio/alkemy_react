import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import CardHeroBuscador from "./CardHeroBuscador";
import heroContext from "../context/heroContext";
import "./CarHeroBuscadorContainer.css"


function CardHeroBuscadorContainer(props) {

    const [hero, setHero] = useState([])
    const {isLoggedIn} = useContext(heroContext)

    const baseURL = `https://superheroapi.com/api/10226214009035042/search/${props.nombre}`

    useEffect(() => {
        axios.get(baseURL).then(r => {
            setHero(r.data)
        })
    }, [baseURL])

    if (hero.response === "success") {
        return (
            <div className={'row justify-content-center fondo-team'}>
                {isLoggedIn()}
                <CardHeroBuscador detalles={hero.results}/>
            </div>
        );
    } else if (hero.error === "character with given name not found") {
        return  <div className="neon">
                    <h3 className={'text-center'}>&#128561; No se encontró ningún superhero con ese nombre &#128561; </h3>
                </div>
    } else {
        return (
            <div className={'d-flex align-items-center flex-column m-5'}>
                <img src={'https://c.tenor.com/orJlgrtRxR4AAAAd/superheroes.gif'} className={'rounded-circle'}
                     style={{width: "30%"}}/>
            </div>

        )
    }

}

export default CardHeroBuscadorContainer;