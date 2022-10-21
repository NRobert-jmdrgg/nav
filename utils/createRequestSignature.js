import { SHA3 } from 'sha3';
import maskIsoDate from '../utils/maskIsoDate.js';

export default function createRequestSignature(
  requestId,
  timestamp,
  signatureKey
) {
  const hash = SHA3(512);
  let requestSignature = hash
    .update(requestId + maskIsoDate(timestamp) + signatureKey)
    .digest('hex')
    .toUpperCase();

  return requestSignature;
}
