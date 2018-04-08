export const addPatient = patient => ({
  type: 'ADD_PATIENT',
  ...patient
});

export const editPatient = (patient) => ({
  type: 'EDIT_PATIENT',
  patient
});

export const deletePatient = (patientId) => ({
  type: 'DELETE_PATIENT',
  patientId
});

export const displayComponent = (patient, component) => ({
  type: 'DISPLAY',
  patient,
  component
});

// ARMAR (ver como funcionaria)
export const addSession = (patient) => ({
  type: 'ADD_SESSION',
  patient
});

export const subtractOneSession = (session) => ({
  type: 'SUBTRACT_SESSION',
  session
});

export const addOneSession = (patientId) => ({
  type: 'ADD_SESSION',
  patientId
});

export const changeFilter = filter => ({
  type: 'SET_FILTER',
  filter
});

export const setContent = (patient, component) => ({
  type: 'SET_CONTENT',
  patient,
  component
});