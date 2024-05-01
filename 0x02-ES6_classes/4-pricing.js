import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(val) {
    this._amount = val;
  }

  get amount() {
    return this._amount;
  }

  set currency(val) {
    this._currency = val;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
