import readlineSync from 'readline-sync';
import game from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const answerArr = ['yes', 'no'];
  const number = randomNum(1, 100);
  const question = `${number}\n`;

  let correctAnswer;

  if (number % 2 === 0) {
    correctAnswer = answerArr[0];
  }

  if (number % 2 !== 0) {
    correctAnswer = answerArr[1];
  }  
  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};
