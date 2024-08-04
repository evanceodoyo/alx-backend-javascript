const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment.js");

describe("sendPaymentRequestToApi", function () {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spy.restore();
  });

  it("should call Utils.calculateNumber with correct arguments", function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;

  });

  it("should log the correct total", function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
