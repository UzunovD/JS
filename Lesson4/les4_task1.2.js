'use strict';
// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет
//  их как свойства объекта. Объекты типа Post должны иметь метод edit, который 
// будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать
//  код. Также в конструкторе AttachedPost должно создаваться свойство highlighted
//  со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет 
// назначать свойству highlighted значение true.

// Задание a
// es5
let postEdit = {
  edit: function (text) {
    this.text = text
  }
}

Post.prototype = postEdit;

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

let newPost = new Post(user, 'message', '27.05.2020');
newPost.edit('hello world');
console.log('nwePost: ', nwePost);

//es6
class Post6 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit() {
    this.text = text
  }
}

let newPost6 = new Post6(moder, 'ban', '26.05.2020');
newPost.edit('cancelled ban');
console.log('nwePost6: ', nwePost6);