import React from 'react';
import {Button, Modal} from 'react-bootstrap'
import PatientForm from './PatientForm'

class AddPatientModal extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render (){

    return (
      <div>
        <Button onClick={this.handleShow} className="very light blue">
          Nuevo paciente
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar paciente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PatientForm onClose={_ => this.handleClose() }/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AddPatientModal