import '../dashboardClienteOrçamento/dashboardClienteOrçamento.css'
import Navbar from '../../components/NavbarAdmin/Navbar'
import { BsTrash } from 'react-icons/bs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ReactDOM } from 'react';


import React from 'react'


export default function Modelos(){

    const[IdBrand, setIdBrand] = useState(0)
    const[NameModel, setNameModel] = useState("")
    const[menssage, setMenssage] = useState("")

    const[listBrand, setListBrands] = useState([])
    const[listModels, setListModels] = useState([])

    function PostModel(event){

        event.preventDefault();

        axios.post('http://localhost:5000/api/Model/create-model', {
            idBrand : IdBrand,
            nameModel : NameModel
        }, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 200){
                setMenssage("Modelo cadastrado com sucesso")
                GetModel();
                limparCampos();
            }
        })

        .catch((erro) => {console.log(erro)}, setMenssage("Modelo não cadastrado!"))
    }

    function GetBrand(){
        axios.get('http://localhost:5000/api/Brand', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 200){
                setListBrands(response.data)
            }
        })

        .catch(erro => console.log(erro))
    }

    function GetModel(){
        axios.get('http://localhost:5000/api/Model', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 200){
                setListModels(response.data)
            }
        })

        .catch(erro => console.log(erro))
    }

    function deleteModel(model){
        axios.delete('http://localhost:5000/api/model/ ' + model.idModel, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(response => {
            if(response.status === 202){
                GetModel()
            }
        })

        .catch((erro) => {console.log(erro)})
    }

    function limparCampos(){
        setIdBrand(0)
        setNameModel("")
    }    
     

    useEffect(GetBrand, [])
    useEffect(GetModel, [])

    return(
        <div>
            <Helmet>
                <title>Cadastrar Modelos - FD</title>
            </Helmet>
            <Navbar />
            <div className="dashboard">
                <h2 className="titulo"> modelo de veículos</h2>
            </div>
            <form onSubmit={PostModel}>
                <div className="inputs">

                <div className="linha-input-2">
                    <select  value={IdBrand} onChange={(event) => setIdBrand(event.target.value)}>
                    <option  Disabled value="0">Selecione a marca</option>
                    {
                        listBrand.map((brand) => {
                            return(
                               
                                <option key={brand.idBrand} value={brand.idBrand}>
                                    {brand.nameBrand}
                                </option>
                            
                            )
                        })
                    }
                    </select>
                   
                </div>
            

                <div className="linha-input-2">
                    <input type="text" name={NameModel} value={NameModel} onChange={(event) => {setNameModel(event.target.value)}} placeholder="Modelo: " />    
                </div>

                <button className="btnAdd" type="submit" >ADICIONAR</button>
                </div>
            </form>
            <div className="dashboard">
                <h2 className="titulo">listar modelos</h2>
            </div>
            {
                listModels.map((model) => {
                    return(
                        <div key={model.idModel} className="lista">
                        <p>Marca: {model.brand.nameBrand}</p>
                        <p>Modelo: {model.nameModel}</p>
                        <p><BsTrash onClick={() => {deleteModel(model)}} style={{cursor : "pointer"}} size={25} /></p>
                    </div>
                    )
                })
            }
           
        </div>
    )
}