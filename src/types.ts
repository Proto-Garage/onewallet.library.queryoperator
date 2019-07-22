import { ID } from 'onewallet.library.client';

export { ID };

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
