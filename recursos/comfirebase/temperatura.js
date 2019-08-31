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

class temperatura extends Component{
constructor(){
    super()
    this.state = {
    
        temperatura: 'temperatura-IrrigaTIC',
   
    }
}

componentWillMount(){
 
    const tempRef = firebase.database().ref().child('object').child('temperatura')
    tempRef.on('value', (snapshot) =>{
        this.setState({
            temperatura: snapshot.val()
        })
    })
   
}

    render(){
    return (
        <div className="container">
       
    <h1>Temperatura --> 🔥 {this.state.temperatura} 🔥</h1>

        </div>
    );    
}
}


export default temperatura; 
