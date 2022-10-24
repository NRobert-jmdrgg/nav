/**
 * ISO dátum átkonvertálása YYYYmmddhhmmss formátumra.
 * @param {Date} timestamp dátum
 * @returns {string} YYYYmmddhhmmss formátumú dátum
 */
export default function maskIsoDate(timestamp) {
  const maskedDate =
    timestamp.substring(0, 10).replaceAll('-', '') +
    timestamp.substring(11, 19).replaceAll(':', '');
  return maskedDate;
}
