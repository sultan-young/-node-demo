"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
// 在[min, max) 中取到一个随机整数，注意取到的数不包括max本身
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomNumber = getRandomNumber;
