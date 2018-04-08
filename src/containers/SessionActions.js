import React from 'react'
import { connect } from 'react-redux'
import { subtractOneSession, addOneSession } from '../actions'
import {ButtonToolbar, Button} from 'react-bootstrap'
import LogSession from './LogSession'

const SessionActions = (props) => {

  return (
    <ButtonToolbar className="right sessionActions">
      <LogSession patientId={props.patientId} />
      <Button onClick={() => props.dispatch(addOneSession(props.patientId))} className="very light blue">
        +
      </Button>
    </ButtonToolbar>
  )
};

export default connect()(SessionActions)
