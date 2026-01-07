export function getRandomFloat(min = 1, max = 10, decimals = 2): number {
  const rand = Math.random() * (max - min) + min;
  return parseFloat(rand.toFixed(decimals));
}