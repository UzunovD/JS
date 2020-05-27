'use strict';
// 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор
//  Product, который принимает параметры name и price, сохраните их как свойства
//  объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
// который будет уменьшать цену в объекте на 25%

// es5
let getDiscount = {
  make25PercentDiscount: function () {
    this.price -= this.price * 0.25
  }
}

Product.prototype = getDiscount;

function Product(name, price) {
  this.name = name;
  this.price = price;
}

let prodEs5 = new Product('хлеб', 20);
prodEs5.make25PercentDiscount();
console.log('prodEs5: ', prodEs5);

//es6
class Product6 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price -= this.price * 0.25
  }
}

let prodEs6 = new Product6('батон', 23);
prodEs6.make25PercentDiscount();
console.log('prodEs6: ', prodEs6);