import R from 'ramda';
import { ID } from 'onewallet.library.client';

export type StringQueryOperator = Partial<{
  eq: string;
  ne: string;
  in: string[];
  nin: string[];
  startsWith: string;
}>;

export type IDQueryOperator = Partial<{
  eq: ID;
  ne: ID;
  in: ID[];
  nin: ID[];
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

type NumberMongooseQuery = Partial<{
  $eq: number;
  $ne: number;
  $gt: number;
  $gte: number;
  $lt: number;
  $lte: number;
  $in: number[];
  $nin: number[];
}>;

type DateMongooseQuery = Partial<{
  eq: Date;
  ne: Date;
  gt: Date;
  gte: Date;
  lt: Date;
  lte: Date;
  in: Date[];
  nin: Date[];
}>;

function convertToMongooseQuery(queryOperator: StringQueryOperator): Partial<{
  $eq: string;
  $ne: string;
  $in: string[];
  $nin: string[];
  $regex: RegExp;
}>
function convertToMongooseQuery(queryOperator: IDQueryOperator): Partial<{
  $eq: ID;
  $ne: ID;
  $in: ID[];
  $nin: ID[];
}>
function convertToMongooseQuery(queryOperator: IntQueryOperator): NumberMongooseQuery;
function convertToMongooseQuery(queryOperator: FloatQueryOperator): NumberMongooseQuery;
function convertToMongooseQuery(queryOperator: DateTimeQueryOperator): DateMongooseQuery;
function convertToMongooseQuery(queryOperator: DateQueryOperator): DateMongooseQuery;
function convertToMongooseQuery(queryOperator: Record<string, any>) {
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

export { convertToMongooseQuery };
