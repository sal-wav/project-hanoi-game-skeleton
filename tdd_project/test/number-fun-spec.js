const assert = require('assert');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree', function() {
    it ('should return the number 3', function() {
        let actual = returnsThree();
        let expected = 3;
        assert.equal(actual, expected);
    })
})

describe('reciprocal(num)', function() {
    context('if the input is a number not equal to 0', function() {
        it ('should intake a number and return the reciprocal', function() {
            assert.equal(reciprocal(2), 0.5);
            assert.equal(reciprocal(4), 0.25);
            assert.equal(reciprocal(5), 0.2);
        })
    })
    context('if the input is not a number', function() {
        it('should return NaN', function() {
            assert.equal(reciprocal('string'), NaN);
            assert.equal(reciprocal([1, 2, 3]), NaN)
        })
    })
    context('if input is 0', function() {
        it('should return Infinity', function() {
            assert.equal(reciprocal(0), Infinity)
        })
    })
})
