import React from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
import { displayComponent } from '../actions'

const OpenLog = (props) => {
  return (
  <Button type="button" onClick={() => props.dispatch(displayComponent(props.patient, 'log'))}>
    Log
  </Button>
  )
};

export default connect()(OpenLog)
