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

export const openEditPatient = (patient) => ({
  type: 'OPEN_EDITION',
  patient
});
// ARMAR (ver como funcionaria)
export const addSession = (patient) => ({
  type: 'ADD_SESSION',
  patient
});

export const subtractOneSession = (patientId) => ({
  type: 'SUBTRACT_SESSION',
  patientId
});

export const addOneSession = (patientId) => ({
  type: 'ADD_SESSION',
  patientId
});

export const changeFilter = filter => ({
  type: 'SET_FILTER',
  filter
});
