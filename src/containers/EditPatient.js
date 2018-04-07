import React from 'react'
import {getPatient} from './helpers/getPatients'
import {editPatient} from "../actions";
import {connect} from "react-redux";
import {Button} from "react-bootstrap"

class EditPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      patient :{
        firstName:'',
        lastName: '',
        os:'',
        osNum: 0,
        sessions: 0,
        day: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this)
  }

  handleChange(key) {
    return (event) => {
      const currentState = this.state;
      const patient = this.state.patient;

      this.setState({
        ...currentState,
        patient:{
          ... patient,
          [key]: event.target.value.toUpperCase()
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newPatient = this.state.patient;
    this.props.dispatch(editPatient(newPatient));
  }

  hideForm(event){
    const currentState = this.state;
    this.setState({
      ...currentState,
        visible: false
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      patient: nextProps.patientToEdit,
      visible: nextProps.editionVisible
    })
  }

  render (){
    if (this.state.visible){
      return (
        <div>
          <h3>Editar los datos de {this.state.patient.firstName} {this.state.patient.lastName}</h3>
          <form>
            <div className="modal-body">
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" value={this.state.patient.firstName} onChange={this.handleChange('firstName')} className="form-control" id="firstName" name="firstName" />
              </div>

              <div className="form-group">
                <label>Apellido</label>
                <input type="text" value={this.state.patient.lastName} onChange={this.handleChange('lastName')} className="form-control" id="lastName" name="lastName" />
              </div>

              <div className="form-group">
                <label>Obra social / Prepaga</label>
                <input value={this.state.patient.os} onChange={this.handleChange('os')} type="text" className="form-control" id="os" name="os" />
              </div>

              <div className="form-group">
                <label>Nro OS/Prepaga</label>
                <input type="number" value={this.state.patient.osNum} onChange={this.handleChange('osNum')} className="form-control" id="osNum" name="osNum" />
              </div>

              <div className="form-group">
                <label>Nro de sesiones</label>
                <input type="number" value={this.state.patient.sessions} onChange={this.handleChange('sessions')} className="form-control" id="sessionNumbers" name="sessionNumbers" />
              </div>

              <div className="form-group">
                <label>Día de sesión</label>
                <select value={this.state.patient.day} onChange={this.handleChange('day')} className="form-control form-control-lg" id="day" name="day">
                  <option value="1">Lunes</option>
                  <option value="2">Martes</option>
                  <option value="3">Miércoles</option>
                  <option value="4">Jueves</option>
                  <option value="5">Viernes</option>
                  <option value="6">Sábado</option>
                </select>
              </div>
              <div className="right">
                <Button onClick={this.handleSubmit} className="very light blue">Guardar</Button>
                <Button onClick={this.hideForm}>Cancelar</Button>
              </div>

            </div>
          </form>
        </div>
      )
    } else {
      return (null)
    }

  }

}

const mapStateToProps = state => {
  return {
    patientToEdit:state.edition.patientToEdit,
    editionVisible:state.edition.editionVisible
  }
};

export default connect(mapStateToProps)(EditPatient)
