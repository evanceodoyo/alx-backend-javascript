const { expect } = require("chai");
const sinon = require("sinon");
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./4-payment.js");

describe("sendPaymentRequestToApi", function () {
  let spy;
  let stub;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function () {
    spy.restore();
    stub.restore();
  });

  it("should call Utils.calculateNumber with correct arguments", function () {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.firstCall.args).to.deep.equal(["SUM", 100, 20]);
  });

  it("should log the correct total", function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
