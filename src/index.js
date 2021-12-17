import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login/Login';
import cadastro from './pages/Cadastro/cadastro';
import Home from './pages/Inicial/home';
import dashboardClienteOrçamento from './pages/dashboardClienteOrçamento/dashboardClienteOrçamento';
import infoCarro from './pages/dashboardClienteOrçamento/infoCarro';
import Perfil from './pages/dashboardClienteOrçamento/Perfil'

import OrcamentoAdmin from './pages/dashboardAdmin/orcamentoAdmin';
import ServicoAdmin from './pages/dashboardAdmin/servicoAdmin';
import Usuario from './pages/dashboardAdmin/usuarios';
import Marca from './pages/dashboardAdmin/marcas';

import {Component} from 'react'

import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';
import Modelos from './pages/dashboardAdmin/modelo';
import notFound from './pages/NotFound/notfound';

const Permissao = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Administrador
      usuarioAutenticado() && parseJwt().role === "1" || usuarioAutenticado() && parseJwt().role === "2"  ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = '/' />
    }
  />
);

const PermissaoAdm = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Administrador
      usuarioAutenticado() && parseJwt().role === "1"   ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = '/' />
    }
  />
);

/*
 const routing = (
   <Router>
     <div>
         <Switch>
           <Route exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.co/login" component={Login}/>
           <Route exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/cadastro" component={cadastro}/>
           <Route exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/home" component={Home}/>
           <Permissao exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/dashboardcliente" component={dashboardClienteOrçamento}/>
           <Permissao exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/infoCarro" component={infoCarro} />
           <Permissao exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/perfil" component={Perfil} />
           <PermissaoAdm exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/dashboardAdmin" component={OrcamentoAdmin} />
           <PermissaoAdm exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/cadastrarservico" component={ServicoAdmin} />
           <PermissaoAdm exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/usuarios" component={Usuario} />
           <PermissaoAdm exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/marcas" component={Marca} />
           <PermissaoAdm exact path="http://doisirmaosdarede.s3-website-us-east-1.amazonaws.com/modelos" component={Modelos} />
         </Switch>
     </div>
   </Router>
 );
*/

 const routing = (
   <Router>
     <div>
         <Switch>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/cadastro" component={cadastro}/>
           <Route exact path="/" component={Home}/>
           <Permissao exact path="/dashboardcliente" component={dashboardClienteOrçamento}/>
           <Permissao exact path="/infoCarro" component={infoCarro} />
           <Permissao exact path="/perfil" component={Perfil} />
           <PermissaoAdm exact path="/dashboardAdmin" component={OrcamentoAdmin} />
          <PermissaoAdm exact path="/cadastrarservico" component={ServicoAdmin} />
          <PermissaoAdm exact path="/usuarios" component={Usuario} />
           <PermissaoAdm exact path="/marcas" component={Marca} />
           <PermissaoAdm exact path="/modelos" component={Modelos} />
           <Route exact path="/notfound" component={notFound} />
           <Redirect to="/notfound" />
        </Switch>
     </div>
   </Router>
);
 
ReactDOM.render( routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();