import React from 'react'
import {Grid, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap'
import PatientsList from '../containers/PatientsList'
import Filters from '../containers/Filters'
import Content from './Content'
import AddPatientForm from "../containers/AddPatientModal";

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
        <Content />
      </Col>
    </Row>
  </Grid>
);

export default App
