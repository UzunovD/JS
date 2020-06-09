"use strict";

class Status {
  constructor() {
    this.setPlaying();
  }

  setPlaying() {
    this.condition = 'playing';
  }

  setStopped() {
    this.condition = 'stopped'
  }

  /**
   * Проверка что мы "играем", что игра не закончена.
   * @returns {boolean} Вернет true, статус игры "играем", иначе false.
   */
  isStatusPlaying() {
    return this.condition === 'playing';
  }
}