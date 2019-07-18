import { expect } from 'chai';
import { convertToMongoDBQuery } from '../src';

describe('convertToMongoDBQuery(queryOperator: StringQueryOperator)', () => {
  it('should return a valid MongoDB query', () => {
    const data = [{
      input: {
        eq: 'hello',
      },
      output: {
        $eq: 'hello',
      },
    }, {
      input: {
        ne: 'hello',
      },
      output: {
        $ne: 'hello',
      },
    }, {
      input: {
        in: ['a', 'b', 'c'],
      },
      output: {
        $in: ['a', 'b', 'c'],
      },
    }, {
      input: {
        nin: ['a', 'b', 'c'],
      },
      output: {
        $nin: ['a', 'b', 'c'],
      },
    }];

    for (const { input, output } of data) {
      expect(convertToMongoDBQuery(input)).to.deep.equal(output);
    }
  });

  describe('Given a `startsWith` operator', () => {
    it('should return a valid MongoDB query with $regex operator', () => {
      const queryOperator = {
        startsWith: 'mem',
      };

      expect(convertToMongoDBQuery(queryOperator)).to.deep.equal({
        $regex: /^mem.*$/i,
      });
    });
  });
});

describe('convertToMongoDBQuery(queryOperator: IntQueryOperator)', () => {
  it('should return a valid MongoDB query', () => {
    const data = [{
      input: {
        gt: 5,
      },
      output: {
        $gt: 5,
      },
    }, {
      input: {
        gte: 5,
      },
      output: {
        $gte: 5,
      },
    }, {
      input: {
        lt: 5,
      },
      output: {
        $lt: 5,
      },
    }, {
      input: {
        lte: 5,
      },
      output: {
        $lte: 5,
      },
    }];

    for (const { input, output } of data) {
      expect(convertToMongoDBQuery(input)).to.deep.equal(output);
    }
  });
});
