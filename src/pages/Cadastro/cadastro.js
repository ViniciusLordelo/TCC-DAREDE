import './cadastro.css'
import axios from 'axios'
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {BsFillPersonFill as Person} from "react-icons/bs";
import {AiOutlineMail as EmailIcon} from "react-icons/ai"
import {MdPassword as PasswordIcon} from "react-icons/md"
import { BsPhone as PhoneIcon } from 'react-icons/bs';
import { Helmet } from 'react-helmet';
import logo from '../../assets/darede-logo.png'
import { ReactDOM } from 'react';


export default function Cadastro() {

    //   state = {
    //     selectedFile : null,

    //   }
    // //Name, Email, Password, Phone e Image
    // fileSelectedHandler = event => {
    //     this.setState({

    //       selectedFile : event.target.files[0]
    //     })

    //     }

    //     fileUploadHandler = () => {
    //       const fd = new FormData();
    //       fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    //     axios.post('http://localhost:5000/api/User/create-account', fd)
    //     .then(res => {
    //       console.log(res);
    //     });
    //     }
   //Name, Email, Password, Phone e Image


    // VARIÁVEIS PARA CADASTRO DE CONSULTAS
    const [Name, setName] = useState("")
 

    const [Email, setEmail] = useState("")
   

    const [Password, setPassword] = useState("")
    

    const [Phone, setPhone] = useState("")
    

    const TypeUser = 2

    const[erroMensagem, setErroMensagem] = useState("");

    const history = useHistory()

    async function handleSubmit(event) {
      event.preventDefault();
    
      const formData = new FormData();
    
      formData.append('name', Name);
      formData.append('email', Email);
      formData.append('password', Password);
      formData.append('phone', parseInt(Phone));
      //formData.append('imagePlate', Image);
      formData.append('typeUser', TypeUser)
    
      try {
        await axios.post('http://localhost:5000/api/User/create-account', {
          name : Name,
          email : Email,
          password : Password,
          phone : Phone,
          imagePlate : "",
          typeUser : TypeUser
        })
        
        .then(response => {
          if(response.status === 200){
            console.log('Usuário cadastrado com sucesso!')
            history.push("/login")
          }
        })

        .catch(() => setErroMensagem("Erro ao cadastrar usuário! - Tente novamente"))

        } catch (error) {
        throw new Error(error.message)
        
      }
    }

  return (
    <div className="Cadastro">
      <Helmet>
          <title>Cadastre-se - FD</title>
      </Helmet>
      <div className="bg-blue">
        
      </div>

      <div className="cadastro__Container3">
      <div className="separador"></div>
          <h1>cadastre-se</h1>

          <div className="separador"></div>

        <form className="formCadastro" onSubmit={handleSubmit}>
          
          <div className="linhaInput">

            <label className="iconInput"><Person size={20}/></label>
            <input
              placeholder="Nome"
              className='cadastro__input'
              type='text'
              name='name'
              value={Name}
              required
              onChange={(event) => {setName(event.target.value)}}
            
          />

          </div>
         

            <div className="linhaInput">
            <label className="iconInput"><EmailIcon size={20}/></label>
              <input
                placeholder="Email"
                className='cadastro__input'
                type='email'
                name='email'
                autocomplete="on"
                value={Email}
                required
                onChange={(event) => {setEmail(event.target.value)}}

              />
            </div>

        

            <div className="linhaInput">
              <label className="iconInput"><PasswordIcon size={20}/></label>
                <input
                  placeholder="Senha"
                  type='password'
                  name='password'
                  className='cadastro__input'
                  value={Password}
                  required
                  onChange={(event) => {setPassword(event.target.value)}}

                />
            </div>

         


          <div className="linhaInput">
              <label className="iconInput"><PhoneIcon size={20}/></label>
              <input
                placeholder="Telefone/Celular: (xx) 99999-9999"
                className='cadastro__input'
                type='text'
                name='phone'
                value={Phone}
                required
                onChange={(event) => {setPhone(event.target.value)}}

              />
          </div>

          <p style={{color : 'red', margin : '20px auto'}}>{erroMensagem}</p>

          <button type="submit" className='cadastro__botao'>
            CADASTRE-SE
          </button>
          </form>

          <div className="separador"></div>

          
      </div>

      <div className="separador"></div>

      <div className="cadastro_Container4">
            <p className="cadastro_p">Tem uma conta?
              <a href="/login">Entre no sistema</a>
            </p>
      </div>

      <div className="cadastro_Container5">
        <img src={logo} alt="Logo darede"/>
      </div>
     
     
    
      
    </div>




  );
}

