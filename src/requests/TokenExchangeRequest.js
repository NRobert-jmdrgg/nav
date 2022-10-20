import BasicOnlineInvoiceRequest from '../BasicOnlineInvoiceRequest.js';

export default class TokenExchangeRequest extends BasicOnlineInvoiceRequest {
  constructor(
    login,
    password,
    taxNumber,
    signatureKey,
    exchangeKey,
    softwareId,
    softwareName,
    softwareOperation,
    softwareMainVersion,
    softwareDevName,
    softwareDevContact,
    softwareDevCountryCode,
    softwareDevTaxNumber
  ) {
    super(
      login,
      password,
      taxNumber,
      signatureKey,
      exchangeKey,
      softwareId,
      softwareName,
      softwareOperation,
      softwareMainVersion,
      softwareDevName,
      softwareDevContact,
      softwareDevCountryCode,
      softwareDevTaxNumber
    );
  }
}
