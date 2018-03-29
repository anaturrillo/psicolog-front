import {getAction} from './helpers/actions'

const patients = (state = {nextId:0, items:[]}, action) => {
  const currentState = Object.assign({}, state);

  return getAction[action.type] ? getAction[action.type](currentState, action) : currentState
};

export default patients
