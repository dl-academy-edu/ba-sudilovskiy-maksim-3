 @@include('./components/_common.js');
 @@include('./components/_userData.js');

/* Открытие popup*/

function openModal() {
  const changepass = document.querySelector('.modal-editpass'),
        changedata = document.querySelector('.modal-editdata');
    
  document.addEventListener('click', (e) => {
    const target = e.target;
    target.preventDefault;
 
    if (target.hasAttribute('data-changepass')) {
      changepass.classList.add('modal-view');
    }
    if (target.hasAttribute('data-changedata')) {
      changedata.classList.add('modal-view');
    }
    if (target.hasAttribute('data-close')) {
      changepass.classList.remove('modal-view');
      changedata.classList.remove('modal-view');
    }
  })
}

openModal();