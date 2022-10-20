import writeToXML from '../utils/writeToXML.js';
import axios from 'axios';
import xml2js from 'xml2js';

export default async function send(request, operation) {
  const xml = writeToXML(request, request.constructor.name);

  const response = await axios({
    method: 'post',
    url: `${process.env.API_TEST_URL}${process.env.VERSION}${operation}`,
    headers: {
      'Content-Type': 'application/xml',
    },
    data: xml,
  });

  const xmlNoNamespaceResponse = response.data.replace(/ns2:|ns3:/g, '');

  const xmlparser = new xml2js.Parser();
  const parsedResponse = await xmlparser.parseStringPromise(
    xmlNoNamespaceResponse
  );

  return parsedResponse;
}
