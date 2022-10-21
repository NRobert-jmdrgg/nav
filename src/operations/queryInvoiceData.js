import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function queryInvoiceData(
  user,
  software,
  invoiceNumberQuery
) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey
  );
  response.invoiceNumberQuery = invoiceNumberQuery;
  const response = await sendRequest(
    {
      QueryInvoiceDataRequest: request,
    },
    'queryInvoiceData'
  );
  const { invoiceDataResult } = response;
  return invoiceDataResult;
}
