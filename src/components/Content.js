import React from 'react'
import EditPatient from '../containers/EditPatient'
import PatientLog from '../containers/PatientLog'

const Content = function (props) {
    return (
      <div>
        <EditPatient visible={true} />
        <PatientLog visible={true} />
      </div>
    )
};

export default Content
