export type ID = string;

type Operator<T = any> = Partial<{
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

export type QueryOperator<TValue, TOperator extends keyof Operator = keyof Operator> =
  Pick<Operator<TValue>, TOperator>;

export type EnumQueryOperator<T> = QueryOperator<T, 'eq' | 'ne' | 'in' | 'nin'>;

export type StringQueryOperator = QueryOperator<string, 'eq' | 'ne' | 'in' | 'nin' | 'startsWith' | 'contains'>;

export type IDQueryOperator = QueryOperator<ID, 'eq' | 'ne' | 'in' | 'nin'>;

export type ArrayQueryOperator<T> = QueryOperator<T, 'overlaps' | 'includesAny' | 'excludesAll'>;

export type IDArrayQueryOperator = ArrayQueryOperator<ID>;

export type IntQueryOperator = QueryOperator<number, 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'>;

export type FloatQueryOperator = IntQueryOperator;

export type DateTimeQueryOperator = QueryOperator<Date, 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'>;

export type DateQueryOperator = DateTimeQueryOperator;

export type BooleanQueryOperator = QueryOperator<boolean, 'eq' | 'ne' | 'in'>;
