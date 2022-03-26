
/* Валидация формы Register*/

let formRegister = document.querySelector('.js-register');

formRegister.addEventListener('submit', (e) => {
  let formInputs = document.querySelectorAll('.modal-reg__input.js-input'),
    inputEmail = document.querySelector('.modal-reg__input.js-input-email'),
    inputPass = document.querySelector('.modal-reg__input.js-input-pass'),
    inputPassRep = document.querySelector('.modal-reg__input.js-input-passRepeat'),
    inputName = document.querySelector('.modal-reg__input.js-input-name'),
    inputSurname = document.querySelector('.modal-reg__input.js-input-surname'),
    inputAge = document.querySelector('.modal-reg__input.js-input-age'),
    inputLocation = document.querySelector('.modal-reg__input.js-input-location'),
    inputCheckbox = document.querySelector('.modal-reg__checkbox.js-input-checkbox'),
    labelCheckbox = document.querySelector('.modal-reg__label-agree'),
    msgEmail = document.querySelector('.msgEmail'),
    msgName = document.querySelector('.msgName'),
    msgSurname = document.querySelector('.msgSurname'),
    msgPass = document.querySelector('.msgPass'),
    msgRepPass = document.querySelector('.msgRepPass'),
    msgLocation = document.querySelector('.msgLocation'),
    msgAge = document.querySelector('.msgAge');

  
  formInputs.forEach((item) => {
    if (item.value === '') {
      item.classList.add('is-invalid');
    } else {
      item.classList.remove('is-invalid');
    }
  });

 
  if (!validateEmail(inputEmail)) {
    e.preventDefault();
    invalidInput(inputEmail);
    msgEmail.innerHTML = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")';
    msgEmail.classList.remove('correct-msg');
    msgEmail.classList.add('error-msg');
  } else {
    validInput(inputEmail);
    msgEmail.innerHTML = 'All right';
    msgEmail.classList.remove('error-msg');
    msgEmail.classList.add('correct-msg');
  }
  if (!validatePass(inputPass)) {
    e.preventDefault();
    invalidInput(inputPass);
    msgPass.innerHTML = 'Length password more 8 symbols (example: "Maks2332")';
    msgPass.classList.remove('correct-msg');
    msgPass.classList.add('error-msg');
  } else {
    validInput(inputPass);
    msgPass.innerHTML = 'All right';
    msgPass.classList.remove('error-msg');
    msgPass.classList.add('correct-msg');
  }
  if (inputPassRep.value !== inputPass.value || inputPassRep.value == '') {
    e.preventDefault();
    invalidInput(inputPassRep);
    msgRepPass.innerHTML = 'Passwords don\'t match';
    msgRepPass.classList.remove('correct-msg');
    msgRepPass.classList.add('error-msg');
  } else {
    validInput(inputPassRep);
    msgRepPass.innerHTML = 'All right';
    msgRepPass.classList.remove('error-msg');
    msgRepPass.classList.add('correct-msg');
  }
  if (!validateOnlyTxt(inputName)) {
    e.preventDefault();
    invalidInput(inputName);
    msgName.innerHTML = 'Not correct';
    msgName.classList.remove('correct-msg');
    msgName.classList.add('error-msg');
  } else {
    validInput(inputName);
    msgName.innerHTML = 'All right';
    msgName.classList.remove('error-msg');
    msgName.classList.add('correct-msg');
  }
  if (!validateOnlyTxt(inputSurname)) {
    e.preventDefault();
    invalidInput(inputSurname);
    msgSurname.innerHTML = 'Not correct';
    msgSurname.classList.remove('correct-msg');
    msgSurname.classList.add('error-msg');
  } else {
    validInput(inputSurname);
    msgSurname.innerHTML = 'All right';
    msgSurname.classList.remove('error-msg');
    msgSurname.classList.add('correct-msg');
  }
  if (!validateOnlyTxt(inputLocation)) {
    e.preventDefault();
    invalidInput(inputLocation);
    msgLocation.innerHTML = 'Required field';
    msgLocation.classList.remove('correct-msg');
    msgLocation.classList.add('error-msg');
  } else {
    validInput(inputLocation);
    msgLocation.innerHTML = 'All right';
    msgLocation.classList.remove('error-msg');
    msgLocation.classList.add('correct-msg');
  }
  if (inputAge.value == '' || isNaN(inputAge.value) || inputAge.value > 100) {
    e.preventDefault();
    invalidInput(inputAge);
    msgAge.innerHTML = 'Required field';
    msgAge.classList.remove('correct-msg');
    msgAge.classList.add('error-msg');
  } else {
    validInput(inputAge);
    msgAge.innerHTML = 'All right';
    msgAge.classList.remove('error-msg');
    msgAge.classList.add('correct-msg');
  }
  if (!inputCheckbox.checked) {
    labelCheckbox.style.color = '#eb3617';
    e.preventDefault();
  } else {
    labelCheckbox.style.color = '';
  }
});

