"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const ramda_1 = __importDefault(require("ramda"));
const operators = {
    eq: sequelize_1.default.Op.eq,
    ne: sequelize_1.default.Op.ne,
    in: sequelize_1.default.Op.in,
    nin: sequelize_1.default.Op.notIn,
    gt: sequelize_1.default.Op.gt,
    gte: sequelize_1.default.Op.gte,
    lt: sequelize_1.default.Op.lt,
    lte: sequelize_1.default.Op.lte,
    startsWith: sequelize_1.default.Op.like,
};
function convertToSequelizeQuery(queryOperator) {
    return ramda_1.default.compose(ramda_1.default.fromPairs, ramda_1.default.filter(ramda_1.default.identity), ramda_1.default.map(([key, value]) => {
        if (!ramda_1.default.has(key, operators)) {
            return null;
        }
        if (key === 'startsWith') {
            return [sequelize_1.default.Op.like, `${value}%`];
        }
        return [ramda_1.default.prop(key, operators), value];
    }), ramda_1.default.toPairs)(queryOperator);
}
exports.default = convertToSequelizeQuery;
//# sourceMappingURL=convert-to-sequelize-query.js.map