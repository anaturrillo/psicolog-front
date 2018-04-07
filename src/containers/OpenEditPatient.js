import React from 'react'
import { connect } from 'react-redux'
import { openEditPatient } from '../actions'
import {Button} from 'react-bootstrap'

const OpenEditPatient = (props) => {
  return (
    <Button type="button" data-toggle="modal" data-target="#editPatientModal" onClick={() => props.dispatch(openEditPatient(props.patient))}>
      Editar
    </Button>
  )
};

export default connect()(OpenEditPatient)
