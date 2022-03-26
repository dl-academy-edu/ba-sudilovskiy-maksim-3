
// -------------------Лекция 1--------------------->
//Задача №1----------------

// const name = prompt('What is your name?');
// const surname = prompt('What is your surname?');
// const age = prompt('How old are you?');

// const user = {
//   name: `${name}`,
//   surname: `${surname}`,
//   age: `${age}`,
// }

// console.log(user);


// -------------------Лекция 2--------------------->
//Задача №1 Выводит список чисел кратных 4----------------

// const task = () => {
//   let enterNum = +prompt('Enter number');
  
//   if(enterNum) {
//     for(i = 1; i <= enterNum ; i++) {
//       if(i % 4 === 0) {
//         console.log(i);
//       } 
//     }
//   } else {
//     alert('Please enter a number');
//     task();
//   }
// }

// task();


//Задача №2 Выводит факториал числа----------------

// const num = +prompt('Enter number');

// function factorial(num) {
//   let result = 1;

//   if (!isNaN(num) && num != '') {
//     while (num) {
//       if (num == 0 || num == 1) break;
//       result = result * num;
//       num = num - 1;
//     }
//   } else {
//     result = 'You entered uncorrect data';
//   }
//   alert(result);
// };

// factorial(num);


//Задача №3 Считает число в степени----------------

// function degreeOfNum () {
//   let num = +prompt('Enter number'),
//       degree = +prompt('Enter degree of number'),
//       result = 1;
  
//   if (!isNaN(num) && !isNaN(degree) && num > 0 && degree > 0) {
//     for (i = 1; i <= degree; i++) {
//       result = result * num;
//     }
//     alert(result);
//   } else {
//     alert('You entered uncorrect data');
//     degreeOfNum();
//   }
// }

// degreeOfNum();

// задача №5 Игра угадай рандомное число----------------

// const rand = Math.floor(1 + Math.random() * 10);
// console.log(typeof rand, rand);

// alert('Guess random number from 1 to 10. You have 5 attempts.');

// const guessNum = () => {
// 	const num = +prompt('Enter number');

// 	if( num === rand ) {
// 		alert('You win');
// 		i = 5;
// 		newGame();
// 	} if( i == 5 && num !== rand) {
// 		alert('Game over');
// 		newGame();
// 	}
// }

// const startGame = () => {
// 	for( i = 1; i <= 5; i++ ) {
// 		guessNum();
// 	}
// }

// const newGame = () => {
// 	const againGame = confirm('Do you want to try again?');
// 	if( againGame === true) {
// 		location.reload();
// 	} else {
// 		alert('Ok. Good Buy!!!')
// 	}
// }

// startGame();




// -------------------Лекция 3--------------------->
//Задача №1
// function userAge () {
//   let age = prompt('Enter your age');
//   if (age >= 18) {
//     alert('successfully')
//   } else {
//     userAge();
//   }
// }

// userAge ();



//Задача №3
// function addCreator(x) {
//   return function add(y) {
//     console.log(x + y);
//   }
// }

// const add = addCreator(5);

// add(5);
// addCreator(1)(3);



//Задача №4
// function counterCreater (step = 2) {
//   let index = 0;

//   return function () {
//     return index += step;
//   }
// }


// let myCounter1 = counterCreater (-1);
// console.log(myCounter1());
// console.log(myCounter1());

// let myCounter2 = counterCreater (4);
// console.log(myCounter2());
// console.log(myCounter2());

// let myCounter3 = counterCreater ();
// console.log(myCounter3());
// console.log(myCounter3());





// -------------------Лекция 4--------------------->
//Задача №1

// const developers = [
//   {
//     index: 0,
//     name: 'Брендан Эйх',
//     work: 'специалист в области информатики, программист, технический директор',
//   },
//   {
//     index: 2,
//     name: 'Джеймс Гослинг',
//     work: 'специалист в области информационных технологий',
//   },
//   {
//     index: 3,
//     name: 'Бьёрн Страуструп',
//     work: 'программист',
//   },
// ];

