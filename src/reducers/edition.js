const edition = (state = {patientToEdit:{}}, action) => {

  switch (action.type) {
    case 'OPENT_EDITION':
      return {
        patientToEdit: action.patient
      };
    default:
      return state
  }
};

export default edition