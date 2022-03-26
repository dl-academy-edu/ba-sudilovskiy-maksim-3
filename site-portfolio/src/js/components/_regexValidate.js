function validateEmail(email) {
  const emailReg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  return emailReg.test(email.value);
}
function validatePass(pass) {
  const passwordReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/;
  return passwordReg.test(pass.value);
}
function validateOnlyTxt(name) {
  const nameReg = /^[а-яА-ЯёЁa-zA-Z]+$/;
  return nameReg.test(name.value);
}
function validateMsg(subject) {
  const subjectReg = /^[а-яА-ЯёЁa-zA-Z0-9 ]+$/;
  return subjectReg.test(subject.value);
}
function validatePhone(phone) {
  const phoneReg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11}$/;
  return phoneReg.test(phone.value);
}
