export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const getRandomIndex = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
};
