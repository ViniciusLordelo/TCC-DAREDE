import './home.css'
import React from 'react'
import fundohome from "../../assets/fundohome.png"
import lamborghini from "../../assets/lamborghini.png"
import sobre1 from '../../assets/qu9XY-kl1oU.png'
import sobre2 from '../../assets/G6sI_6B_FFY.png'
import Carousel from 'react-bootstrap/Carousel'
import { useState} from 'react'
import card3 from '../../assets/image5.png'
import card1 from '../../assets/image3.png'
import card2 from '../../assets/image4.png'
import mapa from '../../assets/image1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as AiIcons from 'react-icons/ai';
import { ReactDOM } from 'react';

import { Helmet } from 'react-helmet';


export default function Home() {

  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  

  return (
    <div className="home">

            <Helmet>
                <title>Home - FD</title>
            </Helmet>

      <div className="icon_wpp">

        <a href="https://web.whatsapp.com/send?phone=5511977208248" target="_blank">

          <AiIcons.AiOutlineWhatsApp size={60} style={{ color: '#fff' }} />

        </a>
      </div>

      <div className="menu">
        <div className="logo"><h2>2 IRMÃOS</h2></div>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servico">Serviços</a></li>
          <li><a href="#localizacao">Localização</a></li>
          <li><a href="/login">Login/Cadastre-se</a></li>
        </ul>

      </div>

      <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-img">
          <img
            className="d-block w-100"
            src={fundohome}
            alt="First slide"
          />
          <Carousel.Caption className="h3-carousel">
            <h3 className="titulo">ORÇAMENTO</h3>
            <p>Faça seu orçameto em segundos!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lamborghini}
            alt="Second slide"
            className="lambo"
          />

          <Carousel.Caption className="h3-carousel">
            <h3 className="titulo">A MELHOR FUNILARIA DE SÃO PAULO</h3>
            <p>Venha nos conhecer! Ficamos próximo à Avenida Paulista!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div id="sobre" className="sobre">
        <h2 className="titulo">Sobre nós</h2>
        <div className="sobre-1">
          <img src={sobre1} className="fundo-sobre" alt="Funileiro" />
          <div className="sobre-p">
            <p>
              Criada em 2012 por Muriel Martins e Gustavo Mainchein, somando seus talentos com a sua paixão por veículos, decidiram criar a <strong>DAREDE Funilaria.</strong> Esta empresa tem o objetivo de misturar a velocidade e baixo custo com a qualidade extrema nos serviços prestados aos clientes, que é nossa maior prioridade.
            </p>
          </div>
        </div>
        <div className="sobre-2">
          <img src={sobre2} className="fundo-sobre2" alt="Funileiro" />
          <div className="sobre-p">
            <p>
              Dentro da funilaria <strong>2 irmãos</strong> você pode encontrar os mais variados serviços para seu automóvel, nossos funcionários são extremamente qualificados para os serviços que prestamos.
            </p>
          </div>
        </div>
        </div>
      <section className="sec-service">
        <h2 id="servico" className="titulo">Serviços</h2>
          <div className="cards">
            <div className="card-serv">
              <img src={card1} alt="Funilaria" />
              <h4>Funilaria</h4>
              <p>
                Trabalhamos com todo o serviço de funilaria.
              </p>
            </div>
            <div className="card-serv1">
              <img src={card2} alt="Funilaria" />
              <h4>Pintura</h4>
              <p>
                Realizamos a pintura de seu veículo.
              </p>
            </div>
            <div className="card-serv1">
            <img src={card3} alt="Funilaria" />
              <h4>Manutenção veícular</h4>
              <p>
                Realizamos polimento e espelhamento em seu veiculo
              </p>
            </div>
          </div>
        </section>

          <h3 id="localizacao" className="titulo">Nossa localização</h3>

          <div className="localizacao">
            <img src={mapa} alt="Nossa localização"  />
          </div>

        <footer>
          <nav className="nav-footer">
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servico">Serviços</a></li>
              <li><a href="#localizacao">Localizacao</a></li>
              <li><a href="/cadastro">Login/Cadastre-se</a></li>
            </ul>
          </nav>
          <div className="logo"><h2>2 IRMÃOS</h2></div>
        </footer>
      </div>
  )
}
