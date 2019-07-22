import Sequelize from 'sequelize';
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
  eq: Sequelize.Op.eq,
  ne: Sequelize.Op.ne,
  in: Sequelize.Op.in,
  nin: Sequelize.Op.notIn,
  gt: Sequelize.Op.gt,
  gte: Sequelize.Op.gte,
  lt: Sequelize.Op.lt,
  lte: Sequelize.Op.lte,
  startsWith: Sequelize.Op.like,
};

type NumberSequelizeQuery = Partial<{
  [Sequelize.Op.eq]: number;
  [Sequelize.Op.ne]: number;
  [Sequelize.Op.gt]: number;
  [Sequelize.Op.gte]: number;
  [Sequelize.Op.lt]: number;
  [Sequelize.Op.lte]: number;
  [Sequelize.Op.in]: number[];
  [Sequelize.Op.notIn]: number[];
}>;

type DateSequelizeQuery = Partial<{
  [Sequelize.Op.eq]: Date;
  [Sequelize.Op.ne]: Date;
  [Sequelize.Op.gt]: Date;
  [Sequelize.Op.gte]: Date;
  [Sequelize.Op.lt]: Date;
  [Sequelize.Op.lte]: Date;
  [Sequelize.Op.in]: Date[];
  [Sequelize.Op.notIn]: Date[];
}>;

function convertToSequelizeQuery(queryOperator: StringQueryOperator): Partial<{
  [Sequelize.Op.eq]: string;
  [Sequelize.Op.ne]: string;
  [Sequelize.Op.in]: string[];
  [Sequelize.Op.notIn]: string[];
  [Sequelize.Op.like]: RegExp;
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
        return [Sequelize.Op.like, `${value}%`];
      }

      return [key, value];
    }),
    R.toPairs,
  )(queryOperator);
}

export default convertToSequelizeQuery;
