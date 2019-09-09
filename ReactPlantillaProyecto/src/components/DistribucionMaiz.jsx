import React,{Component} from 'react';
import {Card,Image,Icon,Form} from "semantic-ui-react";
import Modal from './Modal.jsx'
import Gauge from 'react-svg-gauge';

function ImgSwitch(props){
  const id = props.num;
  if(id<10){
    return  <Image floated='right' size='mini' src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c19d.png'/>;
  }else if(id>10&&id<30){
    return  <Image floated='right' size='mini' src='https://images.vexels.com/media/users/3/141056/isolated/preview/cfbe871d307b2230bcfd92f486bc8505-naranja-realista-by-vexels.png'/>;
  }else if(id>30&&id<40){
    return  <Image floated='right' size='mini' src='http://www.agrofresh.es/wp-content/uploads/2018/03/Sandia.png'/>;
  }else if(id>40&&id<50){
    return  <Image floated='right' size='mini' src='http://www.interempresas.net/FotosArtProductos/P84024.jpg'/>;
  }else if(id>50&&id<60){
    return  <Image floated='right' size='mini' src='https://www.farmavazquez.com/45507-large_default/juanola-jalea-real-ninos-apetito-jarabe-150-ml.jpg'/>;
  }
  else if(id>60&&id<70){
    return  <Image floated='right' size='mini' src='https://http2.mlstatic.com/afford-novul-anticonceptivos-x-400-comprimidos-para-perro-D_NQ_NP_656282-MLA28550440998_112018-F.jpg'/>;
  }
  else{
    return  <Image floated='right' size='mini' src='http://www.agrofresh.es/wp-content/uploads/2018/03/Sandia.png'/>;
  }
  
  
}



class DistribucionMaiz extends Component{
  state = { activeItem: 'instituciones' }
  state = { Temp: this.props.Temp12.temperatura_c }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
 
  
    render(){
      const { Temp } = this.state

        return(
   
      <Card>
        
      <Card.Content>
      <ImgSwitch num={this.props.Temp12.n_mero}></ImgSwitch>
       <Card.Header><Icon name='theme' />Humedad->{this.props.Temp12.humedad_relativa_hr}</Card.Header>
       
        <Card.Meta> <Icon name='thermometer empty' />Temperatura->{this.props.Temp12.temperatura_c + "**"}</Card.Meta>
        <Card.Description>
          Fecha:<strong>{this.props.Temp12.fecha_y_hora}</strong>
          <Gauge
                value={this.state.Temp}
                width={200}
                height={160}
                label="Temperatura ºC"
                valueFormatter={value => {
                  if (value > 80) {
                    return '🔥☕';
                  }

                  if (value > 35) {
                    return '😁';
                  }

                  return '😓';
                }} />

<Form.Input
              label={`Temperatura: ${Temp}ºc `}
              min={0}
              max={100}
              name='Temp'
              onChange={this.handleChange}
              step={1}
              type='range'
              value={Temp}
            />
        </Card.Description>
       
      </Card.Content>
      <Card.Content extra>
   
          <Modal basic color='green'></Modal>
         
         
      </Card.Content>
    </Card>
 
            
        );

    }

}

export default DistribucionMaiz;