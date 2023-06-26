import game from '../index.js';
import { randomNum } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const num = randomNum(1, 100);
  const question = `${num}`;
  const isEven = num => num % 2 === 0;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};
