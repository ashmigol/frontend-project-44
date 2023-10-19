import game from '../index.js';
import { getRandomNum, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const setProgressArray = () => {
  const startNum = getRandomNum(1, 10);
  const multiplier = getRandomNum(1, 10);
  const progress = [startNum];

  for (let i = 0; i < 9; i += 1) {
    progress.push(startNum + (i + 1) * multiplier);
  }
  return progress;
};
const generateRound = () => {

  const progress = setProgressArray();
  const index = getRandomIndex(progress);
  const correctAnswer = String(progress[index]);
  progress[index] = '..';
  const question = progress.join(' ');
  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};