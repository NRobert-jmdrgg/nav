import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function manageAnnulment(
  user,
  software,
  exchangeToken,
  annulmentOperations
) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey,
    annulmentOperations.annulmentOperation.map((annulmentOperation) => {
      operationType: annulmentOperation.annulmentOperation;
      base64data: annulmentOperation.invoiceAnnulment;
    })
  );
  request.exchangeToken = exchangeToken;
  request.annulmentOperations = annulmentOperations;
  const response = await sendRequest(
    {
      ManageAnnulmentRequest: request,
    },
    'manageAnnulment'
  );
  const { transactionId } = response;
  return transactionId;
}
