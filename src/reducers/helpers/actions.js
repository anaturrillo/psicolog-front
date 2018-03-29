const addPatient = function (currentState, action) {
  const itemId = currentState.nextId;
  return {
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
   items: currentState
    .items
    .filter(function (patient) {
      return patient.id !== action.patientId
    }),
    nextId: currentState.nextId
  };
};

const subtractOneSession = function (currentState, action) {
  const newPatientList = [].concat(currentState.items);
  const editedPatient = newPatientList.find(e => e.id === action.patientId);
  editedPatient.sessions = editedPatient.sessions > 0 ? editedPatient.sessions - 1: 0;

  return {
    items:newPatientList,
    nextId: currentState.nextId
  }
};

const addOneSession = function (currentState, action) {
  const newPatientList = [].concat(currentState.items);
  const editedPatient = newPatientList.find(e => e.id === action.patientId);
  editedPatient.sessions = editedPatient.sessions + 1;

  return {
    items:newPatientList,
    nextId: currentState.nextId
  }
};

const editPatient = function (currentState, action) {
  const patients = currentState.items;
  Object.assign(patients.find(p => p.id === action.patient.id), action.patient);

  return currentState
};

export const getAction = {
  'ADD_PATIENT': addPatient,
  'DELETE_PATIENT': deletePatient,
  'EDIT_PATIENT':editPatient,
  'SUBTRACT_SESSION':subtractOneSession,
  'ADD_SESSION':addOneSession
};