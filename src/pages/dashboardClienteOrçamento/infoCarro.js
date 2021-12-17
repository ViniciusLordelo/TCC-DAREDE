import './dashboardClienteOrçamento.css'
import Navbar from '../../components/Navbar'
import { BsTrash } from 'react-icons/bs'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { parseJwt } from '../../services/auth';
import React from 'react'

import { Modal } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { Helmet } from 'react-helmet';
import * as AiIcons from 'react-icons/ai';
import { ReactDOM } from 'react';


export default function InfoCarro() {


  //Plate, Color, Year, City, Model, Brand, 


  // VARIÁVEIS PARA CADASTRO DE CONSULTAS
  const [Plate, setPlate] = useState("")


  const [Color, setColor] = useState("")


  const [Year, setYear] = useState("")

  const [City, setCity] = useState("")


  const [Model, setModel] = useState("")


  const [Brand, setBrand] = useState("")

  const [ImagePlate, setImagePlate] = useState(null)


  const [erroMensagem, setErroMensagem] = useState("")


  const [show, setShow] = useState(false);

  const [carsApi, setCarsApi] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // setStates para a listagem das informaçoes do veiculo
  const [infoCarro, setCarro] = useState([])

  const [variantChoose, setVariantChoose] = useState("")




  const variant = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      {erroMensagem}
    </Alert>
  ))


  // buscar os carros do usuário
  function limparCampos() {
    setPlate("")
    setColor("")
    setYear("")
    setCity("")
    setModel("")
    setBrand("")
    setImagePlate(null)
    setVariantChoose("")
    setErroMensagem("")
  }


  function PostCarAutomatically(carsApi) {
    axios.post('http://localhost:5000/api/Car', {
      plate: carsApi.placa,
      color: carsApi.cor,
      year: carsApi.ano,
      city: carsApi.municipio,
      model: carsApi.modelo,
      brand: carsApi.marca,
      idUser: parseJwt().jti
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then(response => {
        if (response === 200) {
          GetCarros();
          setErroMensagem("Véiculo cadastrado com sucesso!")
          setVariantChoose("success")
        }
      })

      .catch(() => setErroMensagem("Erro ao cadastrar veículo"), setVariantChoose("danger"))
  }


  async function GetCarsFromApiCarros(plateRight) { //Pega informações do carro da API MOCKADA

    console.log(plateRight)

    const res = await axios.get('http://localhost:5001/v1/consulta/' + plateRight, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

    console.log(res.data)

  

        setErroMensagem("Busca em base de dados da sinesp realizada com sucesso!")
        setVariantChoose("success")

         PostCarAutomatically(res.data);

         GetCarros();

  }

   function GetPlateFromAPI() {
    // PEGA O VALOR DA PLACA ANALIZADA PELA IA

     axios.get('http://localhost:5000/api/user/plate', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then(response => {
        if (response.status === 200) {

          

          if(response.data.split('-') != null){
              var plate1 = response.data.split('-')[0]
              var plate2 = response.data.split('-')[1]
              let plateRight = plate1 + plate2;

              GetCarsFromApiCarros(plateRight)
          } else{
              let plateRight = response.data;
              GetCarsFromApiCarros(plateRight)
          }
         
        }
      })

      .catch(() => setErroMensagem("Erro ao pegar informações do usuário!"), setVariantChoose("danger"))
  }

  async function PostImagePlate(event) { //CADASTRA E ANALISA A IMAGEM E GERA O RESULTADO DA PLACA ANALISADA

    event.preventDefault();

    if (ImagePlate !== null) {

      const fd = new FormData();
      fd.append('imagePlate', ImagePlate)

      const responseImage = axios.put('http://localhost:5000/api/upload/upload-image', fd, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
        }
      })


      if((await responseImage).status === 200){
        axios.get('http://localhost:5000/api/analyze', {
             headers: {
               'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
           })

             .then(resposta => {
               if (resposta.status === 200) {
                 GetPlateFromAPI()
               }
             })
      }

            //

    } else {
      console.log('Nenhum arquivo foi selecionado!')
    }

  }

  // Funcionando
  async function PostInfoCarro(event) {

    event.preventDefault();

    await axios.post('http://localhost:5000/api/Car', {

      plate: Plate,
      color: Color,
      year: Year,
      city: City,
      model: Model,
      brand: Brand,
      idUser: parseJwt().jti
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })
      .then(resposta => {
        if (resposta.status === 200) {
          setErroMensagem("Veículo cadastrado!")
          setVariantChoose("success")
          GetCarros();
          limparCampos()
        }
      })
      .catch(() =>
        setErroMensagem("Carro não cadastrado!"),
        setVariantChoose("danger")
      )
  };




  function deleteCar(cars) {
    axios.delete('http://localhost:5000/api/car/ ' + cars.idCar, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then(response => {
        if (response.status === 202) {
          GetCarros();
        }
      })

      .catch((erro) => { console.log(erro) })
  }



  async function GetCarros() {
    await axios.get('http://localhost:5000/api/Car/mycar', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })
      .then(response => {
        if (response.status === 200) {
          setCarro(response.data)
          limparCampos()

        }
      })
      .catch((erro) => console.log(erro))
  }

  useEffect(() => GetCarros(), [])

  // funções para ciclos de vida 

  return (
    <div>
      <Helmet>
        <title>Informações do carro</title>
      </Helmet>

      <div className="icon_wpp">

                <a alt="Entre em contato conosco!" href="https://web.whatsapp.com/send?phone=5511977208248" target="_blank">

                <AiIcons.AiOutlineWhatsApp size={60} style={{ color: '#fff' }} />
                
                </a>
        </div>

      <Navbar />
      <div className="dashboard">

        <div className="dashboard_fonte">
          <h2 className="titulo">Seus Carros</h2>
        </div>
        {
          infoCarro.map((cars) => {
            return (
              <div className="lista" key={cars.idCar}>
                <p>Placa: {cars.plate}</p>
                <p>Marca: {cars.brand}</p>
                <p>Modelo: {cars.model}</p>
                <p>Cor: {cars.color}</p>
                <p>Ano: {cars.year}</p>
                <p><BsTrash onClick={() => deleteCar(cars)} style={{ cursor: "pointer" }} size={25} /></p>
              </div>
            )
          })
        }

        <button style={{ width: 200, height: 60 }} onClick={handleShow} className="btnAdd" >Cadastrar novo veiculo</button>

        <Modal style={{ marginRight: '20px' }} show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title><p className="p-title-modal">Cadastrar novo veículo</p></Modal.Title>
          </Modal.Header>
          <form onSubmit={ImagePlate === null ? PostInfoCarro : PostImagePlate}>
            <Modal.Body className="modalBody">
              <div className="linha-input-3">
                <input type="text" name={Plate} value={Plate} onChange={(event) => { setPlate(event.target.value) }} placeholder="Placa do carro: " />
                <input type="text" name={Model} value={Model} onChange={(event) => { setModel(event.target.value) }} placeholder="Modelo: " />
              </div>
            </Modal.Body>
            <Modal.Body className="modalBody">
              <div className="linha-input-3">
                <input type="text" name={Brand} value={Brand} onChange={(event) => { setBrand(event.target.value) }} placeholder="Marca: " />
                <input type="text" name={Color} value={Color} onChange={(event) => { setColor(event.target.value) }} placeholder="Cor: " />
              </div>
            </Modal.Body>
            <Modal.Body className="modalBody">
              <div className="linha-input-3">
                <input type="text" name={Year} value={Year} onChange={(event) => { setYear(event.target.value) }} placeholder="Ano do modelo: " />
                <input type="text" name={City} value={City} onChange={(event) => { setCity(event.target.value) }} placeholder="Município: " />
              </div>
            </Modal.Body>
            <Modal.Body className="modalBody">
              <h2 style={{ textAlign: 'center', marginTop: 10, marginBottom: 60, fontSize : 18 }}>OU SELECIONE UMA IMAGEM DE SUA PLACA</h2>
              <div className="linha-input-3">

                <input type="file" name={ImagePlate} onChange={(e) => setImagePlate(e.target.files[0])} placeholder="Imagem: " />
                <button className="btnAdd" type="submit">ADICIONAR</button>
              </div>
            </Modal.Body>
          </form>
        </Modal>
        <Alert style={{ margin: '0px auto', width: '40%', height: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} variant={variantChoose}>
          <p style={{ padding: '35px auto', color:'red' }}>{erroMensagem}</p>
        </Alert>

      </div>
    </div>
  )
}