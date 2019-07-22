import { ID } from 'onewallet.library.client';
export { ID };
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
//# sourceMappingURL=types.d.ts.map