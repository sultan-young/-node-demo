"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PkSys {
    constructor({ player, monster }) {
        // 回合数
        this.roundCount = 0;
        this.player = player;
        this.monster = monster;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let attackSide = this.player;
            let defenseSide = this.monster;
            while (this.player.hp >= 0 && this.monster.hp >= 0) {
                this.roundCount++;
                const atkInfo = attackSide.attack(defenseSide);
                console.log(attackSide.name + '使用了一招' + atkInfo.name + `对${defenseSide.name}造成了${atkInfo.damage}的伤害值！`);
                const instance = defenseSide.hurt(atkInfo);
                yield new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(undefined);
                    }, 1000);
                });
                if (instance.hp <= 0) {
                    console.log(instance.name + '死亡, 游戏结束');
                    break;
                }
                [attackSide, defenseSide] = [defenseSide, attackSide];
                console.log('==============>');
            }
        });
    }
    sleep() {
        return new Promise(() => {
        });
    }
}
exports.default = PkSys;
