const { expect } = require("chai");
const sinon = require("sinon");
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./3-payment.js");

describe("sendPaymentRequestToApi", function () {
  let spy;

  afterEach(function () {
    spy.restore();
  });

  it("should call Utils.calculateNumber with correct arguments", function () {
    spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args).to.deep.equal(["SUM", 100, 20]);
  });
});
