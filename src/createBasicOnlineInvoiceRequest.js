import makeid from '../utils/makeid.js';
import crypto from 'crypto';

export default function createBasicOnlineInvoiceRequest(user, software) {
  return {
    $: {
      'xmlns:common': 'http://schemas.nav.gov.hu/NTCA/1.0/common',
      xmlns: 'http://schemas.nav.gov.hu/OSA/3.0/api',
    },
    'common:header': {
      'common:requestId': makeid(16),
      'common:timestamp': new Date().toISOString(),
      'common:requestVersion': '3.0',
      'common:headerVersion': '1.0',
    },
    'common:user': {
      'common:login': user.login,
      'common:passwordHash': {
        $: {
          cryptoType: 'SHA-512',
        },
        _: crypto
          .createHash('sha512')
          .update(user.password)
          .digest('hex')
          .toUpperCase(),
      },
      'common:taxNumber': user.taxNumber,
      'common:requestSignature': {
        $: {
          cryptoType: 'SHA3-512',
        },
        _: '',
      },
    },
    software: software,
  };
}
