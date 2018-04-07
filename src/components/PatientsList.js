import React from 'react'
import Patient from './Patient'
import {Table} from 'react-bootstrap'

const PatientsList = ({ patients }) => {

  return (
    <Table bordered condensed hover>
      <thead className="thead-light">
      <tr>
        <th>Nombre</th>
        <th>OS/Prepaga</th>
        <th>Nro. de Socio</th>
        <th>Sesiones restantes</th>
        <th>Día de sesión</th>
        <th> </th>
      </tr>
      </thead>
      <tbody>
      {patients.items.map(patient =>
      <Patient key={patient.id}
               {...patient}
      />
      )}
      </tbody>
    </Table>
  )
};

export default PatientsList
