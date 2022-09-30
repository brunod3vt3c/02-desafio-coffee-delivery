export function formatMoney(value: number) {
  return value.toLocaleString('pt', {
    minimumFractionDigits: 2,
  })
}
