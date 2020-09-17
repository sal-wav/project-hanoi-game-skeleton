 const chai = require('chai');
 const expect = chai.expect;
 const spies = require('chai-spies');
 chai.use(spies);

 const myMap = require('../problems/my-map.js')

 describe('myMap', function() {
     let testArray;
     beforeEach(function() {
        testArray = [1, 2, 3];
     })
     it ('should not mutate the original array', function() {
         let expected = [1, 2, 3];
         myMap(testArray, (num) => num*2);
         expect(testArray).to.eql(expected);
     })
 })
