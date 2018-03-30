import { connect } from 'react-redux'
import PatientsList from '../components/PatientsList'

const getPatients = (patients, filter) => {
  const todayDate = new Date();
  const today = todayDate.getDay().toString();

  switch (filter) {
    case 'DISPLAY_ALL':
      return patients;
    case 'DISPLAY_TODAY':
      return {
        items: patients.items.filter(p => p.day === today)
      };
    default:
      return patients
  }
};

const mapStateToProps = state => {
  return {patients: getPatients(state.patients, state.filter)}
};

export default connect(mapStateToProps)(PatientsList)
