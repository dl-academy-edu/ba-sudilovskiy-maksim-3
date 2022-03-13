
/* Валидация формы Sign-in*/

let formSignin = document.querySelector('.js-signin');


formSignin.addEventListener('submit', (e) => {
  let formInputs = document.querySelectorAll('.modal-signin__input.js-input'),
    inputEmail = document.querySelector('.modal-signin__input.js-input-email'),
    inputPass = document.querySelector('.modal-signin__input.js-input-pass');
 
  formInputs.forEach((item) => {
    if (item.value === '') {
      item.classList.add('is-invalid');
    } else {
      item.classList.remove('is-invalid');
    }
  });

  if (!validateEmail(inputEmail)) {
    invalidInput(inputEmail);
    e.preventDefault();
  } else {
    validInput(inputEmail);
  }
  if (!validatePass(inputPass)) {
    invalidInput(inputPass);
    e.preventDefault();
  } else {
    validInput(inputPass);
  }
});

