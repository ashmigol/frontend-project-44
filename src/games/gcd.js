import game from '../index.js';
import { getRandomNum } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return String(a);
};

const generateRound = () => {
  const firstNum = getRandomNum(1, 1000);
  const secondNum = getRandomNum(1, 1000);
  const question = `${firstNum} ${secondNum}`;

  return [question, findGcd(firstNum, secondNum)];
};

export default () => {
  game(description, generateRound);
};
