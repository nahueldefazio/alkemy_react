import React, {useContext} from 'react';
import heroContext from "../context/heroContext";
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import "./CardHeroBuscador.css"

function CardHeroBuscador(props) {

    const {equipoUno, setEquipoUno} = useContext(heroContext)

    let cosasArr = []
    for (let cosas in props.detalles) {
        cosasArr.push(cosas)
    }

    function mostrarAlerta(alerta) {
        console.log(alerta)
        if (alerta === "good") {
            swal({
                position: 'top-end',
                icon: 'success',
                title: 'Superheroe BUENO agregado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (alerta === "bad") {
            swal({
                position: 'top-end',
                icon: 'success',
                title: 'Superheroe MALO agregado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (alerta === "limite_good") {
            swal({
                position: 'top-end',
                icon: 'error',
                title: 'Ya hay 3 superheroes BUENOS en tu equipo !',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (alerta === "limite_bad") {
            swal({
                position: 'top-end',
                icon: 'error',
                title: 'Ya hay 3 superheroes MALOS en tu equipo !',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (alerta === "team_completo") {
            swal({
                position: 'top-end',
                icon: 'warning',
                title: 'Limite de personajes alcanzado (6)',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            swal({
                position: 'top-end',
                icon: 'warning',
                title: 'No se admiten superheroes repetidos',
                showConfirmButton: false,
                timer: 1500
            })
        }


    }

    function agregarHero(hero) {

        if (equipoUno.length < 6) {
            let search = equipoUno.find((item) => item.name === hero.name)
            if (!search) {
                if (check(equipoUno, "bad", hero)) {
                    mostrarAlerta("bad")
                    setEquipoUno([...equipoUno, hero])
                } else if (check(equipoUno, "good", hero)) {
                    mostrarAlerta("good")
                    setEquipoUno([...equipoUno, hero])
                } else if (!check(equipoUno, "good", hero)) {
                    if (hero.biography.alignment === "good") {
                        mostrarAlerta("limite_good")
                    } else {
                        mostrarAlerta("limite_bad")
                    }
                }
            } else {
                mostrarAlerta()
            }
        } else {
            mostrarAlerta("team_completo")
        }
    }


    function check(heros, condition, hero) {
        const length = heros.filter((item) => {
            return item.biography.alignment === condition
        }).length
        return length < 3 && hero.biography.alignment === condition
    }


    return (
        cosasArr.map(item => {
            return (
                <div className={'card-container col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 m-3'}>
                    <h1 className={'text-center'}>{props.detalles[item].name} - {props.detalles[item].biography.alignment}</h1>
                    <img src={props.detalles[item].image.url} alt={props.detalles[item].name} style={{width: "200px", height: "260px"}}/>
                    <button className={"btn btn-light m-2"} onClick={() => agregarHero(props.detalles[item])}> Agregar
                    </button>
                </div>
            )
        })
    );
}

export default CardHeroBuscador;