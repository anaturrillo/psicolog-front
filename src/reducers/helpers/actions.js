const addPatient = function (currentState, action) {
  const itemId = currentState.nextId;
  return {
    ...currentState,
    items: [
      ...currentState.items,
      {
        ...action,
        id:itemId
      }
    ],
    nextId: itemId + 1
  };
};

const deletePatient = function (currentState, action) {
 return {
  ...currentState,
   items: currentState
    .items
    .filter(function (patient) {
      return patient.id !== action.patientId
    })
  };
};

const logSession = function (currentState, action) {

  const newPatientList = [].concat(currentState.items);
  const editedPatient = newPatientList.find(e => e.id === action.session.patientId);
  editedPatient.sessions = editedPatient.sessions > 0 ? editedPatient.sessions - 1: 0;
  const currentLog = currentState.logs || [];

  const logs = [].concat(currentLog, [{...action.session, id: currentState.nextLogId}]);

  return {
    ...currentState,
    items:newPatientList,
    logs,
    nextLogId: currentState.nextLogId + 1
  }
};

const addOneSession = function (currentState, action) {
  const newPatientList = [].concat(currentState.items);
  const editedPatient = newPatientList.find(e => e.id === action.patientId);
  editedPatient.sessions = editedPatient.sessions + 1;

  return {
    ...currentState,
    items:newPatientList
  }
};

const editPatient = function (currentState, action) {
  const patients = currentState.items;
  Object.assign(patients.find(p => p.id === action.patient.id), action.patient);

  return currentState
};

const setContent = function (currentState, action) {
  return {
    ...currentState,
    contentComponent: action.component,
    patient: action.patient
  }
};

export const getAction = {
  'ADD_PATIENT': addPatient,
  'DELETE_PATIENT': deletePatient,
  'EDIT_PATIENT':editPatient,
  'SUBTRACT_SESSION':logSession,
  'ADD_SESSION':addOneSession,
  'SET_CONTENT': setContent
};