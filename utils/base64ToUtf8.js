export default function base64ToUtf8(data) {
  return new Buffer.from(data, 'base64').toString('utf8');
}
