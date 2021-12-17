import React from 'react';
import {AiOutlineHome as Home} from "react-icons/ai"
import {AiFillBook as Book} from "react-icons/ai"
import {BiCar as CarIcon} from "react-icons/bi"
import {BsFillPersonFill as Person} from "react-icons/bs";
import {IoLogOutOutline as Sair} from 'react-icons/io5'

export const SidebarData = [
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
        path: "/dashboardcliente",
       
        cName: 'nav-text'
    },

    {
        icon : <CarIcon size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Informações do carro',
        path: "/infoCarro",
       
        cName: 'nav-text'
    },

    {
        icon : <Person size={30} style={
            {
                color : 'white',
                paddingRight : 5
            }} 
                />,
        title: 'Perfil',
        path: "/perfil",
       
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

export default SidebarData;