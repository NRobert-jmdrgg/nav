import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest.js';
import createRequestSignature from '../../utils/createRequestSignature.js';
import sendRequest from '../sendRequest.js';

export default async function queryInvoiceDigest(
  user,
  software,
  page,
  invoiceDirection,
  invoiceQueryParams
) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey
  );
  request.page = page;
  request.invoiceDirection = invoiceDirection;
  request.invoiceQueryParams = invoiceQueryParams;
  const response = await sendRequest(
    {
      QueryInvoiceDigestRequest: request,
    },
    'queryInvoiceDigest'
  );

  // console.log(JSON.stringify(response, null, 2));

  return response['QueryInvoiceDigestResponse']['invoiceDigestResult'];
}
