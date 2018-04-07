import React from 'react'
import PatientsList from '../containers/PatientsList'
import Filters from '../containers/Filters'
import EditPatientModal from "../containers/EditPatient";
import AddPatientForm from "../containers/AddPatientModal";
import {Grid, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap'

const App = () => (
  <Grid>
    <Navbar fixedTop={true}>
      <Nav>
        <NavItem>
          <Filters/>
        </NavItem>
        <NavItem>
          <AddPatientForm />
        </NavItem>
      </Nav>
    </Navbar>

    <Row className="show-grid content">
      <Col md={7}>
        <PatientsList />
      </Col>
      <Col md={5}>
        <EditPatientModal />
      </Col>
    </Row>
  </Grid>
);

export default App
