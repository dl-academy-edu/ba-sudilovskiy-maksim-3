@@include('./_showModal.js');


const api_url = 'https://academy.directlinedev.com/api';
//Получение данных формы, введёных пользователем в JSON формате
function getUserFormData(form, type = 'json') {

  switch (type) {
    case 'json':
      const inputs = form.querySelectorAll('input');
      const body = {};

      for (let input of inputs) {
        body[input.name] = input.value;
      }

      return JSON.stringify(body);
      break;
    case 'formData':
      const formData = new FormData(form);
      console.log(formData)
      return formData;
      break;
    default:
      throw new Error('getUserFormData fn: Incorrect data type')
  }
  
}

function sendRequest({ endpoint, method = 'GET', headers = null, body = null }) {
  const settings = {
    method,
    headers,
    body
  }

  return fetch( `${api_url}${endpoint}`, settings)
}


//Если пользователь залогинился, то скрываем кнопки 'register', 'sign in' и показываем кнопку 'my profile'.
function findToken() {
  const token = localStorage.getItem('token');
  const btn_signin = document.querySelector('.js-btn-signin');
  const btn_register = document.querySelector('.js-btn-register');
  const btn_profile = document.querySelector('.js-btn-profile');

  if(!token) return false;

  btn_signin.classList.add('hidden');
  btn_register.classList.add('hidden');
  btn_profile.classList.remove('hidden');
}
findToken();




