import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(value instanceof Currency)) {
      throw new TypeError("currency must be a Currency");
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof value !== "number") {
      throw new TypeError("amount must be a number");
    }
    this._amount = amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  convertPrice(amount, conversionRate) {
    if (typeof amount !== "number") {
      throw new TypeError("amount must be a number");
    }
    if (typeof conversionRate !== "number") {
      throw new TypeError("conversionRate must be a number");
    }
    return amount * conversionRate;
  }
}
