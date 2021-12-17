import './dashboardClienteOrçamento.css'
import Navbar from '../../components/Navbar'
import { Modal, Button }  from  'react-bootstrap'
import {useEffect, useState} from 'react'
import axios from 'axios';
import { parseJwt } from '../../services/auth';
import { ReactDOM } from 'react';

import React from 'react'
import { Helmet } from 'react-helmet';

export default function Perfil(){

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const[listCars, setListCars] = useState([])

        const name = parseJwt().Name;
        const email = parseJwt().email;
        const phone = parseJwt().phone;

        
        async function GetCarros() {
            await axios.get('http://localhost:5000/api/Car/mycar', {
              headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
              }
            })
                .then(response => {
                    if (response.status === 200) {
                        setListCars(response.data)
                        
                    }
                })
                .catch((erro) => console.log(erro))
        }
      
        useEffect(() => {GetCarros() }, [])

    return(
        <div>
            <Helmet>
                <title>Perfil - FD</title>
            </Helmet>
            <Navbar />
            <div className="dashboard">
                <h2 className="titulo">PERFIL</h2>
                <div className="inputs">
                    <div className="input-style">
                        {

                        }
                        <input type="text" disabled value={name} placeholder="Nome:" />
                        <input type="text" disabled value={email} placeholder="Email:" />
                        <input type="text" disabled value={phone} placeholder="Telefone:" />
                    <h2 className="subtitulo2">Quantidade de carros cadastrados</h2>
                        <div className="card-car" onClick={handleShow}>
                            <p>{listCars.length} carro(s)</p>
                        </div>
                       
                    {
                         
                            listCars.map((cars) => {
                              return(
                                <Modal show={show} onHide={handleClose} key={cars.idCar} >
                                <Modal.Header closeButton>
                                    <Modal.Title><p className="p-title-modal">Informações do veículo</p></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="line-car">
                                        <p><p style={{fontWeight : 'bold'}}>Placa:</p> {cars.plate}</p>
                                        <p><p style={{fontWeight : 'bold'}}>Ano:</p> {cars.year}</p>
                                    </div>
                                </Modal.Body>
                                <Modal.Body>
                                    <div className="line-car">
                                        <p><p style={{fontWeight : 'bold'}}>Marca:</p> {cars.brand}</p>
                                        <p><p style={{fontWeight : 'bold'}}>Modelo:</p> {cars.model}</p>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className="btnAdd2" variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                                </Modal>
                              
                              )
                            })
                    }   
      
                   
                    </div>
                </div>
            </div>
        </div>
    )

}