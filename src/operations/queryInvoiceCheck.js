import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function queryInvoiceCheck(
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
  request.invoiceNumberQuery = invoiceNumberQuery;
  const response = await sendRequest(
    {
      ManageInvoiceRequest: request,
    },
    'queryInvoiceCheck'
  );
  const { invoiceCheckResult } = response;
  return invoiceCheckResult;
}
