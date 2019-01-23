var expect = require('./node_modules/chai/chai').expect
var absoluteValueSumMinimization = require('./absoluteValueSumMinimization');

describe('absoluteValueSumMinimization Function: ', function() {
    it('Should return: Input should be an array of integers.', function() {
        var expectedResult = 'Input should be an array of integers.';
        var calculatedResult = absoluteValueSumMinimization.absoluteValueSum('string');
        expect(calculatedResult).to.equal(expectedResult);
    });

    it('Array should not be empty', function() {
        let expectedResult = 'Empty array.';
        let calculatedResult = absoluteValueSumMinimization.absoluteValueSum([]);
        expect(calculatedResult).to.equal(expectedResult);
    });

    it('For [2, 4, 7] the result of absoluteValueSumMinimization should be 4.', function () {
        let expectedResult = 4;
        let calculatedResult = absoluteValueSumMinimization.absoluteValueSum([2, 4, 7]);
        expect(calculatedResult).to.equal(expectedResult);
    });

    it('For [2, 4, 6, 7] the result of absoluteValueSumMinimization should be 4.', function () {
        let expectedResult = 4;
        let calculatedResult = absoluteValueSumMinimization.absoluteValueSum([2, 4, 6, 7]);
        expect(calculatedResult).to.equal(expectedResult);
    });

    it('For [2, 4, 6, 7, 7] the result of absoluteValueSumMinimization should be 6.', function () {
        let expectedResult = 6;
        let calculatedResult = absoluteValueSumMinimization.absoluteValueSum([2, 4, 6, 7, 7]);
        expect(calculatedResult).to.equal(expectedResult);
    });

    it('For [2, 4, 6, 7, 7, 8] the result of absoluteValueSumMinimization should be 6.', function () {
        let expectedResult = 6;
        let calculatedResult = absoluteValueSumMinimization.absoluteValueSum([2, 4, 6, 7, 7, 8]);
        expect(calculatedResult).to.equal(expectedResult);
    });

    it('For [2, 4, 6, 7, 8] the result of absoluteValueSumMinimization should be 6.', function () {
        let expectedResult = 6;
        let calculatedResult = absoluteValueSumMinimization.absoluteValueSum([2, 4, 6, 7, 8]);
        expect(calculatedResult).to.equal(expectedResult);
    });


});
