/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}


/* Открытие popup*/

export function openModal() {
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
  })

}

