'use strict'

// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций
//  с двумя параметрами. Т.е. например, функция для сложения должна принимать два
//  числа, складывать их и возвращать результат. Обязательно использовать оператор
// return.

/**
 * @function summ adds a and b and returns their sum 
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} a + b
 */
function summ(a, b) {
  return a + b;
}

/**
 * @function difference subtracts from a b and returns the difference a - b
 *
 * @param {number} a is minuend
 * @param {number} b is subtrahend
 * @returns {number} a - b
 */
function difference(a, b) {
  return a - b;
}

/**
 * @function division divides a by b and returns the quotient a / b
 *
 * @param {number} a is dividend
 * @param {number} b is divider
 * @returns {number} the quotient a / b
 */
function division(a, b) {
  return a / b
}

/**
 * @function multiplication a times b and return the product of a * b
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} the product of a * b
 */
function multiplication(a, b) {
  return a * b;
}