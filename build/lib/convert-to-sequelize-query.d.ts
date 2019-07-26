import Sequelize from 'sequelize';
import { StringQueryOperator, IDQueryOperator, IntQueryOperator, FloatQueryOperator, DateTimeQueryOperator, DateQueryOperator, ID } from '../types';
declare type NumberSequelizeQuery = Partial<{
    [Sequelize.Op.eq]: number;
    [Sequelize.Op.ne]: number;
    [Sequelize.Op.gt]: number;
    [Sequelize.Op.gte]: number;
    [Sequelize.Op.lt]: number;
    [Sequelize.Op.lte]: number;
    [Sequelize.Op.in]: number[];
    [Sequelize.Op.notIn]: number[];
}>;
declare type DateSequelizeQuery = Partial<{
    [Sequelize.Op.eq]: Date;
    [Sequelize.Op.ne]: Date;
    [Sequelize.Op.gt]: Date;
    [Sequelize.Op.gte]: Date;
    [Sequelize.Op.lt]: Date;
    [Sequelize.Op.lte]: Date;
    [Sequelize.Op.in]: Date[];
    [Sequelize.Op.notIn]: Date[];
}>;
declare function convertToSequelizeQuery(queryOperator: StringQueryOperator): Partial<{
    [Sequelize.Op.eq]: string;
    [Sequelize.Op.ne]: string;
    [Sequelize.Op.in]: string[];
    [Sequelize.Op.notIn]: string[];
    [Sequelize.Op.like]: RegExp;
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