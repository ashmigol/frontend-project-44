import game from '../index.js';
import { randomNum } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNum = randomNum(1, 1000);
  const secondNum = randomNum(1, 1000);
  const question = `${firstNum} ${secondNum}`;

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

  return [question, findGcd(firstNum, secondNum)];
};

export default () => {
  game(description, generateRound);
};
