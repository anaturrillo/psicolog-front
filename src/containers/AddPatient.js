import React from 'react'
import { connect } from 'react-redux'
import { addPatient } from '../actions'
import {getPatient} from './helpers/getPatients'

const AddPatient = ({ dispatch }) => {
  let firstName, lastName, os, osNum, day, sessions, form;

  return (
    <form ref={node => form = node} onSubmit={e => {
      e.preventDefault();
      dispatch(addPatient(getPatient({firstName, lastName, os, osNum, day, sessions})));
      form.reset()
    }}>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Ingresar nombre" ref={node => firstName = node} />
      </div>

      <div className="form-group">
        <label>Apellido</label>
        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Ingresar Apellido" ref={node => lastName = node} />
      </div>

      <div className="form-group">
        <label>Obra social / Prepaga</label>
        <input type="text" className="form-control" id="os" name="os" placeholder="Nombre de la Obra Social o Prepaga" ref={node => os = node} />
      </div>

      <div className="form-group">
        <label>Nro OS/Prepaga</label>
        <input type="number" className="form-control" id="osNum" name="osNum" placeholder="Numero de socio de la Obra Social o Prepaga" ref={node => osNum = node} />
      </div>

      <div className="form-group">
        <label>Nro de sesiones</label>
        <input type="number" className="form-control" id="sessionNumbers" name="sessionNumbers" placeholder="Numero de sesiones" ref={node => sessions = node} />
      </div>

      <div className="form-group">
        <label>Día de sesión</label>
        <select className="form-control form-control-lg" id="day" name="day" ref={node => day = node}>
          <option value="1">Lunes</option>
          <option value="2">Martes</option>
          <option value="3">Miércoles</option>
          <option value="4">Jueves</option>
          <option value="5">Viernes</option>
          <option value="6">Sábado</option>
        </select>
      </div>


      <button type="submit">
        Agregar paciente
      </button>
    </form>
  )
};

export default connect()(AddPatient)
