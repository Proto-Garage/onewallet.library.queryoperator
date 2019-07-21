import { ID } from 'onewallet.library.client';
export declare type StringQueryOperator = Partial<{
    eq: string;
    ne: string;
    in: string[];
    nin: string[];
    startsWith: string;
}>;
export declare type IDQueryOperator = Partial<{
    eq: ID;
    ne: ID;
    in: ID[];
    nin: ID[];
}>;
export declare type IntQueryOperator = Partial<{
    eq: number;
    ne: number;
    gt: number;
    gte: number;
    lt: number;
    lte: number;
    in: number[];
    nin: number[];
}>;
export declare type FloatQueryOperator = IntQueryOperator;
export declare type DateTimeQueryOperator = Partial<{
    eq: Date;
    ne: Date;
    gt: Date;
    gte: Date;
    lt: Date;
    lte: Date;
    in: Date[];
    nin: Date[];
}>;
export declare type DateQueryOperator = DateTimeQueryOperator;
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
    eq: Date;
    ne: Date;
    gt: Date;
    gte: Date;
    lt: Date;
    lte: Date;
    in: Date[];
    nin: Date[];
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
declare function convertToMongooseQuery(queryOperator: IntQueryOperator): NumberMongooseQuery;
declare function convertToMongooseQuery(queryOperator: FloatQueryOperator): NumberMongooseQuery;
declare function convertToMongooseQuery(queryOperator: DateTimeQueryOperator): DateMongooseQuery;
declare function convertToMongooseQuery(queryOperator: DateQueryOperator): DateMongooseQuery;
export { convertToMongooseQuery };
//# sourceMappingURL=index.d.ts.map