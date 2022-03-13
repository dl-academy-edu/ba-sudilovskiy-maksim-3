/* Открытие popup*/

function showModal() {
  const signin = document.querySelector('.modal-signin'),
    register = document.querySelector('.modal-reg'),
    sendMsg = document.querySelector('.modal-sendmsg');

  document.addEventListener('click', (e) => {
    const target = e.target;
    target.preventDefault;

    if (target.hasAttribute('data-signin')) {
      signin.classList.add('modal-view');
    }
    if (target.hasAttribute('data-register')) {
      register.classList.add('modal-view');
    }
    if (target.hasAttribute('data-sendMsg')) {
      sendMsg.classList.add('modal-view');
    }
    if (target.hasAttribute('data-close')) {
      signin.classList.remove('modal-view');
      register.classList.remove('modal-view');
      sendMsg.classList.remove('modal-view');
    }
  });
}

showModal();
