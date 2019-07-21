"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = __importDefault(require("ramda"));
const operators = new Set([
    'eq', 'ne', 'gt', 'gte', 'lt', 'lte', 'in', 'nin', 'startsWith',
]);
function convertToMongooseQuery(queryOperator) {
    return ramda_1.default.compose(ramda_1.default.fromPairs, ramda_1.default.filter(ramda_1.default.identity), ramda_1.default.map(([key, value]) => {
        if (!operators.has(key)) {
            return null;
        }
        if (key === 'startsWith') {
            const regex = new RegExp(`^${value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}.*$`, 'i');
            return ['$regex', regex];
        }
        return [`$${key}`, value];
    }), ramda_1.default.toPairs)(queryOperator);
}
exports.convertToMongooseQuery = convertToMongooseQuery;
//# sourceMappingURL=index.js.map