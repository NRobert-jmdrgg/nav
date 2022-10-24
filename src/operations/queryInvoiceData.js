import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest.js';
import createRequestSignature from '../../utils/createRequestSignature.js';
import sendRequest from '../sendRequest.js';

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
  request.invoiceNumberQuery = invoiceNumberQuery;
  const response = await sendRequest(
    {
      QueryInvoiceDataRequest: request,
    },
    'queryInvoiceData'
  );
  return response['invoiceDataResult'];
}
