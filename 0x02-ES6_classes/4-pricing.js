import Currency from "./3-currency";

export default class Currency {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
