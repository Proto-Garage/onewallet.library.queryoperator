export declare type ID = string;
declare type Operator<T = any> = Partial<{
    eq: T;
    ne: T;
    gt: T;
    gte: T;
    lt: T;
    lte: T;
    in: T[];
    nin: T[];
    overlaps: T[];
    includesAny: T[];
    excludesAll: T[];
    startsWith: string;
    contains: string;
}>;
export declare type QueryOperator<TValue, TOperator extends keyof Operator = keyof Operator> = Pick<Operator<TValue>, TOperator>;
export declare type EnumQueryOperator<T> = QueryOperator<T, 'eq' | 'ne' | 'in' | 'nin'>;
export declare type StringQueryOperator = QueryOperator<string, 'eq' | 'ne' | 'in' | 'nin' | 'startsWith' | 'contains'>;
export declare type IDQueryOperator = QueryOperator<ID, 'eq' | 'ne' | 'in' | 'nin'>;
export declare type ArrayQueryOperator<T> = QueryOperator<T, 'overlaps' | 'includesAny' | 'excludesAll'>;
export declare type IDArrayQueryOperator = ArrayQueryOperator<ID>;
export declare type IntQueryOperator = QueryOperator<number, 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'>;
export declare type FloatQueryOperator = IntQueryOperator;
export declare type DateTimeQueryOperator = QueryOperator<Date, 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'>;
export declare type DateQueryOperator = DateTimeQueryOperator;
export declare type BooleanQueryOperator = QueryOperator<boolean, 'eq' | 'ne'>;
export {};
//# sourceMappingURL=types.d.ts.map