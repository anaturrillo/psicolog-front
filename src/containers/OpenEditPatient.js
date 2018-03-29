import React from 'react'
import { connect } from 'react-redux'
import { openEditPatient } from '../actions'

const OpenEditPatient = (props) => {
  return (
    <button type="button" data-toggle="modal" data-target="#editPatientModal" onClick={() => props.dispatch(openEditPatient(props.patient))}>
      Editar
    </button>
  )
};

export default connect()(OpenEditPatient)
