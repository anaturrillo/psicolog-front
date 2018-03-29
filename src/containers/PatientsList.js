import { connect } from 'react-redux'
import PatientsList from '../components/PatientsList'

const getPatients = (patients, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return patients;
    default:
      return patients
  }
};

const mapStateToProps = state => {
  return {patients: getPatients(state.patients, state.filter)}
};

export default connect(mapStateToProps)(PatientsList)
