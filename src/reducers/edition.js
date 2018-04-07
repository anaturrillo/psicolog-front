const edition = (state = {patientToEdit:{}, editionVisible:false}, action) => {

  switch (action.type) {
    case 'OPEN_EDITION':
      return {
        patientToEdit: action.patient,
        editionVisible: true
      };
    default:
      return state
  }
};

export default edition