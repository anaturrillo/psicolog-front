import { combineReducers } from 'redux'
import patients from './patients'
import filter from './filters'
import edition from './edition'

export default combineReducers({
  patients,
  filter,
  edition
})
