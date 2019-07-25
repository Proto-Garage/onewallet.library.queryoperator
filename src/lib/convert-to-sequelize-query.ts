import { Op } from 'sequelize';
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

const operators = {
  eq: Op.eq,
  ne: Op.ne,
  in: Op.in,
  nin: Op.notIn,
  gt: Op.gt,
  gte: Op.gte,
  lt: Op.lt,
  lte: Op.lte,
  startsWith: Op.like,
};

type NumberSequelizeQuery = Partial<{
  [Op.eq]: number;
  [Op.ne]: number;
  [Op.gt]: number;
  [Op.gte]: number;
  [Op.lt]: number;
  [Op.lte]: number;
  [Op.in]: number[];
  [Op.notIn]: number[];
}>;

type DateSequelizeQuery = Partial<{
  [Op.eq]: Date;
  [Op.ne]: Date;
  [Op.gt]: Date;
  [Op.gte]: Date;
  [Op.lt]: Date;
  [Op.lte]: Date;
  [Op.in]: Date[];
  [Op.notIn]: Date[];
}>;

function convertToSequelizeQuery(queryOperator: StringQueryOperator): Partial<{
  [Op.eq]: string;
  [Op.ne]: string;
  [Op.in]: string[];
  [Op.notIn]: string[];
  [Op.like]: RegExp;
}>
function convertToSequelizeQuery(queryOperator: IDQueryOperator): Partial<{
  $eq: ID;
  $ne: ID;
  $in: ID[];
  $nin: ID[];
}>
function convertToSequelizeQuery(queryOperator: IntQueryOperator): NumberSequelizeQuery;
function convertToSequelizeQuery(queryOperator: FloatQueryOperator): NumberSequelizeQuery;
function convertToSequelizeQuery(queryOperator: DateTimeQueryOperator): DateSequelizeQuery;
function convertToSequelizeQuery(queryOperator: DateQueryOperator): DateSequelizeQuery;
function convertToSequelizeQuery(queryOperator: Record<any, any>) {
  return R.compose<any, any, any, any, any>(
    R.fromPairs,
    R.filter<any>(R.identity),
    R.map(([key, value]) => {
      if (!R.has('key')(operators)) {
        return null;
      }

      if (key === 'startsWith') {
        return [Op.like, `${value}%`];
      }

      return [key, value];
    }),
    R.toPairs,
  )(queryOperator);
}

export default convertToSequelizeQuery;
