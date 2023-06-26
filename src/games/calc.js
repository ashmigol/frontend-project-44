import game from '../index.js';
import { arrayChoise, randomNum } from '../utils.js';

const description = 'What is the result of the expression?';
const operatorArray = ['+', '*', '-'];

const generateRound = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const operator = arrayChoise(operatorArray);
  const calculateAnswer = (n1, op, n2) => {
    let correctAnswer;
    switch (op) {
      case '+':
        correctAnswer = n1 + n2;
        break;
      case '-':
        correctAnswer = n1 - n2;
        break;
      case '*':
        correctAnswer = n1 * n2;
        break;
      default:
        throw new Error(`Invalid operator: ${op}`);
    }
    return correctAnswer;
  };
  const question = `${num1} ${operator} ${num2}`;
  return [question, String(calculateAnswer(num1, operator, num2))];
};

export default () => {
  game(description, generateRound);
};
