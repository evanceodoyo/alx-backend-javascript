import Currency from './3-currency';

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
    if (!(val instanceof Currency)) {
      throw new TypeError('Currency must of instance Currency');
    }
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
