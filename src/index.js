import readlineSync from 'readline-sync';
const greeting = (name) => {

  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greeting;
