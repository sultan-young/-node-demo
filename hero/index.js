"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
class Hero extends base_1.default {
    constructor({ name, hp, mp, atk }) {
        super(name, hp, mp, atk);
        this.percentDefense = 10;
    }
}
exports.default = Hero;
