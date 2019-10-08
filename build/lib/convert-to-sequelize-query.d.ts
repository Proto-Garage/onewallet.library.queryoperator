import { Op } from 'sequelize';
import { StringQueryOperator, IDQueryOperator, IDArrayQueryOperator, IntQueryOperator, FloatQueryOperator, DateTimeQueryOperator, DateQueryOperator, BooleanQueryOperator, ID } from '../types';
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
declare type BooleanSequelizeQuery = Partial<{
    [Op.eq]: boolean;
    [Op.ne]: boolean;
}>;
declare function convertToSequelizeQuery(queryOperator: StringQueryOperator): Partial<{
    [Op.eq]: string;
    [Op.ne]: string;
    [Op.in]: string[];
    [Op.notIn]: string[];
    [Op.like]: RegExp;
}>;
declare function convertToSequelizeQuery(queryOperator: IDQueryOperator): Partial<{
    [Op.eq]: ID;
    [Op.ne]: ID;
    [Op.in]: ID[];
    [Op.notIn]: ID[];
}>;
declare function convertToSequelizeQuery(queryOperator: IDArrayQueryOperator): Partial<{
    [Op.overlap]: ID[];
}>;
declare function convertToSequelizeQuery(queryOperator: IntQueryOperator): NumberSequelizeQuery;
declare function convertToSequelizeQuery(queryOperator: FloatQueryOperator): NumberSequelizeQuery;
declare function convertToSequelizeQuery(queryOperator: DateTimeQueryOperator): DateSequelizeQuery;
declare function convertToSequelizeQuery(queryOperator: DateQueryOperator): DateSequelizeQuery;
declare function convertToSequelizeQuery(queryOperator: BooleanQueryOperator): BooleanSequelizeQuery;
export default convertToSequelizeQuery;
//# sourceMappingURL=convert-to-sequelize-query.d.ts.map