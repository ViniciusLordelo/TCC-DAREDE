import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IoLogOutOutline as Sair} from 'react-icons/io5'
import {BiCar as CarIcon} from "react-icons/bi"
import {AiOutlineHome as Home} from "react-icons/ai"
import {AiFillBook as Book} from "react-icons/ai"
import {BsFillPersonFill as Person} from "react-icons/bs";
import {MdCleaningServices as ServicoIcon} from 'react-icons/md' 
import {IoLogoModelS as ModelCar} from 'react-icons/io'

export const SidebarDataAdm = [
    {
        icon : <Home size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Home',
        path: "/",
        cName: 'nav-text'
    },

    {
        icon : <Book size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Orçamento',
        path: "/dashboardadmin",
       
        cName: 'nav-text'
    },

    {
        icon : <ServicoIcon size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Cadastrar serviços',
        path: "/cadastrarservico",
       
        cName: 'nav-text'
    },

    {
        icon : <Person size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Usuários',
        path: "/usuarios",
       
        cName: 'nav-text'
    },

    {
        icon : <CarIcon size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Marcas',
        path: "/marcas",
       
        cName: 'nav-text'
    },

    {
        icon : <ModelCar size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Modelos',
        path: "/modelos",
       
        cName: 'nav-text'
    },

    {
        icon : <Sair size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Sair',
        path: '/login',
        cName: 'nav-text'
    }
]

export default SidebarDataAdm;