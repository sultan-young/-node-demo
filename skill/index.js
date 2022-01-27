"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSkill = void 0;
const config_1 = __importDefault(require("./config"));
class BaseSkill {
    constructor(name, damage, demand) {
        this.name = '未命名技能';
        // 技能初始伤害
        this.damage = 0;
        // 技能消耗
        this.demand = 0;
        this.name = name;
        this.damage = damage;
        this.demand = demand;
    }
}
exports.BaseSkill = BaseSkill;
// 技能管理器，存储了当前所有的已存在的技能
class SkillManager {
    constructor() {
        this.skillList = [];
        this.initBaseSkillList(config_1.default);
    }
    initBaseSkillList(config) {
        config.forEach(item => {
            const skill = new BaseSkill(item.name, item.damage, item.demand);
            this.skillList.push(skill);
        });
    }
    createSkill() {
    }
}
const skillManager = new SkillManager();
exports.default = skillManager;
