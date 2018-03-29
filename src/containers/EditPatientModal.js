import React from 'react'
import {getPatient} from './helpers/getPatients'
import {editPatient} from "../actions";
import {connect} from "react-redux";

const EditPatientModal = ({ patientToEdit, dispatch }) => {

  // TODO: hacer que los values del form sean values y no placeholders

  let firstName, lastName, os, osNum, day, sessions, form;

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
        <form ref={node => form = node} onSubmit={e => {
          e.preventDefault();
          const newPatient = Object.assign(getPatient({firstName, lastName, os, osNum, day, sessions, defaultValues:patientToEdit}), {id: patientToEdit.id});
          dispatch(editPatient(newPatient));
          form.reset()
        }}>
          <div className="modal-body">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" className="form-control" id="firstName" name="firstName" placeholder={patientToEdit.firstName} ref={node => firstName = node} />
            </div>

            <div className="form-group">
              <label>Apellido</label>
              <input type="text" className="form-control" id="lastName" name="lastName" placeholder={patientToEdit.lastName} ref={node => lastName = node} />
            </div>

            <div className="form-group">
              <label>Obra social / Prepaga</label>
              <input type="text" className="form-control" id="os" name="os" placeholder={patientToEdit.os} ref={node => os = node} />
            </div>

            <div className="form-group">
              <label>Nro OS/Prepaga</label>
              <input type="number" className="form-control" id="osNum" name="osNum" placeholder="Numero de socio de la Obra Social o Prepaga" ref={node => osNum = node} />
            </div>

            <div className="form-group">
              <label>Nro de sesiones</label>
              <input type="number" className="form-control" id="sessionNumbers" name="sessionNumbers" placeholder={patientToEdit.sessions} ref={node => sessions = node} />
            </div>

            <div className="form-group">
              <label>Día de sesión</label>
              <select defaultValue={patientToEdit.day} className="form-control form-control-lg" id="day" name="day" ref={node => day = node}>
                <option value="monday">Lunes</option>
                <option value="tuesday">Martes</option>
                <option value="wednesday">Miércoles</option>
                <option value="thursday">Jueves</option>
                <option value="friday">Viernes</option>
                <option value="saturday">Sábado</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
};

export default connect()(EditPatientModal)
