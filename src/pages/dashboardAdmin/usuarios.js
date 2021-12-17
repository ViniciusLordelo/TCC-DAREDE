import '../dashboardClienteOrçamento/dashboardClienteOrçamento.css'
import { BsTrash } from 'react-icons/bs'
import  Navbar  from '../../components/NavbarAdmin/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

import React from 'react'
import { ReactDOM } from 'react';


export default function Usuario(){

    
    const[idDesejado, setIdDesejado] = useState(0)
    const[listUsers, setListUsers] = useState([])


    function GetUsers(){
        axios.get('http://localhost:5000/api/User', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 200){
                setListUsers(response.data)
            }
        })

        .catch((erro) => console.log(erro))

    }

    
    function DeleteUsers(users){
        axios.delete('http://localhost:5000/api/User/deleteuser/ '+ users.idUser,{
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 200){
               GetUsers()
            }
        })

        .catch((erro) => console.log(erro))
    }

    useEffect(GetUsers, [])

    return(
        <div>
            <Helmet>
                <title>Usuários - FD</title>
            </Helmet>
            <Navbar />
            <div className="dashboard">
                <div className="dashboard_fonte">
                    <h2 className="titulo">Usuários</h2>
                    <p>* Todos os usuários cadastrados no sistema!</p>
                </div>
                <div className="lista-1">
                    <h2 className="titulo" style={{color : '#1B57A6'}}>{listUsers.length} Usuário(s) cadastrados</h2>
                </div>

                {
                    listUsers.map((users) => {
                        return(
                            <div key={users.idUser} className="lista">
                                <p>Nome: {users.name}</p>
                                <p>Email: {users.email}</p>
                                <p>Telefone: {users.phone}</p>
                                <p><BsTrash onClick={() => {DeleteUsers(users)}} style={{cursor : "pointer"}} size={25} /></p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}