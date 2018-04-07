import React from 'react'
import DeletePatient from '../containers/DeletePatient'
import SubtractSession from '../containers/SubtractSession'
import OpenEditPatient from '../containers/OpenEditPatient'
import {ButtonToolbar} from 'react-bootstrap'
const daysTranslation = {
  "1": "Lunes",
  "2": "Martes",
  "3": "Miércoles",
  "4": "Jueves",
  "5": "Viernes",
  "6": "Sábado"
};

const Patient = ({firstName, lastName, os, osNum, day, sessions, id}) => {
  const patient = {firstName, lastName, os, osNum, day, sessions, id};

  return (
    <tr>
      <td>{lastName}, {firstName}</td>
      <td>{os}</td>
      <td>{osNum}</td>
      <td>
        {sessions}
        <SubtractSession sessions={sessions} patientId={id} />
      </td>
      <td>{daysTranslation[day]}</td>
      <td className="patientListActions">
        <ButtonToolbar>
          <DeletePatient patientId={id} />
          <OpenEditPatient patient={patient}/>
        </ButtonToolbar>
      </td>
    </tr>
  )
};

export default Patient
