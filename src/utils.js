export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const arrayChoise = (arr) => {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
};
export const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };
  