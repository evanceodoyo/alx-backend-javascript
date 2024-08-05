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

describe("Available payments", function () {
  it("Correct status code and result", function (done) {
    request.get(
      "http://localhost:7865/available_payments",
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      }
    );
  });
});

describe("Login", function () {
  it("Correct status code and result when userName is provided", function (done) {
    request.post(
      {
        url: "http://localhost:7865/login",
        json: { userName: "Betty" },
      },
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Welcome Betty");
        done();
      }
    );
  });
});
