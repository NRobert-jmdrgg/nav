import BasicOnlineInvoiceRequest from '../BasicOnlineInvoiceRequest';

class QueryInvoiceDigestRequest extends BasicOnlineInvoiceRequest {
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
    page,
    invoiceDirection,
    invoiceQueryParams
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
    this.page;
    this.invoiceDirection;
    this.invoiceQueryParams;
  }
}
