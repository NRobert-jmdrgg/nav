export default class User {
  constructor(login, password, taxNumber, exchangeKey, signatureKey) {
    this.login = login;
    this.password = password;
    this.taxNumber = taxNumber;
    this.exchangeKey = exchangeKey;
    this.signatureKey = signatureKey;
  }

  *[Symbol.iterator]() {
    for (let i in this) {
      yield this[i];
    }
  }
}