// const data = [
//   {
//     name: 'JavaScript',
//     year: 1995,
//     filenameExtensions: 'js, mjs',
//     influencedBy: [
//       'AWK',
//       'C',
//       'HyperTalk',
//       'Java',
//       'Lua',
//       'Perl',
//       'Python',
//       'Scheme',
//       'Self',
//     ],
//     affectedBy: [
//       'ActionScript',
//       'AtScript',
//       'CoffeeScript',
//       'Dart',
//       'JScript .NET',
//       'LiveScript',
//       'Objective-J',
//       'Opa',
//       'QML',
//       'Raku',
//       'TypeScript',
//     ],
//     developerIndex: 0,
//   },
//   {
//     name: 'Java',
//     year: 1995,
//     filenameExtensions: 'java, class, jar, jad, jmod',
//     influencedBy: [
//       'C++',
//       'Си',
//       'Ада',
//       'Simula 67',
//       'Smalltalk',
//       'Objective-C',
//       'Object Pascal',
//       'Оберон',
//       'Eiffel',
//       'Модула-3',
//       'Mesa',
//       'Симула',
//       'C#',
//       'UCSD Pascal',
//     ],
//     affectedBy: [
//       'Ada 2005',
//       'BeanShell',
//       'C#',
//       'Chapel',
//       'Clojure',
//       'ECMAScript',
//       'Fantom',
//       'Gambas',
//       'Groovy',
//       'Hack',
//       'Haxe',
//       'J#',
//       'Kotlin',
//       'PHP',
//       'Python',
//       'Scala',
//       'Seed7',
//       'Vala',
//     ],
//     developerIndex: 2,
//   },
//   {
//     name: 'C++',
//     year: 1983,
//     filenameExtensions: 'cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++',
//     influencedBy: [
//       'C++',
//       'Си',
//       'Ада',
//       'Simula 67',
//       'Smalltalk',
//       'Objective-C',
//       'Object Pascal',
//       'Оберон',
//       'Eiffel',
//       'Модула-3',
//       'Mesa',
//       'Симула',
//       'C#',
//       'UCSD Pascal',
//     ],
//     affectedBy: ['Ada', 'C', 'Modula-2', 'Simula'],
//     developerIndex: 3,
//   },
// ];

// //создаём копию массива data, т.к. будем вносить изменения в массив.(исходный останется неизменным)
// const copyData = JSON.parse(JSON.stringify(data));
// //из строки filenameExtensions делаем массив и добавляем '.' перед каждым элементом
// copyData.forEach ( item => {
//   let arrFilename = item.filenameExtensions.split(', '); 
//   let newArr = arrFilename.map( item => item = `.${item}`);
//   item.filenameExtensions = newArr;
// })

// //если affectedBy содержит больше 4 элементов, то удаляем лишнее и добавляем фразу 'и другие языки программирования'.
// copyData.forEach ( item => {
//   let affected = item.affectedBy;
//   if(affected.length > 4) {
//     affected = affected.splice(4, 99, ' и другие языки программирования')
//   };
// })



// // функция вывода текста на основе 2 массивов (developers, copyData).
// function history() {
//   developers.forEach(a => {
//     copyData.forEach(b => { 
//       if (b.developerIndex == a.index) {
//         let text = `${b.name} - язык программирования выпущенный в ${b.year} году. \nАвтором языка стал ${a.name} - ${a.work}. \nФайлы программ, написанных на ${b.name}, могут иметь расширения ${b.filenameExtensions}. \n${b.name} испытал влияние ${b.influencedBy.length} языков программирования: ${b.influencedBy}. \n${b.name} повлиял на ${b.affectedBy}.`;
//         console.log(text)
//       };
//     });
//   });
// }

// // функция обратного отсчета, затем вывод текста.
// let time = 10;
// function timerDown () {
//   console.log(time);
//   time--;
//   if (time > 0) {
//     let timer = setTimeout(timerDown, 1000);
//   } else {
//     history();
//   }
// }

// timerDown ()



