import React from 'react'
import Patient from './Patient'

const PatientsList = ({ patients }) => {

  return (
    <table className="table table-bordered">
      <thead className="thead-light">
      <tr>
        <th>Nombre</th>
        <th>OS/Prepaga</th>
        <th>Nro. de Socio</th>
        <th>Sesiones restantes</th>
        <th>Día de sesión</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {patients.items.map(patient =>
      <Patient key={patient.id}
               {...patient}
      />
      )}
      </tbody>
    </table>
  )
};

export default PatientsList
