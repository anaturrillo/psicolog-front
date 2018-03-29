export const getPatient = function ({firstName, lastName, os, osNum, day, sessions, defaultValues}) {

  return {
    firstName: firstName.value.toUpperCase() || defaultValues.firstName,
    lastName: lastName.value.toUpperCase() || defaultValues.lastName,
    os: os.value.toUpperCase() || defaultValues.os,
    osNum: osNum.value || defaultValues.osNum,
    day: day.value || defaultValues.day,
    sessions: sessions.value || defaultValues.sessions
  }
};