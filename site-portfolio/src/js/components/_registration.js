const formRegistration = document.forms.registration;
const api_url_users = 'https://academy.directlinedev.com/api/users';
const modal_reg = document.querySelector('#register');


formRegistration.addEventListener('submit', e => {
  registerUser(e);
})

function registerUser(e) {
  e.preventDefault();

  const userData = getUserFormData(formRegistration);

  sendRequest({
    endpoint: '/users',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: userData,
  })
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        //добавить окно об ошибке сервера
      }
      throw new Error ('Request failed')
    })
    .then(userData => {
      modal_reg.classList.remove('modal-view');
      //добавить окно об успешной регистрации
    })
    .catch(err => console.error(err))
}



