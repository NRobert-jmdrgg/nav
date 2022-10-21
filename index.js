import getExchangeToken from './src/operations/tokenExchange.js';
import queryInvoiceData from './src/operations/queryInvoiceData.js';
import queryInvoiceDigest from './src/operations/queryInvoiceDigest.js';

async function main() {
  const a = await getExchangeToken();
  console.log(a);
}

main();
