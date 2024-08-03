const chai = require('chai');
const calculateNumber = require('./1-calcul.js');
const expect = chai.expect;

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should round first argument', function () {
            expect(calculateNumber('SUM', 1.0, 3)).to.equal(4);
            expect(calculateNumber('SUM', 1.3, 3)).to.equal(4);
            expect(calculateNumber('SUM', 1.7, 3)).to.equal(5);
        });
    
        it('should round the second argument', function () {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
            expect(calculateNumber('SUM', 1, 3.3)).to.equal(4);
            expect(calculateNumber('SUM', 0, 3.0)).to.equal(3);
        });
    
        it('should return return the right number', function () {
            expect(calculateNumber('SUM', 1.3, 0)).to.equal(1);
            expect(calculateNumber('SUM', 0, 1.2)).to.equal(1);
            expect(calculateNumber('SUM', 1.3, 1.3)).to.equal(2);
            expect(calculateNumber('SUM', 1.7, 1.2)).to.equal(3);
            expect(calculateNumber('SUM', 1.3, 1.8)).to.equal(3);
            expect(calculateNumber('SUM', 1.6, 1.8)).to.equal(4);
        });
    });

    describe('SUBTRACT', function () {
        it('should round first argument', function () {
            expect(calculateNumber('SUBTRACT', 1.0, 3)).to.equal(-2);
            expect(calculateNumber('SUBTRACT', 1.3, 3)).to.equal(-2);
            expect(calculateNumber('SUBTRACT', 1.7, 3)).to.equal(-1);
        });
    
        it('should round the second argument', function () {
            expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
            expect(calculateNumber('SUBTRACT', 1, 3.3)).to.equal(-2);
            expect(calculateNumber('SUBTRACT', 0, 3.0)).to.equal(-3);
        });
    
        it('should return return the right number', function () {
            expect(calculateNumber('SUBTRACT', 1.3, 0)).to.equal(1);
            expect(calculateNumber('SUBTRACT', 0, 1.2)).to.equal(-1);
            expect(calculateNumber('SUBTRACT', 1.3, 1.3)).to.equal(0);
            expect(calculateNumber('SUBTRACT', 1.7, 1.2)).to.equal(1);
            expect(calculateNumber('SUBTRACT', 1.3, 1.8)).to.equal(-1);
            expect(calculateNumber('SUBTRACT', 1.6, 1.8)).to.equal(0);
        });
    });

    describe('DIVIDE', function () {
        it('should round first argument', function () {
            expect(calculateNumber('DIVIDE', 1.0, 3)).to.equal(1 / 3);
            expect(calculateNumber('DIVIDE', 1.3, 3)).to.equal(1 /3);
            expect(calculateNumber('DIVIDE', 1.7, 3)).to.equal(2 / 3);
        });
    
        it('should round the second argument', function () {
            expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(1 / 4);
            expect(calculateNumber('DIVIDE', 1, 3.3)).to.equal(1 / 3);
            expect(calculateNumber('DIVIDE', 0, 3.0)).to.equal(0 / 3);
        });
    
        it('should return return the right number', function () {
            expect(calculateNumber('DIVIDE', 0, 1.2)).to.equal(0 / 1);
            expect(calculateNumber('DIVIDE', 1.3, 1.3)).to.equal(1 / 1);
            expect(calculateNumber('DIVIDE', 1.7, 1.2)).to.equal(2 / 1);
            expect(calculateNumber('DIVIDE', 1.3, 1.8)).to.equal(1 / 2);
            expect(calculateNumber('DIVIDE', 1.6, 1.8)).to.equal(2 / 2);
        });
    });

    describe('DIVIDE with 0', function () {
        it('should return `Error`', function() {
            expect(calculateNumber('DIVIDE', 1.3, 0)).to.equal('Error');
        })
    });
});