import React from 'react';
import {Modal} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./PopUp.css"

function PopUp(props) {

    return (
        <div className={'background '}>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"

            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" className={'d-flex align-items-center flex-column'}>
                        <img src={'https://storage.googleapis.com/diariodemocracia/cache/50/1c/3aa5ff58dd4511e9a6e742010a8e0003.jpg'} className={'image-style '}/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={'d-flex'}>
                    <h5 className={'text-center'}>Su equipo esta vacío !! Para agregar superheroes haga click en el boton "Buscar heroes"</h5>

                </Modal.Body>
                <Modal.Footer>
                    <NavLink onClick={props.onHide} to={'/alkemy_react/team'} className={'btn btn-warning'}>Buscar heroes</NavLink>
                </Modal.Footer>
            </Modal>


        </div>
    );
}

export default PopUp;