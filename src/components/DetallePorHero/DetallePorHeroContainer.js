import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import DetallePorHero from "./DetallePorHero";

function DetallePorHeroContainer() {

    let {id} = useParams()
    const [hero, setHero] = useState([])

    const baseURL = `https://superheroapi.com/api/10226214009035042/${id}`


    useEffect(() => {
        axios.get(baseURL).then(r => {
            setHero(r.data)
        })
    }, [id])


    if (hero.response === "success") {
        return (
            <div>
                <DetallePorHero detalles={hero}/>
            </div>
        );
    } else {
        return (
            <div className={'d-flex align-items-center flex-column m-5'}>
                <img src={'https://media1.giphy.com/media/hSvIJlprJ8Ji/giphy.gif'}/>
                <h1 className={'neon fs-1'}>...Cargando</h1>
            </div>


        )
    }
}

export default DetallePorHeroContainer;