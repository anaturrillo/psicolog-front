import React from 'react'
import {ListGroupItem} from 'react-bootstrap'

const LogItem = (logItem) => {
  const note = logItem.log.comments ? 'Notas: ' + logItem.log.comments : ''
  return (
    <ListGroupItem>
      <p>fecha: {logItem.log.date}</p>
      <p>{note}</p>
    </ListGroupItem>
  )
};

export default LogItem
