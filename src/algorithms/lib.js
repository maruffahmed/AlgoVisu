// Get a random number between minimum and maximum number
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
