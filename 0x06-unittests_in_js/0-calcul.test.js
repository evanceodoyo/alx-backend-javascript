const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should return 4 when if `a = 1` and `b = 3`', function () {
        assert.equal(calculateNumber(1, 3), 4);
    });

    it('should return 5 when if `a = 1` [rounded] and `b = 3.7` [rounded]', function () {
        assert.equal(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when if `a = 1.2` [rounded] and `b = 3.7 [rounded]`', function () {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 when if `a = 1.5` [rounded] and `b = 3.7` [rounded]', function () {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
});