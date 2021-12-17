import '../dashboardClienteOrçamento/dashboardClienteOrçamento.css'
import Navbar from '../../components/NavbarAdmin/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet';

import React from 'react'
import { ReactDOM } from 'react';



export default function ServicoAdmin(){

    const[problem, setProblem] = useState("")
    const[menssage, setMenssage] = useState("")
    

    function PostService(){
        axios.post('http://localhost:5000/api/Service/create-service', {
            problem : problem
        }, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 200){
                setMenssage("Serviço cadastrado com sucesso!")
            }
        })

        .catch(erro => console.log(erro))
    }

    return(
        <div>
            <Helmet>
                <title>Cadastrar serviços - FD</title>
            </Helmet>
            <Navbar />
            <div className="dashboard">
            <div className="dashboard_fonte">
                    <h2 className="titulo">CADASTRAR SERVIÇOS</h2>
                    <p>*Cadastrar serviços que a funilaria atenda</p>
                </div>
                <form onSubmit={PostService}>
                <div className="inputs">
                    <div className="linha-input-2">
                        <input type="text" name={problem} value={problem} onChange={(event) => {setProblem(event.target.value)}} placeholder="Serviço: " />
                      
                    </div>
                    <button className="btnAdd" type="submit" >ADICIONAR</button>
                </div>
                </form>
        </div>
        </div>
    )
}