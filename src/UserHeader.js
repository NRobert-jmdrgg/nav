import crypto from 'crypto';

export default class UserHeader {
  constructor(login, password, taxNumber) {
    this['common:login'] = login;
    this['common:passwordHash'] = {
      $: {
        cryptoType: 'SHA-512',
      },
      _: crypto
        .createHash('sha512')
        .update(password)
        .digest('hex')
        .toUpperCase(),
    };
    this['common:taxNumber'] = taxNumber;
    this['common:requestSignature'] = {
      $: {
        cryptoType: 'SHA3-512',
      },
      _: '',
    };
  }
}
