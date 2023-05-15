import game from '../index.js';
import randomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progressArray = () => {
    const startNum = randomNum(1, 10);
    const multiplier = randomNum(1, 10);
    const progress = [startNum];

    for (let i = 0; i < 9; i += 1) {
      progress.push(startNum + (i + 1) * multiplier);
    }
    return progress;
  };

  const progress = progressArray();
  const randomValue = randomNum(0, 9);
  const correctAnswer = String(progress[randomValue]);
  progress[randomValue] = '..';
  const question = `${progress.join(' ')}`;

  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};
