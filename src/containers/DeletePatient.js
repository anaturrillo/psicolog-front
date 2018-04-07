import React from 'react'
import { connect } from 'react-redux'
import { deletePatient } from '../actions'
import {Button} from 'react-bootstrap'

const DeletePatient = (props) => {
  return (
    <Button onClick={() => props.dispatch(deletePatient(props.patientId))}>
      Borrar
    </Button>
  )
};

export default connect()(DeletePatient)
