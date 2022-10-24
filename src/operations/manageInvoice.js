import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function manageInvoice(
  user,
  software,
  exchangeToken,
  invoiceOperations
) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey,
    invoiceOperations.invoiceOperation.map((invoiceOperation) => {
      operationType: invoiceOperation.invoiceOperation;
      base64data: invoiceOperation.invoiceData;
    })
  );
  requeset.exchangeToken = exchangeToken;
  requeset.invoiceOperations = invoiceOperations;
  const response = await sendRequest(
    {
      ManageInvoiceRequest: request,
    },
    'manageInvoice'
  );
  const { transactionId } = response;
  return transactionId;
}
