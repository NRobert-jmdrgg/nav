export default class User {
  /**
   * Technikai felhasználó object
   * @param {string} login  felhasználónév
   * @param {string} password  jelszo
   * @param {string} taxNumber  adószám
   * @param {string} exchangeKey  cserekulcs
   * @param {string} signatureKey  aláírókulcs
   */
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
