import { StringQueryOperator, IDQueryOperator, IDArrayQueryOperator, IntQueryOperator, FloatQueryOperator, DateTimeQueryOperator, DateQueryOperator, BooleanQueryOperator, ID } from '../types';
declare type NumberMongooseQuery = Partial<{
    $eq: number;
    $ne: number;
    $gt: number;
    $gte: number;
    $lt: number;
    $lte: number;
    $in: number[];
    $nin: number[];
}>;
declare type DateMongooseQuery = Partial<{
    $eq: Date;
    $ne: Date;
    $gt: Date;
    $gte: Date;
    $lt: Date;
    $lte: Date;
    $in: Date[];
    $nin: Date[];
}>;
declare type BooleanMongooseQuery = Partial<{
    $eq: boolean;
    $ne: boolean;
}>;
declare function convertToMongooseQuery(queryOperator: StringQueryOperator): Partial<{
    $eq: string;
    $ne: string;
    $in: string[];
    $nin: string[];
    $regex: RegExp;
}>;
declare function convertToMongooseQuery(queryOperator: IDQueryOperator): Partial<{
    $eq: ID;
    $ne: ID;
    $in: ID[];
    $nin: ID[];
}>;
declare function convertToMongooseQuery(queryOperator: IDArrayQueryOperator): Partial<{
    $in: ID[];
    $nin: ID[];
}>;
declare function convertToMongooseQuery(queryOperator: IntQueryOperator): NumberMongooseQuery;
declare function convertToMongooseQuery(queryOperator: FloatQueryOperator): NumberMongooseQuery;
declare function convertToMongooseQuery(queryOperator: DateTimeQueryOperator): DateMongooseQuery;
declare function convertToMongooseQuery(queryOperator: DateQueryOperator): DateMongooseQuery;
declare function convertToMongooseQuery(queryOperator: BooleanQueryOperator): BooleanMongooseQuery;
export default convertToMongooseQuery;
//# sourceMappingURL=convert-to-mongoose-query.d.ts.map