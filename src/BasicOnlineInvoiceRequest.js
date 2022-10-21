import dotenv from 'dotenv';
import makeid from '../utils/makeid.js';
import crypto from 'crypto';
dotenv.config();

export default class BasicOnlineInvoiceRequest {
  constructor(
    login,
    password,
    taxNumber,
    exchangeKey,
    signatureKey,
    softwareId,
    softwareName,
    softwareOperation,
    softwareMainVersion,
    softwareDevName,
    softwareDevContact,
    softwareDevCountryCode,
    softwareDevTaxNumber
  ) {
    this.$ = {
      'xmlns:common': 'http://schemas.nav.gov.hu/NTCA/1.0/common',
      xmlns: 'http://schemas.nav.gov.hu/OSA/3.0/api',
    };
    this['common:header'] = {
      'common:requestId': makeid(16),
      'common:timestamp': new Date().toISOString(),
      'common:requestVersion': '3.0',
      'common:headerVersion': '1.0',
    };
    this.exchangeKey = exchangeKey;
    this.signatureKey = signatureKey;
    this['common:user'] = {
      'common:login': login,
      'common:passwordHash': {
        $: {
          cryptoType: 'SHA-512',
        },
        _: crypto
          .createHash('sha512')
          .update(password)
          .digest('hex')
          .toUpperCase(),
      },
      'common:taxNumber': taxNumber,
      'common:requestSignature': {
        $: {
          cryptoType: 'SHA3-512',
        },
        _: '',
      },
    };
    this.software = {
      softwareId: softwareId,
      softwareName: softwareName,
      softwareOperation: softwareOperation,
      softwareMainVersion: softwareMainVersion,
      softwareDevName: softwareDevName,
      softwareDevContact: softwareDevContact,
      softwareDevCountryCode: softwareDevCountryCode,
      softwareDevTaxNumber: softwareDevTaxNumber,
    };
  }
}
