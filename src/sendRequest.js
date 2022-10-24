import writeToXML from '../utils/writeToXML.js';
import axios from 'axios';
import xml2js from 'xml2js';
import dotenv from 'dotenv';
dotenv.config();

export default async function send(request, operation) {
  const xml = writeToXML(request);
  const xmlparser = new xml2js.Parser();
  let parsedResponse;

  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.API_TEST_URL}${process.env.VERSION}${operation}`,
      headers: {
        'Content-Type': 'application/xml',
      },
      data: xml,
    });

    const xmlNoNamespaceResponse = response.data.replace(/ns2:|ns3:/g, '');
    parsedResponse = await xmlparser.parseStringPromise(xmlNoNamespaceResponse);
  } catch (e) {
    const error = await xmlparser.parseStringPromise(e.response.data);
    console.error(
      'Error code: ' +
        error['ns2:GeneralErrorResponse'].result[0].errorCode[0] +
        ', Error message: ' +
        error['ns2:GeneralErrorResponse'].result[0].message[0]
    );
  }

  return parsedResponse;
}
