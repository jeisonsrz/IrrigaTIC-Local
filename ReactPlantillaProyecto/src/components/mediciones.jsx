import React,{Component} from 'react';
import {CardGroup,Icon} from "semantic-ui-react";
// import InsumosAnimales from "./InsumosAnimales"
import DistribucionMaiz from './DistribucionMaiz';
// import Instituciones from "./instituciones"
class Mediciones extends Component{
    state = { activeItem: 'mediciones' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    
  
    render(){
        // const { activeItem } = this.state
        return(

            <div>
                <h2 align="center">Bienvenido a IRRIGATIC🍅Mediciones Tomate🍅</h2>
                
       
               
              <Icon  align="center" name='wifi' />
              Inicio <strong> Mediciones Tomate🍅</strong>
       

                <CardGroup> 
                {this.props.Temp1.map(TempyH => {
                return <DistribucionMaiz Temp12={TempyH} />;
            })}
                </CardGroup>
                
              

            </div>
            
        );

    }

}

export default Mediciones;