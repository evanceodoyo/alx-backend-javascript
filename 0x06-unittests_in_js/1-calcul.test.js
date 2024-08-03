const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should round first argument', function () {
            assert.equal(calculateNumber('SUM', 1.0, 3), 4);
            assert.equal(calculateNumber('SUM', 1.3, 3), 4);
            assert.equal(calculateNumber('SUM', 1.7, 3), 5);
        });
    
        it('should round the second argument', function () {
            assert.equal(calculateNumber('SUM', 1, 3.7), 5);
            assert.equal(calculateNumber('SUM', 1, 3.3), 4);
            assert.equal(calculateNumber('SUM', 0, 3.0), 3);
        });
    
        it('should return return the right number', function () {
            assert.equal(calculateNumber('SUM', 1.3, 0), 1);
            assert.equal(calculateNumber('SUM', 0, 1.2), 1);
            assert.equal(calculateNumber('SUM', 1.3, 1.3), 2);
            assert.equal(calculateNumber('SUM', 1.7, 1.2), 3);
            assert.equal(calculateNumber('SUM', 1.3, 1.8), 3);
            assert.equal(calculateNumber('SUM', 1.6, 1.8), 4);
        });
    });

    describe('SUBTRACT', function () {
        it('should round first argument', function () {
            assert.equal(calculateNumber('SUBTRACT', 1.0, 3), -2);
            assert.equal(calculateNumber('SUBTRACT', 1.3, 3), -2);
            assert.equal(calculateNumber('SUBTRACT', 1.7, 3), -1);
        });
    
        it('should round the second argument', function () {
            assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
            assert.equal(calculateNumber('SUBTRACT', 1, 3.3), -2);
            assert.equal(calculateNumber('SUBTRACT', 0, 3.0), -3);
        });
    
        it('should return return the right number', function () {
            assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
            assert.equal(calculateNumber('SUBTRACT', 0, 1.2), -1);
            assert.equal(calculateNumber('SUBTRACT', 1.3, 1.3), 0);
            assert.equal(calculateNumber('SUBTRACT', 1.7, 1.2), 1);
            assert.equal(calculateNumber('SUBTRACT', 1.3, 1.8), -1);
            assert.equal(calculateNumber('SUBTRACT', 1.6, 1.8), 0);
        });
    });

    describe('DIVIDE', function () {
        it('should round first argument', function () {
            assert.equal(calculateNumber('DIVIDE', 1.0, 3), 1 / 3);
            assert.equal(calculateNumber('DIVIDE', 1.3, 3), 1 /3);
            assert.equal(calculateNumber('DIVIDE', 1.7, 3), 2 / 3);
        });
    
        it('should round the second argument', function () {
            assert.equal(calculateNumber('DIVIDE', 1, 3.7), 1 / 4);
            assert.equal(calculateNumber('DIVIDE', 1, 3.3), 1 / 3);
            assert.equal(calculateNumber('DIVIDE', 0, 3.0), 0 / 3);
        });
    
        it('should return return the right number', function () {
            assert.equal(calculateNumber('DIVIDE', 0, 1.2), 0 / 1);
            assert.equal(calculateNumber('DIVIDE', 1.3, 1.3), 1 / 1);
            assert.equal(calculateNumber('DIVIDE', 1.7, 1.2), 2 / 1);
            assert.equal(calculateNumber('DIVIDE', 1.3, 1.8), 1 / 2);
            assert.equal(calculateNumber('DIVIDE', 1.6, 1.8), 2 / 2);
        });
    });

    describe('DIVIDE with 0', function () {
        it('should return `Error`', function() {
            assert.equal(calculateNumber('DIVIDE', 1.3, 0), 'Error');
        })
    });
});