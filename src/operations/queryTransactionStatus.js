import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function queryTransactionStatus(
  user,
  software,
  transactionId,
  returnOriginalRequest = null
) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey
  );
  request.transactionId = transactionId;
  request.returnOriginalRequest = returnOriginalRequest;
  const response = await sendRequest(
    {
      QueryInvoiceDigestRequest: request,
    },
    'queryTransactionStatus'
  );
  const { processingResults } = response;
  return processingResults;
}
