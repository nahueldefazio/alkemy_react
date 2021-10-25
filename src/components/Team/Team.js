import React, {useContext} from 'react';
import heroContext from "../context/heroContext";
import {Flip, toast, ToastContainer} from "react-toastify";
import {NavLink} from "react-router-dom";
import "./Team.css"
import PopUp from "../PopUp/PopUp";
import {isNaN} from "formik";

function Team(props) {

    const {equipoUno, setEquipoUno, setStats} = useContext(heroContext)
    const [modalShow, setModalShow] = React.useState(true);

    let equipoArray = []

    function eliminarHero(item) {
        equipoArray = equipoArray.filter(producto => producto.id !== item.id)
        setEquipoUno(equipoArray)
        setStats({})
        toast.error('Heroe Eliminado', {autoClose: 2000, transition: Flip})
    }

    function calcularAltura(altura_peso) {
        if (isNaN(altura_peso / equipoUno.length)) {
            return 0
        } else {
            return (altura_peso / equipoUno.length).toFixed(1)
        }
    }

    if (equipoUno.length > 0) {
        return (
            <div>
                <h1 className={'text-center neon fs-1'}>Equipo</h1>
                <div  className={'d-flex justify-content-center align-items-center m-3'}>
                    <h1 className={'neon fs-2 text-center'}>El equipo se caracteriza por tener predominancia en el
                        superpoder: </h1>
                    {props.bestStat === "intelligence" && <h1 className={'neon-team-intel mx-3'}> Inteligencia</h1>}
                    {props.bestStat === "strength" && <h1 className={'neon-team-fuerza mx-3'}> Fuerza</h1>}
                    {props.bestStat === "speed" && <h1 className={'neon-team-velocidad mx-3'}> Velocidad</h1>}
                    {props.bestStat === "power" && <h1 className={'neon-team-poder mx-3'}> Poder</h1>}
                    {props.bestStat === "durability" && <h1 className={'neon-team-dura mx-3'}> Durabilidad</h1>}
                    {props.bestStat === "combat" && <h1 className={'neon-team-combat mx-3'}> Combate</h1>}
                </div>



                <h1 className={'neon fs-2'}>Numero de superheroes: {equipoUno.length}</h1>
                <div className={'row justify-content-center m-5 '}>
                    {isNaN(props.intelligence) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-intel'}>Inteligencia:
                        Algún superheroe tiene información invalida</h2>
                    }
                    {!isNaN(props.intelligence) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-intel'}>Inteligencia: {props.intelligence}</h2>
                    }
                    {!isNaN(props.strength) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-fuerza'}>Fuerza: {props.strength}</h2>
                    }
                    {isNaN(props.strength) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-fuerza'}>Fuerza:
                        Algún superheroe tiene información invalida</h2>
                    }
                    {!isNaN(props.speed) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-velocidad'}>Velocidad: {props.speed}</h2>
                    }
                    {isNaN(props.speed) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-velocidad'}>Velocidad:
                        Algún superheroe tiene información invalida</h2>
                    }
                    {isNaN(props.power) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-poder'}>Poder:
                        Algún superheroe tiene información invalida</h2>
                    }
                    {!isNaN(props.power) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-poder'}>Poder: {props.power}</h2>

                    }
                    {isNaN(props.durability) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-dura'}>Durabilidad:
                        Algún superheroe tiene información invalida</h2>
                    }
                    {!isNaN(props.durability) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-dura'}>Durabilidad: {props.durability}</h2>

                    }
                    {isNaN(props.combat) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-combat'}>Combate:
                        Algún superheroe tiene información invalida</h2>
                    }
                    {!isNaN(props.combat) &&
                    <h2 className={'col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-combat'}>Combate: {props.combat}</h2>
                    }


                </div>


                <h3 className={'neon fs-3 text-center'}>Promedio Altura: {calcularAltura(props.height)} CM</h3>
                <h3 className={'neon fs-3 text-center'}>Promedio Peso: {calcularAltura(props.weigth)} KG</h3>
                <div className={'team-container'}>
                    {
                        equipoUno.map((item, index) => {
                            equipoArray.push(item)
                            return (
                                <div
                                    className={'d-flex flex-column align-items-center border border-4 m-2 rounded justify-content-around card-container'}
                                    style={{width: "280px", height: "470px"}} key={index}>
                                    <h1 className={'text-center'}>{item.name}</h1>
                                    <img src={item.image.url} style={{width: "150px", height: "170px"}} alt={item.name}/>
                                    <button className={'btn btn-danger m-3'}
                                            onClick={() => eliminarHero(item)}> ELIMINAR
                                    </button>
                                    <NavLink className={'btn btn-info m-3'} to={`/alkemy_react/detalles/${item.id}`}>Mostrar
                                        Detalles
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>

                <ToastContainer/>
            </div>
        );
    } else {
        return <PopUp show={modalShow}
                      onHide={() => setModalShow(false)}
        />
    }

}

export default Team;