import React from 'react'
import DeletePatient from '../containers/DeletePatient'
import SessionActions from '../containers/SessionActions'
import OpenEditPatient from '../containers/OpenEditPatient'
import OpenLog from '../containers/OpenLog'
import {ButtonGroup} from 'react-bootstrap'
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
        <SessionActions sessions={sessions} patientId={id} />
      </td>
      <td>{daysTranslation[day]}</td>
      <td className="patientListActions">
        <ButtonGroup>
          <DeletePatient patientId={id} />
          <OpenEditPatient patient={patient}/>
          <OpenLog patient={patient}/>
        </ButtonGroup>
      </td>
    </tr>
  )
};

export default Patient
