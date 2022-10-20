import BasicOnlineInvoiceRequest from '../BasicOnlineInvoiceRequest';

class ManageAnnulmentRequest extends BasicOnlineInvoiceRequest {
  constructor(
    login,
    password,
    taxNumber,
    signatureKey,
    softwareId,
    softwareName,
    softwareOperation,
    softwareMainVersion,
    softwareDevName,
    softwareDevContact,
    softwareDevCountryCode,
    softwareDevTaxNumber,
    exchangeToken,
    annulmentOperations
  ) {
    super(
      login,
      password,
      taxNumber,
      signatureKey,
      softwareId,
      softwareName,
      softwareOperation,
      softwareMainVersion,
      softwareDevName,
      softwareDevContact,
      softwareDevCountryCode,
      softwareDevTaxNumber
    );
    this.exchangeToken = exchangeToken;
    /**
     * TODO
     * */
    this.annulmentOperations = annulmentOperations;
  }
}
