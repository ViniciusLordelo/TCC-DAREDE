import './Login.css'
import { useState, useEffect } from 'react'
import { BsFillEnvelopeFill as Email } from 'react-icons/bs'
import { BsFillKeyFill as Password } from "react-icons/bs";
import { parseJwt } from '../../services/auth';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import React from 'react'
import ReactDom from  'react-dom'
import { Helmet } from 'react-helmet';



function Login() {

  const [email, setEmail] = useState("")

  const [password, setSenha] = useState("")
  
  const [isLoading, setIsLoading] = useState("")
  const [erroMensagem, setErroMensagem] = useState("")

  const history = useHistory()


  function efetuaLogin(event){
    event.preventDefault()
    axios.post('http://localhost:5000/api/login', {
        email : email,
        password : password
    })
    
    .then(resposta => {
        if(resposta.status === 200){
            localStorage.setItem("usuario-login", resposta.data.token)
            console.log(parseJwt())

            if(parseJwt().role === "1"){
                history.push('/dashboardAdmin')
            } else if(parseJwt().role === "2"){
                history.push('/dashboardcliente')
            }

            
           
        }
    })
    .catch( () => 
        setErroMensagem("Email ou senha incorretos!")
    
    )

}

  return (
    <div className="Login">

            <Helmet>
                <title>Login - FD</title>
            </Helmet>

      <div className="bg-blue"></div>

      <div className="Login__Container1">
        <div className="Login__Container3">
          <h1>Entre no sistema</h1>  
            <a1>Realizar login para entrar no sistema</a1>

              <form className="FormLogin" onSubmit={efetuaLogin} >  
                  <div className="linhaInput2">
                    <label className="iconInput2"><Email size={20} /></label>
                    <input
                    className='Login__input'
                    placeholder="Email"
                    type='email'
                    autocomplete="on"
                    name={email}
                    onChange={(event) => {setEmail(event.target.value)}}
                    autoComplete={true}
                  />
                  </div>
                
                  <div className="linhaInput2">
                    <label className="iconInput2"><Password size={25} /></label>
                    <input
                    placeholder="Senha"
                    type='password'
                    name={password}
                    className='Login__input'
                    value={password}
                    onChange={(event) => {setSenha(event.target.value)}}
                  />
                  </div>

                  <p style={{color : 'red', margin : '25px auto', fontSize : '18px'}}>{erroMensagem}</p>
             
                  <button type='submit' className='Login__botao'>
                  Login
                  </button>
                </form>
          <div className='Login__conjunto1'>
            <p>Não possui conta? <a href="/cadastro">Cadastre-se!</a></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
