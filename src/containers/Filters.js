import React from 'react'
import FilterLink from './FilterLink'

const Filters = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter="DISPLAY_ALL">
      Todos
    </FilterLink>
    <FilterLink filter="DISPLAY_TODAY">
      Los de hoy
    </FilterLink>
  </div>
);

export default Filters
