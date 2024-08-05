const request = require("request");
const { expect } = require("chai");

describe("Index page", () => {
  it("Correct status code?", (done) => {
    request.get("http://localhost:7865", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("Correct result?", (done) => {
    request.get("http://localhost:7865", (error, response, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", function () {
  it("correct status code when :id is a number", function (done) {
    request.get(
      "http://localhost:7865/cart/12",
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it("Correct result when :id is a number", function (done) {
    request.get(
      "http://localhost:7865/cart/12",
      function (error, response, body) {
        expect(body).to.equal("Payment methods for cart 12");
        done();
      }
    );
  });

  it("Correct status code when :id is NOT a number", function (done) {
    request.get(
      "http://localhost:7865/cart/NaN",
      function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      }
    );
  });
});
