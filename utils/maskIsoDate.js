export default function maskIsoDate(timestamp) {
  if (typeof timestamp === 'string' && timestamp) {
    const maskedDate =
      timestamp.substring(0, 10).replaceAll('-', '') +
      timestamp.substring(11, 19).replaceAll(':', '');
    return maskedDate;
  }
  return null;
}
