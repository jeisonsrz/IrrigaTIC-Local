import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import indexAdmin from './indexAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './layouts/Admin';
import jsonDatos from "./data/datos.json";
import jsonDatosInsumosAnimales from "./data/datosInsumosA.json";
import jsonDatosInsumosAgroquimicos from "./data/datosAgroquimicos.json";
import jsonDatosTemp from "./data/datosTemYh.json";
import Mediciones from "./components/mediciones";



if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {

  state = {instituciones: [], InsumosAnimales: [], InsumosAgroquimicos:[],Temp:[]};
  componentWillMount(){
    this.setState({instituciones: jsonDatos,InsumosAnimales: jsonDatosInsumosAnimales,InsumosAgroquimicos: jsonDatosInsumosAgroquimicos, Temp: jsonDatosTemp});
    }


  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
               
               <Route exact path="/" component={ Home } />
               <Route path="/admin" component={Admin} />
               <Route path="/admin/mediciones2" render={()=>{
                       return(<Mediciones   Temp1={this.state.Temp}  ></Mediciones>) 

                    }
                    } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                 
                </div>
            </div>
          
          </Router>
         
          
        </Provider>
    );
  }
}

export default App;
