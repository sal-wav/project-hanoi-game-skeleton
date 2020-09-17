const chai = require('chai');
const { interface } = require('chai-spies');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const reverseString = require('../problems/reverse-string.js')

describe('reverseString', function() {
  context('if the input is a string', function() {
    it('should return the original string reversed', function() {
      const input = 'fun'
      const expected = 'nuf';
      const reversed = reverseString(input);
      expect(reversed).to.equal(expected);
    })
  })
  context('if the input is not a string', function() {
    it('should throw a TypeError', function() {
      expect(() => reverseString(2)).to.throw(TypeError);
    })
  })
  
})