export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const arrayChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
export const getRandomIndex = (length) => Math.floor(Math.random() * length);
