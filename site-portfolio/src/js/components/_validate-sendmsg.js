

/* Валидация формы SendMessage*/

let formMessage = document.querySelector('.js-message');

formMessage.addEventListener('submit', (e) => {
  let formInputs = document.querySelectorAll('.modal-sendmsg__input.js-input'),
    inputEmail = document.querySelector('.modal-sendmsg__input.js-input-email'),
    inputName = document.querySelector('.modal-sendmsg__input.js-input-name'),
    inputPhone = document.querySelector('.modal-sendmsg__input.js-input-phone'),
    inputSubject = document.querySelector('.modal-sendmsg__input.js-input-subject'),
    txtarea = document.querySelector('.modal-sendmsg__textarea'),
    inputCheckbox = document.querySelector('.modal-sendmsg__checkbox'),
    labelCheckbox = document.querySelector('.modal-sendmsg__label-agree');

  formInputs.forEach((item) => {
    if (item.value === '') {
      item.classList.add('is-invalid');
    } else {
      item.classList.remove('is-invalid');
    }
  });
  if (!validateOnlyTxt(inputName)) {
    invalidInput(inputName);
    e.preventDefault();
  } else {
    validInput(inputName);
  }
  if (!validateMsg(inputSubject)) {
    invalidInput(inputSubject);
    e.preventDefault();
  } else {
    validInput(inputSubject);
  }
  if (!validateEmail(inputEmail)) {
    invalidInput(inputEmail);
    e.preventDefault();
  } else {
    validInput(inputEmail);
  }
  if (!validatePhone(inputPhone)) {
    invalidInput(inputPhone);
    e.preventDefault();
  } else {
    validInput(inputPhone);
  }
  if (!validateMsg(txtarea)) {
    txtarea.style.border = '2.5px solid #eb3617'
    e.preventDefault();
  } else {
    txtarea.style.border = '2.5px solid #03BC3C'
  }
  if (!inputCheckbox.checked) {
    labelCheckbox.style.color = '#eb3617';
    e.preventDefault();
  } else {
    labelCheckbox.style.color = '';
  }
});


