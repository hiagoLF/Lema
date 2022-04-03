export function formatDateToBr(date?: Date) {
  if (!date) {
    return '../../....';
  }
  return `${('0' + date.getDate()).slice(-2)}/${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}/${('0' + date.getFullYear()).slice(-2)}`;
}

export function getDateDiferenceInDays(firstDate: Date, lastDate: Date) {
  console.log('First Date >> ', firstDate);
  console.log('Last Date >> ', lastDate);
  let diferenceInDays = 0;
  const diferenceInTime = lastDate.getTime() - firstDate.getTime();
  console.log('Diference Time >> ', diferenceInTime);
  diferenceInDays = Math.ceil(diferenceInTime / (1000 * 3600 * 24));
  if (diferenceInDays < 1) {
    diferenceInDays = 0;
  }
  return diferenceInDays;
}
