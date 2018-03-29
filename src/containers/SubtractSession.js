import React from 'react'
import { connect } from 'react-redux'
import { subtractOneSession, addOneSession } from '../actions'

const SubtractSession = (props) => {
  return (
    <span>
      <button onClick={() => props.dispatch(subtractOneSession(props.patientId))}>
        -
      </button>

      <button onClick={() => props.dispatch(addOneSession(props.patientId))}>
        +
      </button>
    </span>

  )
};

export default connect()(SubtractSession)
