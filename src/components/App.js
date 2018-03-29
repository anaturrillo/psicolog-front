import React from 'react'
import AddPatient from '../containers/AddPatient'
import PatientsList from '../containers/PatientsList'
import Filters from '../containers/Filters'
import EditPatientModal from "../containers/EditPatient";

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <EditPatientModal />
        <AddPatient/>
      </div>
      <div className="col-8">
        <Filters/>
        <PatientsList />
      </div>
    </div>
  </div>
);

export default App
