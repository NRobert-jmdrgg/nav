export const userData = {
  login: '',
  password: '',
  taxNumber: '',
  signatureKey: '',
  exchangeKey: '',
  *[Symbol.iterator]() {
    for (let i in this) {
      yield this[i];
    }
  },
};

export const softwareData = {
  softwareId: '',
  softwareName: '',
  softwareOperation: '',
  softwareMainVersion: '',
  softwareDevName: '',
  softwareDevContact: '',
  softwareDevCountryCode: '',
  softwareDevTaxNumber: '',
  *[Symbol.iterator]() {
    for (let i in this) {
      yield this[i];
    }
  },
};
