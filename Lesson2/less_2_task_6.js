'use strict';

// 6**. (Сложное задание, требует времени и возможно гугления, делайте по
//  желанию.)
// Программа должна спросить у пользователя число, это будет количество денег,
// которое он хочет положить на счет в банке. Затем программа должна выдать
// примерно такое сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь
// ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь
//  ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь
// ввел 120104.
// То есть ваша задача выводить слово «рубль» в правильном падеже, в
// зависимости от введенного числа.

/**
 *@function getCount() gets a number from user and checks if it is a number
 * if input is NaN function say 'input is not a number' and calls itself 
 * recursively
 * 
 * @param {string} input
 * @returns {string} input - checked number in string type
 */
function getCount() {
  let input = prompt('Введите сумму для внесения на счет:')
  if (isNaN(input)) {
    alert('Введено не число');
    getCount();
  } else {
    return input;
  }
}

/**
 *@function notifyUser(data) gets a number and generates a notification for the
 * user depending on the amount
 *
 * @param {string} data 
 * @returns {string} 
 */
function notifyUser(data) {
  let lastChar = +(data.charAt(data.length - 1));
  let ending = '';
  switch (true) {
    case lastChar == 1:
      ending = 'ь'
      break;

    case lastChar == 0 || 5 <= lastChar <= 9:
      ending = 'ей'
      break;

    case 2 <= lastChar <= 4:
      ending = 'я'
      break;
  }
  return `Ваша сумма в ${data} рубл${ending} успешно зачислена.`
}