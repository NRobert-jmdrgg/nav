import getExchangeToken from './src/operations/tokenExchange.js';

async function main() {
  const a = await getExchangeToken();
  console.log(a);
}

main();
