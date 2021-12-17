import '../dashboardClienteOrçamento/dashboardClienteOrçamento.css'
import Navbar from '../../components/NavbarAdmin/Navbar'
import { BsTrash } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { ReactDOM } from 'react';

import React from 'react'


export default function Marca(){

    const[brand, setBrand] = useState("")
    const[menssageSucess, setMenssageSucess] = useState("")

    const[listBrands, setListBrands] = useState([])
   

    function GetBrand(){
        axios.get('http://localhost:5000/api/Brand',{
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if(resposta.status === 200){
                setListBrands(resposta.data)
            }
        })

        .catch(erro => console.log(erro))
    }

    function PostBrand(){

        
        axios.post('http://localhost:5000/api/Brand/create-brand',{
            nameBrand : brand
        }, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if(resposta.status === 200){
                setMenssageSucess("Marca cadastrada com sucesso!")
                GetBrand();
                limparCampos();
            }
        })

        .catch(erro => {console.log(erro)})
    }

    function deleteBrand(brand){


        axios.delete('http://localhost:5000/api/brand/ ' + brand.idBrand, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 202){
                GetBrand();
                setMenssageSucess("Marca deletada com sucesso!")
            }
        })

        .catch((erro) => {console.log(erro)})
    }

    function limparCampos(){
        setBrand("")
        setMenssageSucess("")
    }

    useEffect(GetBrand, [])
    return(
        <div>
            <Helmet>
                <title>Cadastrar Marcas - FD</title>
            </Helmet>
            <Navbar />
            <div className="dashboard">
                <h2 className="titulo"> cadastrar MARCAS</h2>
            </div>
            <form onSubmit={PostBrand} >
                <div className="inputs">

                    <div className="linha-input-2">
                        <input type="text" name={brand} value={brand} onChange={(event) => {setBrand(event.target.value)}} placeholder="Marca: "  required/>    
                    </div>

                    <button className="btnAdd" type="submit" >ADICIONAR</button>
                   
                </div>
               
            </form>
            {menssageSucess !== "" ? <div style={{display : "block"}} className="alertSucess"><h6 className="alerth3">{menssageSucess}</h6></div> :  <div style={{display : "none"}} className="alertSucess"></div> }
          
            <div className="dashboard">
                <h2 className="titulo">listar marcas</h2>
            </div>
            {
                
                listBrands.map((brand) => {
                    return(
                        <div  key={brand.idBrand} className="lista">
                        <p>Marca: {brand.nameBrand}</p>
                        <p><BsTrash onClick={() => deleteBrand(brand)} style={{cursor : "pointer"}} size={25} /></p>
                    </div>
                    )
                })
            }
           
        </div>
    )
}