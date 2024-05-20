const commander = require('commander');
const program = new commander.Command();

program
    .option('-n, --number <numbers...>', 'specify numbers')
    .option('-l, --letter [letters...]', 'specify letters');

program.parse();

console.log('Options: ', program.opts());
console.log('Remaining arguments: ', program.args);

/*
$ collect -n 1 2 3 --letter a b c
Options:  { number: [ '1', '2', '3' ], letter: [ 'a', 'b', 'c' ] }
Remaining arguments:  []
$ collect --letter=A -n80 operand
Options:  { number: [ '80' ], letter: [ 'A' ] }
Remaining arguments:  [ 'operand' ]
$ collect --letter -n 1 -n 2 3 -- operand
Options:  { number: [ '1', '2', '3' ], letter: true }
Remaining arguments:  [ 'operand' ]
$ node options-variadic.js -n 1 2 3 -l a b c
Options: { number: [ '1', '2', '3' ], letter: [ 'a', 'b', 'c' ] }
Remaining arguments: []
 */
