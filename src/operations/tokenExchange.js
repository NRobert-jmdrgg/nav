import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';
import sendRequest from '../sendRequest.js';
import createRequestSignature from '../../utils/createRequestSignature.js';
import crypto from 'crypto';

export default async function getExchangeToken(user, software) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey
  );
  const response = await sendRequest(
    {
      TokenExchangeRequest: request,
    },
    'tokenExchange'
  );
  const encryptedToken =
    response['TokenExchangeResponse']['encodedExchangeToken'][0];

  // console.log('encrypted: ' + encryptedToken);

  // iv nem kell
  const decipher = crypto.createDecipheriv(
    'aes-128-ecb',
    user.exchangeKey,
    null
  );

  // base64 -> utf8
  let exchangeToken = decipher.update(encryptedToken, 'base64', 'utf8');
  exchangeToken += decipher.final('utf8');

  // console.log('decrypted: ' + exchangeToken);
  return exchangeToken;
}
