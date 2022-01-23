
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
