import { userData, softwareData, exchangeKey } from '../../config.js';
import TokenExchangeRequest from '../requests/TokenExchangeRequest.js';
import sendRequest from '../sendRequest.js';
import crypto from 'crypto';

export default async function getExchangeToken() {
  const request = new TokenExchangeRequest(...userData, ...softwareData);
  const response = await sendRequest(request, 'tokenExchange');
  const encryptedToken =
    response['TokenExchangeResponse']['encodedExchangeToken'][0];

  // console.log('encrypted: ' + encryptedToken);

  // iv nem kell
  const decipher = crypto.createDecipheriv('aes-128-ecb', exchangeKey, null);

  // base64 - utf8
  let exchangeToken = decipher.update(encryptedToken, 'base64', 'utf8');
  exchangeToken += decipher.final('utf8');

  // console.log('decrypted: ' + exchangeToken);
  return exchangeToken;
}
