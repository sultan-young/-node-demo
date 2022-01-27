"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HurtDecorator = void 0;
const HurtDecorator = (target, propertyKey, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function (hero) {
        const self = this;
        const realHurtCount = hero.atk * (1 - self.percentDefense / 100);
        console.log(realHurtCount);
    };
};
exports.HurtDecorator = HurtDecorator;
