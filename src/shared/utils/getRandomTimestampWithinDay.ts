export function getRandomTimestampWithinDay(): number {
  const now = Date.now();
  const oneDay = 1 * 24 * 60 * 60 * 1000; // 7 дней в миллисекундах

  // случайное смещение от 0 до одной недели
  const randomOffset = Math.random() * oneDay;

  return now + randomOffset;
}