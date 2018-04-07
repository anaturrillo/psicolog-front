export const getPatient = function ({firstName, lastName, os, osNum, day, sessions}) {

  return {
    firstName: firstName.value.toUpperCase(),
    lastName: lastName.value.toUpperCase(),
    os: os.value.toUpperCase(),
    osNum: osNum.value,
    day: day.value,
    sessions: sessions.value
  }
};