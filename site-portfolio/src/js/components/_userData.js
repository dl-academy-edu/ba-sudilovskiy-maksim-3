const profileImg = document.querySelector('.profile__photo');
const profileName = document.querySelector('.profile__name');
const profileSurname = document.querySelector('.profile__surname');
const profileEmail = document.querySelector('.profile__email');
const profilePass = document.querySelector('.profile__pass');
const profileLocation = document.querySelector('.profile__location');
const profileAge = document.querySelector('.profile__age');

const btnChangeData = document.querySelector('.profile__change-data');
const modalEditData = document.querySelector('#editdata');
const formEditData = document.forms.editUserData;

const btnDeleteAccount = document.querySelector('.profile__delete-acc');





//Получаем данные пользователя и пушим их на странице profile.html
function getUserFormData() {
  sendRequest({
    endpoint: `/users/${localStorage.getItem('id')}`,
    headers: {
      'x-access-token': localStorage.getItem('token')
    },
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    } 
    throw new Error ('Request failed')
  })
  .then(userData => {
    const { name, surname, email, location, age, photoUrl } = userData.data;
    console.log(userData)
    profileImg.src = `${api_url}${photoUrl}`;
    profileName.innerText = `${name}`;
    profileSurname.innerText = `${surname}`;
    profileEmail.innerText = `${email}`;
    profileLocation.innerText = `${location}`;
    profileAge.innerText = `${age}`;
  })
  .catch(err => console.error(err));
}

getUserFormData();



//Изменение данных пользователя
formEditData.addEventListener('submit', e => {
  e.preventDefault();
  editUserData();
})

function editUserData() {
  const userData = getUserFormData(formEditData);

  sendRequest({
    endpoint: `/users`,
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=something',
      'x-access-token': localStorage.getItem('token'),
    },
    body: userData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      
      throw new Error('Error');
    })
    .then(() => {
      modalEditData.classList.remove('modal-view');
      getUserFormData();
    })
    .catch((err) => console.err(err));
}


//Удаление аккаунта
btnDeleteAccount.addEventListener('click', (e) => {
  e.preventDefault();
  deleteAccaount();
});

function deleteAccaount() {
  sendRequest({
    endpoint: `/users/${localStorage.getItem('id')}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
    },
  })
    .then((response) => {
      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        history.back();
      }

      throw new Error('User not found');
    })
    .catch((err) => {
      console.error(err);
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      history.back();
    });
}