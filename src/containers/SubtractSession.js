import React from 'react'
import { connect } from 'react-redux'
import { subtractOneSession, addOneSession } from '../actions'
import {ButtonToolbar, Button} from 'react-bootstrap'

const SubtractSession = (props) => {
  return (
    <ButtonToolbar className="right">
      <Button onClick={() => props.dispatch(subtractOneSession(props.patientId))}>
        -
      </Button>

      <Button onClick={() => props.dispatch(addOneSession(props.patientId))} className="very light amber">
        +
      </Button>
    </ButtonToolbar>

  )
};

export default connect()(SubtractSession)
