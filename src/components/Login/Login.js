import React from 'react';
import axios from "axios";
import {Formik} from 'formik';
import * as Yup from "yup";
import "./Login.css"
import FormularioLogIn from "../FormularioLogIn/FormularioLogIn";
import swal from 'sweetalert';

function Login() {

    const url = "http://challenge-react.alkemy.org/"

    async function logUser(values) {

        let payload = {email: values.email, password: values.password};
        await axios.post(url, payload).then(res => {
            let data = res.data;

            localStorage.setItem("token", data.token)
            swal("A wild Pikachu appeared! What do you want to do?", {
                title: "Correcto",
                text: "Bienvenido al challenge de Alkemy ",
                icon: "success",
                buttons: {
                    continuar: true,
                },
            })
                .then((value) => {
                    switch (value) {
                        case "continuar":
                            window.location.replace("/alkemy_react/")
                            break;
                        default:
                            window.location.replace("/alkemy_react/")
                    }
                });

        }).catch(error => {
            swal({
                title: error,
                text: "Email o contraseña incorrectas ",
                icon: "error",
                button: "Ok",
            });
        });
    }

    const ErrorSchema = Yup.object().shape({
        email: Yup.string().required("Email es requerido"),
        password: Yup.string().required("Password es requerido")
    })

    return (
        <div className={'form-container'}>
            <h1 className={'neon'}>Log In</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => logUser(values)}
                validationSchema={ErrorSchema}
                component={FormularioLogIn}>
            </Formik>
        </div>

    );
}

export default Login;