import React from "react";
import "./styles/Inicio.css";
import Slider1 from "../assets/images/contactanos.jpg";
import img1 from "../assets/images/3dprint.jpg";
import img2 from "../assets/images/hardware.jpg";
import img3 from "../assets/images/automatizacion.jpg";
import img4 from "../assets/images/ecommerce.jpg";

class Contacto extends React.Component {
  render() {
    return (
      <div className=" container text-center">
        <img src={Slider1} alt="First slide" height="auto" widht="100%" />
        <div className="text-center">
          <h1>Contáctanos</h1>
          <div className="row">
            <div className="col-6">
              {/* onSubmit={this.handleSubmit} */}
              <form>
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    //   onChange={this.props.onChange}
                    className="form-control"
                    type="text"
                    name="firstName"
                    //   value={this.props.formValues.firstName}
                  />
                </div>

                <div className="form-group">
                  <label>Apellido</label>
                  <input
                    //   onChange={this.props.onChange}
                    className="form-control"
                    type="text"
                    name="lastName"
                    //   value={this.props.formValues.lastName}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    //   onChange={this.props.onChange}
                    className="form-control"
                    type="email"
                    name="email"
                    //   value={this.props.formValues.email}
                  />
                </div>

                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    //   onChange={this.props.onChange}
                    className="form-control"
                    type="text"
                    name="jobTitle"
                    //   value={this.props.formValues.jobTitle}
                  />
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
            <div className=" text-center col-6">
              <h1>Mas Informacion</h1>
              <p>
                  Correo: eurekatechnology.popayan@gmail.com
              </p>
              <p>
                Facebook: Eureka Techngology
              </p>
              <p>
                Instagram: @impresiones3d
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
