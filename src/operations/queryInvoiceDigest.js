import { userData, softwareData } from '../../config.js';

export default async function queryInvoiceDigest(
  page,
  invoiceDirection,
  invoiceQueryParams
) {
  if (!page || !invoiceDirection || !invoiceQueryParams) return;
  const request = new BasicOnlineInvoiceRequest(...userData, ...softwareData);
  request.invoiceNumberQuery = invoiceNumberQuery;
  const response = await sendRequest(
    {
      QueryInvoiceDigestRequest: {
        $: request['$'],
        'common:header': request['common:header'],
        'common:user': request['common:user'],
        software: request['software'],
        page: page,
        invoiceDirection: invoiceDirection,
        invoiceQueryParams: invoiceQueryParams,
      },
    },
    'queryInvoiceDigest'
  );
  const { invoiceDigestResult } = response;
  return invoiceDigestResult;
}
