import BasicOnlineInvoiceRequest from '../BasicOnlineInvoiceRequest';

class QueryInvoiceDataRequest extends BasicOnlineInvoiceRequest {
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
    softwareDevTaxNumber,
    invoiceNumberQuery
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
    this.invoiceNumberQuery;
  }
}
