import React from 'react'
import FilterLink from './FilterLink'
import {ButtonToolbar} from 'react-bootstrap'


const Filters = () => (
  <ButtonToolbar>
    <FilterLink filter="DISPLAY_ALL">
      Ver todos los pacientes
    </FilterLink>
    <FilterLink filter="DISPLAY_TODAY">
      Ver pacientes de hoy
    </FilterLink>
  </ButtonToolbar>
);

export default Filters
