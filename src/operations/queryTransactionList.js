import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function queryTransactionList(
  user,
  software,
  page,
  insDate,
  requestStatus = null
) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey
  );
  request.page = page;
  request.insDate = insDate;
  request.requestStatus = requestStatus;
  const response = await sendRequest(
    {
      QueryInvoiceDigestRequest: request,
    },
    'queryTransactionList'
  );
  const { transactionListResult } = response;
  return transactionListResult;
}
