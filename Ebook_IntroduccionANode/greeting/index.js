const colors = require('colors/safe');
const commandLineArgs = require('command-line-args');
const params = [{name: 'name', alias: 'n', type: String}];
const options = commandLineArgs(params);

// const args = process.argv.slice(2);
// console.log(process.argv);
// const [name = 'Friends'] = args;
const name = options.name || 'Friends';
const hour = new Date().getHours();


if (hour >= 6 && hour < 12) {
  console.log(colors.yellow(`Good morning ${name}`));
} else if (hour >= 12 && hour < 18) {
  console.log(colors.green(`Good afternoon ${name}`));
} else if (hour >= 18 && hour < 23) {
  console.log(colors.cyan(`Good evening ${name}`));
} else {
  console.log(colors.blue(`Good night ${name}`));
}
