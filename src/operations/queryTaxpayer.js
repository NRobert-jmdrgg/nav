import createBasicOnlineInvoiceRequest from '../createBasicOnlineInvoiceRequest';

export default async function queryTaxpayer(user, software, taxNumber) {
  const request = createBasicOnlineInvoiceRequest(user, software);
  request['common:user']['common:requestSignature']._ = createRequestSignature(
    request['common:header']['common:requestId'],
    request['common:header']['common:timestamp'],
    user.signatureKey
  );
  response.taxNumber = taxNumber;
  const response = await sendRequest(
    {
      QueryInvoiceDigestRequest: request,
    },
    'queryTaxpayer'
  );
  const { infoDate, taxpayerValidity, taxpayerData } = response;
  return {
    infoDate,
    taxpayerValidity,
    taxpayerData,
  };
}
