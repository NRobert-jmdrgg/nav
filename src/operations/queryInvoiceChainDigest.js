import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function queryInvoiceChainDigest(
  user,
  software,
  page,
  invoiceChainQuery
) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey
  );
  request.page = page;
  request.invoiceChainQuery = invoiceChainQuery;
  const response = await sendRequest(
    {
      ManageInvoiceRequest: request,
    },
    'queryInvoiceChainDigest'
  );
  const { invoiceChainDigestResult } = response;
  return invoiceChainDigestResult;
}
