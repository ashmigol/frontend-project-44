import game from '../index.js';
import { getRandomNum } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const num = getRandomNum(1, 100);
  const question = String(num);
  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};
