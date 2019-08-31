import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase3 from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASTruP-Nq-dNn7b13jGTT2K3jey5QdHhg",
    authDomain: "irrigatic-react.firebaseapp.com",
    databaseURL: "https://irrigatic-react.firebaseio.com",
    projectId: "irrigatic-react",
    storageBucket: "",
    messagingSenderId: "823847268337",
    appId: "1:823847268337:web:dfb6b9a4dfe7d3d7"
  };

  firebase3.initializeApp(firebaseConfig)

class Fertilizante extends Component{
constructor(){
    super()
    this.state = {
        fertilizante: 'fertilizante-IrrigaTIC'
    }
}

componentWillMount(){
    const ferRef = firebase3.database().ref().child('object').child('fertilizante')
    ferRef.on('value', (snapshot) =>{
        this.setState({
            fertilizante: snapshot.val()
        })
    })
}

    render(){
    return (
        <div className="container">
            <h3>Fertilizante -->🌱 {this.state.fertilizante} 🌱</h3>
        </div>
    );    
}
}


export default Fertilizante; 
