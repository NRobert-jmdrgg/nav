import { userData, softwareData } from '../../config.js';

export default async function queryInvoiceData(invoiceNumberQuery) {
  if (!invoiceNumberQuery) return;
  const request = new BasicOnlineInvoiceRequest(...userData, ...softwareData);
  request.invoiceNumberQuery = invoiceNumberQuery;
  const response = await sendRequest(
    {
      QueryInvoiceDataRequest: {
        $: request['$'],
        'common:header': request['common:header'],
        'common:user': request['common:user'],
        software: request['software'],
        invoiceNumberQuery: invoiceNumberQuery,
      },
    },
    'queryInvoiceData'
  );
  const { invoiceDataResult } = response;
  return invoiceDataResult;
}
