import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASTruP-Nq-dNn7b13jGTT2K3jey5QdHhg",
    authDomain: "irrigatic-react.firebaseapp.com",
    databaseURL: "https://irrigatic-react.firebaseio.com",
    projectId: "irrigatic-react",
    storageBucket: "",
    messagingSenderId: "823847268337",
    appId: "1:823847268337:web:dfb6b9a4dfe7d3d7"
  };

  firebase.initializeApp(firebaseConfig)

class Firebase extends Component{
constructor(){
    super()
    this.state = {
        ubicacion: 'Eureka! Technology',
        temperatura: 'temperatura-IrrigaTIC',
        humedad: 'humedad-IrrigaTIC',
        fertilizante: 'fertilizante-IrrigaTIC'
    }
}

componentWillMount(){
    const ubiRef = firebase.database().ref().child('object').child('ubicacion')
    ubiRef.on('value', (snapshot) =>{
        this.setState({
            ubicacion: snapshot.val()
        })
    })
    const tempRef = firebase.database().ref().child('object').child('temperatura')
    tempRef.on('value', (snapshot) =>{
        this.setState({
            temperatura: snapshot.val()
        })
    })
    const humRef = firebase.database().ref().child('object').child('humedad')
    humRef.on('value', (snapshot) =>{
        this.setState({
            humedad: snapshot.val()
        })
    })

    const ferRef = firebase.database().ref().child('object').child('fertilizante')
    ferRef.on('value', (snapshot) =>{
        this.setState({
            fertilizante: snapshot.val()
        })
    })
}

    render(){
    return (
        <div className="container">
        <h1>Ubicación Modulo IrrigaTIC -->🌎📡 {this.state.ubicacion} 🌎📡</h1>
    <h1>Temperatura --> 🔥 {this.state.temperatura} 🔥</h1>
    <h1>Humedad -->🌊 {this.state.humedad} 🌊</h1>
    <h1>Fertilizante -->🌱 {this.state.fertilizante} 🌱</h1>
        </div>
    );    
}
}


export default Firebase; 
