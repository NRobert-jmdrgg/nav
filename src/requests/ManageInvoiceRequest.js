import BasicOnlineInvoiceRequest from '../BasicOnlineInvoiceRequest';

class ManageAnnulmentRequest extends BasicOnlineInvoiceRequest {
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
    echangeToken,
    invoiceOperations
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
    this.echangeToken = echangeToken;
    this.invoiceOperations = invoiceOperations;
  }
}
