export function getRandomImage(imagesPaths: string[]): string {
  const randomIndex = Math.floor(Math.random() * imagesPaths.length);
  return imagesPaths[randomIndex];
}