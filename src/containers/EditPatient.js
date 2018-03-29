
import { connect } from 'react-redux'
import EditPatientModal from './EditPatientModal'

const mapStateToProps = state => {

  return {patientToEdit:state.edition.patientToEdit}
};

export default connect(mapStateToProps)(EditPatientModal)
