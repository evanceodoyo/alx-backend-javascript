const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should round first argument', function () {
        assert.equal(calculateNumber(1.0, 3), 4);
        assert.equal(calculateNumber(1.3, 3), 4);
        assert.equal(calculateNumber(1.7, 3), 5);
    });

    it('should round the second argument', function () {
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1, 3.3), 4);
        assert.equal(calculateNumber(0, 3.0), 3);
    });

    it('should return return the right number', function () {
        assert.equal(calculateNumber(1.3, 0), 1);
        assert.equal(calculateNumber(0, 1.2), 1);
        assert.equal(calculateNumber(1.3, 1.3), 2);
        assert.equal(calculateNumber(1.7, 1.2), 3);
        assert.equal(calculateNumber(1.3, 1.8), 3);
        assert.equal(calculateNumber(1.6, 1.8), 4);
    });
});