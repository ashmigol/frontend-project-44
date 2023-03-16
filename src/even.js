import readlineSync from 'readline-sync';

export default () => {

const number = Math.floor(Math.random() * 101);
let score = 0;
const name = '';
const answerArr = [yes, no];

const greetings = () => {
    console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

}

const question = () => readlineSync.question(`Question ${number}`);

const correctMessage = () => {
    console.log('Correct!');
    score += 1;
  };

const wrongMessage = () => {
    if ((number % 2 === 0) || (question === answerArr[1])) {
        console.log(`${question} is wrong answer ;(. Correct answer was ${answerArr[0]}.\nLet's try again, ${name}!`);
    }
    else if ((number % 2 !== 0) || (question === answerArr[0])) {
        console.log(`${question} is wrong answer ;(. Correct answer was ${answerArr[1]}.\nLet's try again, ${name}!`);
    }
    score = 0;
}



const gameRound = () => {
    greetings();
    question();

}

}