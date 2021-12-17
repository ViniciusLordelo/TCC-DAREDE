import './notfound.css'
import image from '../../assets/3828537.jpg'
import wave from '../../assets/wave-not.svg'
import { ReactDOM } from 'react';
import React from 'react';

export default function notFound(){
    return(
        <div className="divBody">
             <img className="wave" src={wave} />
            <div className="container">
           
                <h2> 404 || NOTFOUND </h2>
                <img className="img-404" src={image} alt="Not found" />
            </div>
        </div>
    );
}