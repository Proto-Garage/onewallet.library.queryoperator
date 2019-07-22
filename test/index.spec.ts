import { expect } from 'chai';
import Sequelize from 'sequelize';

import { convertToMongooseQuery, convertToSequelizeQuery } from '../src';

describe('convertToMongooseQuery(queryOperator: StringQueryOperator)', () => {
  it('should return a valid Mongoose query', () => {
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
      expect(convertToMongooseQuery(input)).to.deep.equal(output);
    }
  });

  describe('Given a `startsWith` operator', () => {
    it('should return a valid Mongoose query with $regex operator', () => {
      const queryOperator = {
        startsWith: 'mem',
      };

      expect(convertToMongooseQuery(queryOperator)).to.deep.equal({
        $regex: /^mem.*$/i,
      });
    });
  });
});

describe('convertToMongooseQuery(queryOperator: IntQueryOperator)', () => {
  it('should return a valid Mongoose query', () => {
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
      expect(convertToMongooseQuery(input)).to.deep.equal(output);
    }
  });
});

describe('convertToSequelizeQuery(queryOperator: StringQueryOperator)', () => {
  it('should return a valid Sequelize query', () => {
    const data = [{
      input: {
        eq: 'hello',
      },
      output: {
        [Sequelize.Op.eq]: 'hello',
      },
    }, {
      input: {
        ne: 'hello',
      },
      output: {
        [Sequelize.Op.ne]: 'hello',
      },
    }, {
      input: {
        in: ['a', 'b', 'c'],
      },
      output: {
        [Sequelize.Op.in]: ['a', 'b', 'c'],
      },
    }, {
      input: {
        nin: ['a', 'b', 'c'],
      },
      output: {
        [Sequelize.Op.notIn]: ['a', 'b', 'c'],
      },
    }];

    for (const { input, output } of data) {
      expect(convertToSequelizeQuery(input)).to.deep.equal(output);
    }
  });

  describe('Given a `startsWith` operator', () => {
    it('should return a valid Mongoose query with $regex operator', () => {
      const queryOperator = {
        startsWith: 'mem',
      };

      expect(convertToSequelizeQuery(queryOperator)).to.deep.equal({
        [Sequelize.Op.like]: 'mem$',
      });
    });
  });
});

describe('convertToSequelizeQuery(queryOperator: IntQueryOperator)', () => {
  it('should return a valid sequelize query', () => {
    const data = [{
      input: {
        gt: 5,
      },
      output: {
        [Sequelize.Op.gt]: 5,
      },
    }, {
      input: {
        gte: 5,
      },
      output: {
        [Sequelize.Op.gte]: 5,
      },
    }, {
      input: {
        lt: 5,
      },
      output: {
        [Sequelize.Op.lt]: 5,
      },
    }, {
      input: {
        lte: 5,
      },
      output: {
        [Sequelize.Op.lte]: 5,
      },
    }];

    for (const { input, output } of data) {
      expect(convertToSequelizeQuery(input)).to.deep.equal(output);
    }
  });
});
