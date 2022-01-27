"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boss_1 = __importDefault(require("./boss"));
const hero_1 = __importDefault(require("./hero"));
const pk_system_1 = __importDefault(require("./pk_system"));
const skill_1 = __importDefault(require("./skill"));
const skill = [
    {
        id: 10000,
        name: '力劈华山',
        damage: 1000,
        consume: 200,
        number: 3,
    },
];
const boss = new boss_1.default({
    name: '魔王',
    hp: 10000,
    mp: 3000,
    atk: 500,
});
const player = new hero_1.default({
    name: '勇士',
    hp: 5000,
    mp: 4000,
    atk: 200,
});
const pkSys = new pk_system_1.default({
    player,
    monster: boss,
});
const skillList = skill_1.default.skillList;
boss.appendSkill([skillList[0], skillList[2], skillList[3]]);
player.appendSkill([skillList[1], skillList[4]]);
pkSys.start();
