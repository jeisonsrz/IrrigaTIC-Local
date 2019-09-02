import React, { Component } from 'react';
import img1 from '../assets/img/3dprint.jpg'
import img2 from '../assets/img/hardware.jpg';
import img3 from '../assets/img/automatizacion.jpg';
import img4 from '../assets/img/ecommerce.jpg';
import Slider1 from '../assets/img/fondo4.jpg';
import "./styles/Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="text-center">
       
            <br/><br /><br />
            <img  src={Slider1} alt="First slide" height="auto" widht="100%" />
            <div className="text-center">
              <h1>SERVICIOS</h1>
              <div className="row">
                <div className="col-6">
                    <h1>Impresion 3d</h1>
                    <p className="text-justify">Ayudamos a darle reconocmiento a tu marca personal u organizacion, te Ayudamos
                      a regalar creatividad u obtener un objeto personalizado. Precios flexifles
                    </p>
                </div>
                <div className="col-6">
                  <img  src={img1} alt="First slide" height="auto" widht="50%"/>
                </div>
                <hr />
                <div className="col-6">
                  <img  src={img2} alt="First slide" height="auto" widht="100%"/>
                </div>
                <div className="col-6">
                    DESARROLLO SOFTWARE Y HARDWARE
                </div>
                <hr />
                <div className="col-6">
                    AUTOMATIZACION E IOT
                </div>
                <div className="col-6">
                  <img  src={img3} alt="First slide" height="auto" widht="100%"/>
                </div>
                <hr />
                <div className="col-6">
                  <img  src={img4} alt="First slide" height="auto" widht="100%"/>
                </div>
                <div className="col-6">
                  E - COMMERCE
                </div>
              </div>
            </div>
            <div>

            </div>

        </div>
        );
    }
}