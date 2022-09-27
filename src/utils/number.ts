export function generateRandomBetween(min: number, max: number, exclude: number): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber === exclude ? generateRandomBetween(min, max, exclude) : randomNumber;
}