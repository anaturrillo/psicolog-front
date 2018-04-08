const edition = (state = {patientToEdit:{}, component:''}, action) => {

  switch (action.type) {
    case 'DISPLAY':
      return {
        patientToEdit: action.patient,
        component: action.component
      };
    default:
      return state
  }
};

export default edition