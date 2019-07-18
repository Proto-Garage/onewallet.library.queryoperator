import R from 'ramda';

export type StringQueryOperator = Partial<{
  eq: string;
  ne: string;
  in: string[];
  nin: string[];
  startsWith: string;
}>;

export type IntQueryOperator = Partial<{
  eq: number;
  ne: number;
  gt: number;
  gte: number;
  lt: number;
  lte: number;
  in: number[];
  nin: number[];
}>;

export type FloatQueryOperator = IntQueryOperator;

export type DateTimeQueryOperator = Partial<{
  eq: Date;
  ne: Date;
  gt: Date;
  gte: Date;
  lt: Date;
  lte: Date;
  in: Date[];
  nin: Date[];
}>;

export type DateQueryOperator = DateTimeQueryOperator;

const operators = new Set([
  'eq', 'ne', 'gt', 'gte', 'lt', 'lte', 'in', 'nin', 'startsWith',
]);

type NumberMongoDBQuery = Partial<{
  $eq: number;
  $ne: number;
  $gt: number;
  $gte: number;
  $lt: number;
  $lte: number;
  $in: number[];
  $nin: number[];
}>;
type DateMongoDBQuery = Partial<{
  eq: Date;
  ne: Date;
  gt: Date;
  gte: Date;
  lt: Date;
  lte: Date;
  in: Date[];
  nin: Date[];
}>;

function convertToMongoDBQuery(queryOperator: StringQueryOperator): Partial<{
  $eq: string;
  $ne: string;
  $in: string[];
  $nin: string[];
  $regex: RegExp;
}>
function convertToMongoDBQuery(queryOperator: IntQueryOperator): NumberMongoDBQuery;
function convertToMongoDBQuery(queryOperator: FloatQueryOperator): NumberMongoDBQuery;
function convertToMongoDBQuery(queryOperator: DateTimeQueryOperator): DateMongoDBQuery;
function convertToMongoDBQuery(queryOperator: DateQueryOperator): DateMongoDBQuery;
function convertToMongoDBQuery(queryOperator: Record<string, any>) {
  return R.compose<any, any, any, any, any>(
    R.fromPairs,
    R.filter<any>(R.identity),
    R.map(([key, value]) => {
      if (!operators.has(key)) {
        return null;
      }

      if (key === 'startsWith') {
        const regex = new RegExp(
          `^${value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}.*$`,
          'i',
        );

        return ['$regex', regex];
      }

      return [`$${key}`, value];
    }),
    R.toPairs,
  )(queryOperator);
}

export { convertToMongoDBQuery };
