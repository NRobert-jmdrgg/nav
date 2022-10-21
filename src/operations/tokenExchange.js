import { userData, softwareData } from '../../config.js';
import BasicOnlineInvoiceRequest from '../BasicOnlineInvoiceRequest.js';
import sendRequest from '../sendRequest.js';
import createRequestSignature from '../../utils/createRequestSignature.js';
import crypto from 'crypto';

export default async function getExchangeToken() {
  const request = new BasicOnlineInvoiceRequest(...userData, ...softwareData);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    request.signatureKey
  );
  const response = await sendRequest(
    {
      TokenExchangeRequest: {
        $: request['$'],
        'common:header': request['common:header'],
        'common:user': request['common:user'],
        software: request['software'],
      },
    },
    'tokenExchange'
  );
  const encryptedToken =
    response['TokenExchangeResponse']['encodedExchangeToken'][0];

  // console.log('encrypted: ' + encryptedToken);

  // iv nem kell
  const decipher = crypto.createDecipheriv(
    'aes-128-ecb',
    userData.exchangeKey,
    null
  );

  // base64 -> utf8
  let exchangeToken = decipher.update(encryptedToken, 'base64', 'utf8');
  exchangeToken += decipher.final('utf8');

  // console.log('decrypted: ' + exchangeToken);
  return exchangeToken;
}
