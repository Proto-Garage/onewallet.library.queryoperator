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
declare type NumberMongoDBQuery = Partial<{
    $eq: number;
    $ne: number;
    $gt: number;
    $gte: number;
    $lt: number;
    $lte: number;
    $in: number[];
    $nin: number[];
}>;
declare type DateMongoDBQuery = Partial<{
    eq: Date;
    ne: Date;
    gt: Date;
    gte: Date;
    lt: Date;
    lte: Date;
    in: Date[];
    nin: Date[];
}>;
declare function convertToMongoDBQuery(queryOperator: StringQueryOperator): Partial<{
    $eq: string;
    $ne: string;
    $in: string[];
    $nin: string[];
    $regex: RegExp;
}>;
declare function convertToMongoDBQuery(queryOperator: IDQueryOperator): Partial<{
    $eq: ID;
    $ne: ID;
    $in: ID[];
    $nin: ID[];
}>;
declare function convertToMongoDBQuery(queryOperator: IntQueryOperator): NumberMongoDBQuery;
declare function convertToMongoDBQuery(queryOperator: FloatQueryOperator): NumberMongoDBQuery;
declare function convertToMongoDBQuery(queryOperator: DateTimeQueryOperator): DateMongoDBQuery;
declare function convertToMongoDBQuery(queryOperator: DateQueryOperator): DateMongoDBQuery;
export { convertToMongoDBQuery };
//# sourceMappingURL=index.d.ts.map