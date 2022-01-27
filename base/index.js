"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("../util/random");
class BaseSprite {
    constructor(name, hp, mp, atk, skillList = []) {
        this.name = '';
        this.hp = 0;
        this.mp = 0;
        this.atk = 0;
        this.skillList = [];
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
        this.skillList = skillList;
    }
    attack(monster) {
        const enabledSkill = this.skillList.filter(skill => this.mp >= skill.demand);
        const isUseSkill = enabledSkill.length && random_1.getRandomNumber(0, 2) === 1;
        const info = {
            name: '',
            damage: 0,
            instance: this,
        };
        if (isUseSkill) {
            const index = random_1.getRandomNumber(0, enabledSkill.length);
            info.name = enabledSkill[index].name;
            info.damage = enabledSkill[index].damage;
            this.mp -= enabledSkill[index].demand;
        }
        else {
            info.name = '普通攻击';
            info.damage = this.atk;
        }
        // 角色播放攻击动画
        return info;
    }
    // abstract hurt(baseSprite: BaseSprite): BaseSprite; 
    hurt(atkInfo) {
        const realHurtCount = atkInfo.damage * (1 - this.percentDefense / 100);
        this.hp -= realHurtCount;
        console.log(this.name + '受到了' + atkInfo.instance.name + realHurtCount + '伤害值');
        return this;
    }
    appendSkill(skill) {
        if (typeof skill === 'object') {
            this.skillList.push(...skill);
        }
        else {
            this.skillList.push(skill);
        }
    }
}
exports.default = BaseSprite;
