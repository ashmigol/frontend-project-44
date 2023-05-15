import game from '../index.js';
import randomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNumber = randomNum(1, 1000);
  const secondNumber = randomNum(1, 1000);
  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = (num1, num2) => {
    const min = Math.min(num1, num2);
    let result = 1;
    for (let i = 2; i <= min; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        result = i;
      }
    }
    return String(result);
  };
  return [question, correctAnswer(firstNumber, secondNumber)];
};

export default () => {
  game(description, generateRound);
};
