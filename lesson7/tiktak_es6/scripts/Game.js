'use strict';

class Game {
  constructor() {
    this.phase = 'X';
  }

  /** 
   * Метод получает другие игровые объекты, которые нужны ему
   * для работы.
   * @param {grid} grid
   * @param {status} status
   * @param {playMap} playMap
   */
  init(grid, status, playMap) {
    this.grid = grid;
    this.status = status;
    this.playMap = playMap;
  }

  /**
   * Инициализация обработчика событий.
   */
  initEventHandlers() {
    // Ставим обработчик, при клике на таблицу вызовется функция 
    // this.cellClickHandler().
    this.grid.gameGrid.addEventListener('click', event =>
      this.cellClickHandler(event));
  }


  /**
   * Обработчик события клика.
   * @param {MouseEvent} event
   */
  cellClickHandler(event) {
    // Если клик не нужно обрабатывать, уходим из функции.
    if (!this.isCorrectClick(event)) {
      return;
    }

    // Заполняем ячейку.
    this.fillCell(event);
    // Если кто-то выиграл, заходим в if.
    if (this.hasWon()) {
      // Ставим статус в "остановлено".
      this.status.setStopped();
      // Сообщаем о победе пользователя.
      this.sayWonPhrase();
    }

    // Меняем фигуру (крестик или нолик).
    this.togglePhase();
  }

  /**
   * Проверка был ли корректный клик, что описан в событии event.
   * @param {Event} event
   * @returns {boolean} Вернет true в случае если статус игры "играем", 
   * клик что описан в объекте event был по ячейке и ячейка куда был 
   * произведен клик была пустой.
   */
  isCorrectClick(event) {
    return this.status.isStatusPlaying() && this.isClickByCell(event) &&
      this.isCellEmpty(event);
  }

  /**
   * Проверка что клик был по ячейке.
   * @param {Event} event
   * @param {HTMLElement} event.target
   * @returns {boolean} Вернет true, если клик был по ячейке, иначе false.
   */
  isClickByCell(event) {
    return event.target.tagName === 'TD';
  }

  /**
   * Проверка что в ячейку не ставили значение (крестик или нолик).
   * @param {Event} event
   * @param {HTMLElement} event.target
   * @returns {boolean} Вернет true, если ячейка пуста, иначе false.
   */
  isCellEmpty(event) {
    // Получаем строку и колонку куда кликнули.
    let row = +event.target.dataset.row;
    let col = +event.target.dataset.col;

    return this.playMap.mapValues[row][col] === '';
  }

  /**
   * Заполняет ячейку в которую кликнул пользователь в событии event.
   * @param {Event} event
   * @param {HTMLElement} event.target
   */
  fillCell(event) {
    // Получаем строку и колонку куда кликнули.
    let row = +event.target.dataset.row;
    let col = +event.target.dataset.col;

    // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
    this.playMap.mapValues[row][col] = this.phase;
    event.target.textContent = this.phase;
  }

  /**
   * Проверка есть ли выигрышная ситуация на карте.
   * @returns {boolean} Вернет true, если игра выиграна, иначе false.
   */
  hasWon() {
    return this.isLineWon({
        x: 0,
        y: 0
      }, {
        x: 1,
        y: 0
      }, {
        x: 2,
        y: 0
      }) ||
      this.isLineWon({
        x: 0,
        y: 1
      }, {
        x: 1,
        y: 1
      }, {
        x: 2,
        y: 1
      }) ||
      this.isLineWon({
        x: 0,
        y: 2
      }, {
        x: 1,
        y: 2
      }, {
        x: 2,
        y: 2
      }) ||

      this.isLineWon({
        x: 0,
        y: 0
      }, {
        x: 0,
        y: 1
      }, {
        x: 0,
        y: 2
      }) ||
      this.isLineWon({
        x: 1,
        y: 0
      }, {
        x: 1,
        y: 1
      }, {
        x: 1,
        y: 2
      }) ||
      this.isLineWon({
        x: 2,
        y: 0
      }, {
        x: 2,
        y: 1
      }, {
        x: 2,
        y: 2
      }) ||

      this.isLineWon({
        x: 0,
        y: 0
      }, {
        x: 1,
        y: 1
      }, {
        x: 2,
        y: 2
      }) ||
      this.isLineWon({
        x: 0,
        y: 2
      }, {
        x: 1,
        y: 1
      }, {
        x: 2,
        y: 0
      });
  }

  /**
   * Проверка есть ли выигрышная ситуация на линии.
   * @param {{x: int, y: int}} a 1-ая ячейка.
   * @param {{x: int, y: int}} b 2-ая ячейка.
   * @param {{x: int, y: int}} c 3-я ячейка.
   * @returns {boolean} Вернет true, если линия выиграна, иначе false.
   */
  isLineWon(a, b, c) {
    let value = this.playMap.mapValues[a.y][a.x] + this.playMap.
    mapValues[b.y][b.x] + this.playMap.mapValues[c.y][c.x];
    return value === 'XXX' || value === '000';
  }

  /**
   * Ставит статус игры в "остановлена".
   */
  setStatusStopped() {
    this.status.setStopped();
  }

  /**
   * Сообщает о победе.
   */
  sayWonPhrase() {
    let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
    alert(`${figure} выиграли!`);
  }

  /**
   * Меняет фигуру (крестик или нолик).
   */
  togglePhase() {
    this.phase = this.phase === 'X' ? '0' : 'X';
  }
}