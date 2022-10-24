export default class Software {
  /**
   * Software adatok object
   * @param {string} softwareId software id
   * @param {string} softwareName software neve
   * @param {string} softwareOperation software operáció
   * @param {string} softwareMainVersion software verzió
   * @param {string} softwareDevName software fejlesztő neve
   * @param {string} softwareDevContact software fejlesző elérhetőség
   * @param {string} softwareDevCountryCode software fejlezstő ország kódja
   * @param {string} softwareDevTaxNumber software fejlesztő adószáma
   */
  constructor(
    softwareId,
    softwareName,
    softwareOperation,
    softwareMainVersion,
    softwareDevName,
    softwareDevContact,
    softwareDevCountryCode,
    softwareDevTaxNumber
  ) {
    this.softwareId = softwareId;
    this.softwareName = softwareName;
    this.softwareOperation = softwareOperation;
    this.softwareMainVersion = softwareMainVersion;
    this.softwareDevName = softwareDevName;
    this.softwareDevContact = softwareDevContact;
    this.softwareDevCountryCode = softwareDevCountryCode;
    this.softwareDevTaxNumber = softwareDevTaxNumber;
  }
  *[Symbol.iterator]() {
    for (let i in this) {
      yield this[i];
    }
  }
}
