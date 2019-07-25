import { Op } from 'sequelize';
import { StringQueryOperator, IDQueryOperator, IntQueryOperator, FloatQueryOperator, DateTimeQueryOperator, DateQueryOperator, ID } from '../types';
declare type NumberSequelizeQuery = Partial<{
    [Op.eq]: number;
    [Op.ne]: number;
    [Op.gt]: number;
    [Op.gte]: number;
    [Op.lt]: number;
    [Op.lte]: number;
    [Op.in]: number[];
    [Op.notIn]: number[];
}>;
declare type DateSequelizeQuery = Partial<{
    [Op.eq]: Date;
    [Op.ne]: Date;
    [Op.gt]: Date;
    [Op.gte]: Date;
    [Op.lt]: Date;
    [Op.lte]: Date;
    [Op.in]: Date[];
    [Op.notIn]: Date[];
}>;
declare function convertToSequelizeQuery(queryOperator: StringQueryOperator): Partial<{
    [Op.eq]: string;
    [Op.ne]: string;
    [Op.in]: string[];
    [Op.notIn]: string[];
    [Op.like]: RegExp;
}>;
declare function convertToSequelizeQuery(queryOperator: IDQueryOperator): Partial<{
    $eq: ID;
    $ne: ID;
    $in: ID[];
    $nin: ID[];
}>;
declare function convertToSequelizeQuery(queryOperator: IntQueryOperator): NumberSequelizeQuery;
declare function convertToSequelizeQuery(queryOperator: FloatQueryOperator): NumberSequelizeQuery;
declare function convertToSequelizeQuery(queryOperator: DateTimeQueryOperator): DateSequelizeQuery;
declare function convertToSequelizeQuery(queryOperator: DateQueryOperator): DateSequelizeQuery;
export default convertToSequelizeQuery;
//# sourceMappingURL=convert-to-sequelize-query.d.ts.map