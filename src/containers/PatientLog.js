import React from 'react'
import {connect} from 'react-redux'
import LogItem from '../components/LogItem'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class PatientLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: '',
      patient: {},
      log: []
    };

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      log: nextProps.log,
      component: nextProps.component,
      patient: nextProps.patient
    })
  }

  render () {
    if (this.state.component === 'log') {

      const heading = "Sesiones de " + this.state.patient.firstName + ' ' + this.state.patient.lastName;
      const patientLog = this.state.log.filter(e => e.patientId === this.state.patient.id);
      console.log(patientLog)

      if (patientLog.length > 0) {
        return (
          <ListGroup>
            <ListGroupItem header={heading}></ListGroupItem>
            {patientLog
            .map(item => <LogItem patient={this.state.patient} key={item.id} log={item} />
            )}
          </ListGroup>
        )
      } else {
        return <p>No hay sesiones cargadas para {this.state.patient.firstName} {this.state.patient.lastName}</p>
      }

    } else {
      return <div></div>
    }


  }
}

const mapStateToProps = state => {
  return {
    patient:state.edition.patientToEdit,
    component:state.edition.component,
    log: state.patients.logs
  }
};

export default connect(mapStateToProps)(PatientLog)