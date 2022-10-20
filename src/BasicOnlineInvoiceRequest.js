import BasicHeader from './BasicHeader.js';
import UserHeader from './UserHeader.js';
import Software from './Software.js';
import writeToXML from '../utils/writeToXML.js';
import maskIsoDate from '../utils/maskIsoDate.js';
import { SHA3 } from 'sha3';
import dotenv from 'dotenv';
import axios from 'axios';
import { signatureKey } from '../config.js';

dotenv.config();

export default class BasicOnlineInvoiceRequest {
  constructor(
    login,
    password,
    taxNumber,
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
    this['common:header'] = new BasicHeader();
    this['common:user'] = new UserHeader(login, password, taxNumber);
    this.software = new Software(
      softwareId,
      softwareName,
      softwareOperation,
      softwareMainVersion,
      softwareDevName,
      softwareDevContact,
      softwareDevCountryCode,
      softwareDevTaxNumber
    );

    this.createRequestSignature();
  }

  createRequestSignature() {
    const hash = SHA3(512);
    this['common:user']['common:requestSignature']._ = hash
      .update(
        this['common:header']['common:requestId'] +
          maskIsoDate(this['common:header']['common:timestamp']) +
          signatureKey
      )
      .digest('hex')
      .toUpperCase();
  }
}
