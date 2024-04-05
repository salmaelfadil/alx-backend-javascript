const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?');

process.stdin.once('data', (input) => {
	const name = input.toString().trim();
	console.log(`Your name is: ${name}`);
	process.exit();
});

process.on('exit', () => {
	console.log("This important software is now closing");
});
