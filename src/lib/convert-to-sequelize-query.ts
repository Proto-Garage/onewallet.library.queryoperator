import { Op } from 'sequelize';
import R from 'ramda';

import {
  StringQueryOperator,
  IDQueryOperator,
  IDArrayQueryOperator,
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
  overlaps: Op.overlap,
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
  [Op.eq]: ID;
  [Op.ne]: ID;
  [Op.in]: ID[];
  [Op.notIn]: ID[];
}>
function convertToSequelizeQuery(queryOperator: IDArrayQueryOperator): Partial<{
  [Op.overlap]: ID[];
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
      if (!R.has(key, operators)) {
        return null;
      }

      if (key === 'startsWith') {
        return [Op.like, `${value}%`];
      }

      return [R.prop(key, operators), value];
    }),
    R.toPairs,
  )(queryOperator);
}

export default convertToSequelizeQuery;
