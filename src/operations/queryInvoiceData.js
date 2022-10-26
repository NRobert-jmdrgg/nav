import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest.js';
import createRequestSignature from '../../utils/createRequestSignature.js';
import sendRequest from '../sendRequest.js';
import base64ToUtf8 from '../../utils/base64ToUtf8.js';
import crypto from 'crypto';

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

  response['QueryInvoiceDataResponse']['invoiceDataResult'][0][
    'invoiceData'
  ][0] = base64ToUtf8(
    response['QueryInvoiceDataResponse']['invoiceDataResult'][0][
      'invoiceData'
    ][0]
  );

  return response
    ? response['QueryInvoiceDataResponse']['invoiceDataResult']
    : null;
}
