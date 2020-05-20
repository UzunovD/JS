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
 *@function checkPrompt() gets a number from user and checks if it is a number
 * if input is NaN function say 'input is not a number' and calls itself 
 * recursively
 * 
 * @param {string} input
 * @returns {string} input - checked number in string type
 */
function checkPrompt() {
  let money = prompt('Введите сумму для внесения на счет:')
  if (isNaN(money) || money == '' || money == ' ') {
    alert('Введено не число');
    checkPrompt();
  } else {
    return money;
  }
}

/**
 *@function notifyUser(money) gets a number and generates a notification for the
 * user depending on the amount
 *
 * @param {string} money 
 * @returns {string} 
 */
function notifyUser(money) {
  let lastNum = Number(money.charAt(money.length - 1));
  let beforeLastNum = Number(money.charAt(money.length - 2));
  let ending = '';
  switch (true) {
    case beforeLastNum == 1 || lastNum == 0 || lastNum >= 5:
      ending = 'ей'
      break;

    case lastNum == 1:
      ending = 'ь'
      break;

    default:
      ending = 'я'
      break;
  }
  return `Ваша сумма в ${money} рубл${ending} успешно зачислена.`
}