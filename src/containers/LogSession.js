import React from 'react';
import {Button, Modal} from 'react-bootstrap'
import {connect} from "react-redux";
import {subtractOneSession} from "../actions";

class LogSession extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.log = this.log.bind(this);

    this.state = {
      show: false,
      log: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event){
    this.setState({
      ...this.state,
      log: event.target.value
    })
  }

  log(){
    const today = new Date();
    const session = {
      date: today.toISOString(),
      comments: this.state.log,
      patientId: this.props.patientId
    };

    this.props.dispatch(subtractOneSession(session))

    this.setState({
      ...this.state,
      log: '',
      show: false
    });
  }

  render (){
    let text;
    const patient = this.props.context.patients.items.find(e => e.id === this.props.patientId);
    return (
    <div>
      <Button onClick={this.handleShow} className="very light amber ">
        -
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cargar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span className="tag">paciente: </span>
            {patient.firstName} {patient.lastName}
          </p>
          <p>Comentarios de la sesión:</p>
          <p>

            <textarea value={this.state.log} className="width100prct" onChange={this.handleChange} ref={node => text = node}>

            </textarea>
            <Button onClick={this.log} className="very light amber right">Guardar</Button>
          </p>



        </Modal.Body>
      </Modal>
    </div>
    );
  }
}
const mapStateToProps = function(state) {

  return {context: state}
};

const mapDispatchToProps = (dispatch) => ({
  dispatch: (params) => dispatch(params)
});

export default connect(mapStateToProps, mapDispatchToProps)(LogSession)
