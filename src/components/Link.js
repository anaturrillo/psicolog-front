import React from 'react'
import {Button} from 'react-bootstrap'

const Link = ({ active, children, onClick }) => (
  <Button onClick={onClick} disabled={active}>
    {children}
  </Button>
);

export default Link
