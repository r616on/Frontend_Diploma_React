export default function numberWithSpaces(x: number | undefined) {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "";
}
