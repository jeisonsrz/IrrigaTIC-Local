import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase2 from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASTruP-Nq-dNn7b13jGTT2K3jey5QdHhg",
    authDomain: "irrigatic-react.firebaseapp.com",
    databaseURL: "https://irrigatic-react.firebaseio.com",
    projectId: "irrigatic-react",
    storageBucket: "",
    messagingSenderId: "823847268337",
    appId: "1:823847268337:web:dfb6b9a4dfe7d3d7"
  };

  firebase2.initializeApp(firebaseConfig)

class Humedad extends Component{
constructor(){
    super()
    this.state = {
        humedad: 'humedad-IrrigaTIC',
    }
}

componentWillMount(){
        const humRef = firebase2.database().ref().child('object').child('humedad')
    humRef.on('value', (snapshot) =>{
        this.setState({
            humedad: snapshot.val()
        })
    })
}

    render(){
    return (
        <div className="container">
           <h3>Humedad -->🌊 {this.state.humedad} 🌊</h3>
        </div>
    );    
}
}


export default Humedad; 
