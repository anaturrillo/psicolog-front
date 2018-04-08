import React from 'react'
import { connect } from 'react-redux'
import { displayComponent } from '../actions'
import {Button} from 'react-bootstrap'

const OpenEditPatient = (props) => {
  return (
    <Button type="button" onClick={() => props.dispatch(displayComponent(props.patient, 'edit'))}>
      Editar
    </Button>
  )
};

export default connect()(OpenEditPatient)
