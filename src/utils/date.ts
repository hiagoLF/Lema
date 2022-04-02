export function formatDateToBr(date: Date) {
  return `${('0' + date.getDate()).slice(-2)}/${('0' + date.getMonth()).slice(
    -2,
  )}/${('0' + date.getFullYear()).slice(-2)}`;
}
