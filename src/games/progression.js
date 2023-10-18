import runGame from '../index.js';
import { getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = (progress) => {
  const index = getRandomIndex(progress.length);
  const correctAnswer = String(progress[index]);
  progress[index] = '..';
  const question = progress.join(' ');

  return [question, correctAnswer];
};

export default () => {
  const startNum = 1;
  const multiplier = 2;
  const progressionLength = 10;
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + i * multiplier);
  }

  runGame(description, generateRound);
};