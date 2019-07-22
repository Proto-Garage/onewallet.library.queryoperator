import R from 'ramda';

import {
  StringQueryOperator,
  IDQueryOperator,
  IntQueryOperator,
  FloatQueryOperator,
  DateTimeQueryOperator,
  DateQueryOperator,
  ID,
} from '../types';

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
  $eq: Date;
  $ne: Date;
  $gt: Date;
  $gte: Date;
  $lt: Date;
  $lte: Date;
  $in: Date[];
  $nin: Date[];
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
function convertToMongooseQuery(queryOperator: Record<any, any>) {
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

export default convertToMongooseQuery;
