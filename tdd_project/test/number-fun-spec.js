const assert = require('assert');

describe('returnsThree', function() {
    it ('should return the number 3', function() {
        let actual = returnsThree();
        let expected = 3;
        assert.equal(actual, expected);
    })
})

describe('reciprocal(num)', function() {
    it ('should intake a number and return the reciprocal', function() {
        assert.equal(reciprocal(2), 0.5);
        assert.equal(reciprocal(4), 0.25);
        assert.equal(reciprocal(5), 0.2);
        
    })
})
