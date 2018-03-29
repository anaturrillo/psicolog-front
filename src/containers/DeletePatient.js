import React from 'react'
import { connect } from 'react-redux'
import { deletePatient } from '../actions'

const DeletePatient = (props) => {
  return (
    <button onClick={() => props.dispatch(deletePatient(props.patientId))}>
      Borrar
    </button>
  )
};

export default connect()(DeletePatient)
