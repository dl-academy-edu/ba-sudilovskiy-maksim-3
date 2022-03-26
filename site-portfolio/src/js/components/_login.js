const formLogin = document.forms.signin;
const modal_signin = document.querySelector('#signin');


formLogin.addEventListener('submit', e => {
  loginUser(e);
})

function loginUser(e) {
  e.preventDefault();

  const userLoginData = getUserFormData(formLogin);

  sendRequest({
    endpoint: '/users/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: userLoginData,
  })
    .then(response => {
      if (response.ok) {
        modal_reg.classList.remove('modal-view');
        //добавить окно об успешной регистрации
        return response.json();
      } else {
        //добавить окно об ошибке сервера
        console.log('asdasdasd');
      }
      throw new Error(`Login status is ${response.status}`);
    })
    .then(userLoginData => {
      const { token, userId } = userLoginData.data;

      localStorage.setItem('id', userId);
      localStorage.setItem('token', token);

      location.href = 'profile.html';
    })
    .catch((err) => console.error(err));
}