import React from 'react'
import {getPatient} from './helpers/getPatients'
import {editPatient} from "../actions";
import {connect} from "react-redux";

class EditPatientModal extends React.Component {
  constructor(props) {
    super(props);
    const patient = this.props.patientToEdit;
    this.state = {
      firstName:'',
      lastName: '',
      os:'',
      osNum: 0,
      sessions: 0,
      day: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return (event) => {
      const currentState = this.state;

      this.setState({...currentState, [key]: event.target.value.toUpperCase()});
      //this.setState(ps => ({...ps, [key]: event.target.value}));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newPatient = this.state;
    this.props.dispatch(editPatient(newPatient));
  }

  componentWillReceiveProps(nextProps){
    const p = nextProps.patientToEdit;
    this.setState({...p})
  }

  render (){
    console.log(this.state.day)
    return (
      <div id="editPatientModal" className="modal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Paciente</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} className="form-control" id="firstName" name="firstName" />
                </div>

                <div className="form-group">
                  <label>Apellido</label>
                  <input type="text" value={this.state.lastName} onChange={this.handleChange('lastName')} className="form-control" id="lastName" name="lastName" />
                </div>

                <div className="form-group">
                  <label>Obra social / Prepaga</label>
                  <input value={this.state.os} onChange={this.handleChange('os')} type="text" className="form-control" id="os" name="os" />
                </div>

                <div className="form-group">
                  <label>Nro OS/Prepaga</label>
                  <input type="number" value={this.state.osNum} onChange={this.handleChange('osNum')} className="form-control" id="osNum" name="osNum" />
                </div>

                <div className="form-group">
                  <label>Nro de sesiones</label>
                  <input type="number" value={this.state.sessions} onChange={this.handleChange('sessions')} className="form-control" id="sessionNumbers" name="sessionNumbers" />
                </div>

                <div className="form-group">
                  <label>Día de sesión</label>
                  <select value={this.state.day} onChange={this.handleChange('day')} className="form-control form-control-lg" id="day" name="day">
                    <option value="1">Lunes</option>
                    <option value="2">Martes</option>
                    <option value="3">Miércoles</option>
                    <option value="4">Jueves</option>
                    <option value="5">Viernes</option>
                    <option value="6">Sábado</option>
                  </select>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" onClick={this.handleSubmit} className="btn btn-primary" data-dismiss="modal">Guardar</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {patientToEdit:state.edition.patientToEdit}
};

export default connect(mapStateToProps)(EditPatientModal)


/*
*
console.log(this.state);
    const patientToEdit = this.props.patientToEdit;
    let firstName, lastName, os, osNum, day, sessions, form;
    console.log(this.state.patient)

* */
