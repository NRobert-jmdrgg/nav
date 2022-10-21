export default class Software {
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
