import xml2js from 'xml2js';
import fs from 'fs';

// function addPrefixes(obj, prefixes) {
//   for (const element in prefixes) {
//     obj[element] = JSON.parse(
//       JSON.stringify(obj[element]).replace(
//         /"([^:"$_]+)":/g,
//         `"${prefixes[element]}:$1":`
//       )
//     );
//     const regex = new RegExp(`"${element}":`, 'g');
//     obj = JSON.parse(
//       JSON.stringify(obj).replace(regex, `"${prefixes[element]}:${element}":`)
//     );
//   }
// }

export default function writeToXML(obj, root) {
  if (!obj) return;
  if (!root) return;
  const xmlBuilder = new xml2js.Builder({ rootName: root, cdata: true });
  let xml = xmlBuilder.buildObject(obj);
  fs.writeFileSync('./test2.xml', xml);
  return xmlBuilder.buildObject(obj);
}
