import makeid from '../utils/makeid.js';

export default class BasicHeader {
  constructor() {
    this['common:requestId'] = makeid(16);
    this['common:timestamp'] = new Date().toISOString();
    this['common:requestVersion'] = '3.0';
    this['common:headerVersion'] = '1.0';
  }
}
