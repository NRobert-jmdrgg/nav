import { userData, softwareData } from '../../config.js';
import TokenExchangeRequest from '../requests/TokenExchangeRequest.js';
import sendRequest from '../sendRequest.js';

export default async function getExchangeToken() {
  const request = new TokenExchangeRequest(...userData, ...softwareData);
  const response = await sendRequest(request, 'tokenExchange');
  return response['TokenExchangeResponse']['encodedExchangeToken'][0];
}
