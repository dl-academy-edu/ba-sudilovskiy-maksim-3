@@include('./components/_common.js');


//Показ постов из API DLAcademy
const postWrapper = document.querySelector('.post');
const preloader = document.querySelector('.preloader');

fetch(`${api_url}/posts?limit=5`)
  .then(response => {
    return response.json()
  })
  .then (parsedData => {
    parsedData.data.forEach(post => {
      const imgPostURL = 'https://academy.directlinedev.com';
      const datePost = new Date(post.date);
      const datestring = ("0" + datePost.getDate()).slice(-2) + "." + ("0"+(datePost.getMonth()+1)).slice(-2) + "." + datePost.getFullYear();
      const createPost = `
        <div class="post__wrapper">
          <div class="post__img">
            <picture>
              <source srcset="${imgPostURL + post.mobilePhotoUrl}, ${imgPostURL + post.mobile2xPhotoUrl} 2x" media="(max-width: 700px)">
              <source srcset="${imgPostURL + post.tabletPhotoUrl}, ${imgPostURL + post.tablet2xPhotoUrl} 2x" media="(max-width: 1024px)">
              <img loading="lazy" srcset="${imgPostURL + post.desktopPhotoUrl}, ${imgPostURL + post.desktop2xPhotoUrl} 2x" class="post__pic"  alt="post picture">
            </picture>
          </div>
          <div class="post__content">
            <div class="post__tags">
              
            </div>
            <div class="post__info">
              <div class="post__date">${datestring}</div>
              <div class="post__views">${post.views} views</div>
              <div class="post__comments">${post.commentsCount} comments</div>
            </div>
            <h2 class="post__title">${post.title}</h2>
            <p class="post__txt">${post.text}</p>
            <a href="" class="post__link">Go to this post</a>
          </div>
        </div>
      `;
      
      preloader.classList.remove('active'); //выкл preloader при загрузке постов
      postWrapper.insertAdjacentHTML('afterbegin', createPost);

      post.tags.forEach(item => {
        const postTags = document.querySelector('.post__tags');
        const colortag = item.tag.color;
        const colorPostTag = `<div class="post__tag"  style="background:${colortag}"></div>`;
        postTags.insertAdjacentHTML('afterbegin', colorPostTag);
      })
      
    });
  })
  .catch(err => {
    console.log(err);
  })



//Обработка фильтра постов

const filterForm = document.forms.filterForm;

if(window.location.search) {
  const params = {};
  const arrParams = window.location.search.substring(1).split('&');
  
  for (let stringParam of arrParams) {
    const param = stringParam.split('=');
    const paramKey = param[0];
    const paramValue = param[1];

    if (paramKey in params) {
      params[paramKey].push(paramValue);
    } else {
      params[paramKey] = [paramValue];
    }
  }
  const updateInputs = (inputs, typeParam) => {
    for (let input of inputs) {
      const param = params[typeParam];
      for (let partParam of param) {
        if (partParam === input.value) {
          input.checked = true;
        }
      }
    }
  }

  updateInputs(filterForm.views, 'views');
  updateInputs(filterForm.comments, 'comments');
  updateInputs(filterForm.limit, 'limit');
  updateInputs(filterForm.sort, 'sort');
}


filterForm.addEventListener('submit', e => {
  e.preventDefault();

  const arrayCheckedInputs = [];
  
  const addCheckedInput = (inputGroup, nameOfInputGroup) => {
    
    inputGroup.forEach(input => {
      if(input.checked) {
        arrayCheckedInputs.push(`${nameOfInputGroup}=${input.value}`)
      } 
    })
  }

  console.log(arrayCheckedInputs)
  addCheckedInput(e.target.views, 'views');
  addCheckedInput(e.target.comments, 'comments');
  addCheckedInput(e.target.limit, 'limit');
  addCheckedInput(e.target.sort, 'sort');

 
  const filtrUrl = `${window.location.origin}${window.location.pathname}?${arrayCheckedInputs.toString().replaceAll(',', '&')}`
  window.history.pushState({}, '', filtrUrl); //добовляет ссылку фильтра в поисковую строку без перезагрузки страницы
})

