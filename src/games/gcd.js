import game from '../index.js';
import { randomNum } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNum = randomNum(1, 1000);
  const secondNum = randomNum(1, 1000);
  const question = `${firstNum} ${secondNum}`;

const findGcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return String(num1);
};

  return [question, findGcd(firstNum, secondNum)];
};

export default () => {
  game(description, generateRound);
};
