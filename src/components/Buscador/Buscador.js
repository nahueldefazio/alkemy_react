import React, {useContext, useState} from 'react';
import CardHeroBuscadorContainer from "../CardHeroBuscador/CardHeroBuscadorContainer";
import heroContext from "../context/heroContext";
import  {Formik, Field, Form} from "formik";
import * as Yup from "yup";
import "./Buscador.css"


function Buscador(props) {

    const [name, setName] = useState("");

    const {isLoggedIn} = useContext(heroContext)

    function mandarNombreHero(info) {
        setName(info.hero)
    }


    const ErrorSchema = Yup.object().shape({
        hero: Yup.string().required("Ingrese el nombre de un heroe").min(3, "Ingrese almenos 3 letras").max(10, "Limite de letras alcanzado"),
    })


    return (
        <div>
            {isLoggedIn()}
            <div >
                <h1 className={'text-center neon'}>Buscador de superheroes</h1>
                <div className="input-group mb-3 w-50 m-auto">
                    <Formik
                        initialValues={{
                            hero: '',
                        }}
                        onSubmit={(value) => mandarNombreHero(value)}
                        validationSchema={ErrorSchema}
                    >
                        {
                            (props) => {

                                return (
                                    <Form className={'d-flex w-100 flex-column'}>
                                        <Field type="text"  className="form-control" placeholder="Ingresa el nombre del superheroe"
                                               id="hero"
                                               name="hero"
                                        />
                                        <small className={'text-uppercase text-danger text-end'}>{props.errors.hero}</small>
                                        <button className="btn btn-danger m-2" type="submit" id="button-addon2" disabled={!props.isValid}
                                        >Buscar
                                        </button>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </div>

            </div>
            <CardHeroBuscadorContainer nombre={name}/>

        </div>
    );
}

export default Buscador;