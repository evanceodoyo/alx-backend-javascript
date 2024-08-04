const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token.js");

describe("getPaymentTokenFromAPI", function () {
  it("should return a promise", function () {
    expect(getPaymentTokenFromAPI(true)).to.be.a("promise");
  });

  it("should resolve the promise", function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({
          data: "Successful response from the API",
        });
        done();
      })
      .catch(done);
  });
});
