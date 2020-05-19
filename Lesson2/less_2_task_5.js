'use strict';

// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2,
//  operation), где arg1, arg2 – значения аргументов, operation – строка с
// названием операции. В зависимости от переданного значения операции
// (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

/**
 * @function mathOperation accepts arguments, the sign of a mathematical
 * operator, and calls the relevant mathematical function and passes
 * arguments to it. Returns the result of a mathematical calculation 
 *
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case '+':
      return summ(arg1, arg2);

    case '-':
      return difference(arg1, arg2);

    case '*':
      return multiplication(arg1, arg2);

    case '/':
      return division(arg1, arg2);
  }
}