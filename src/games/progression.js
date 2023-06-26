import game from '../index.js';
import { randomNum, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const setProgressArray = () => {
    const startNum = randomNum(1, 10);
    const multiplier = randomNum(1, 10);
    const progress = [startNum];

    for (let i = 0; i < 9; i += 1) {
      progress.push(startNum + (i + 1) * multiplier);
    }
    return progress;
  };

  const progress = setProgressArray();
  const index = getRandomIndex(progress.length);
  const correctAnswer = String(progress[index]);
  progress[index] = '..';
  const question = progress.join(' ');

  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};
