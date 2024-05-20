const commander = require('commander');
const program = new commander.Command();

program
    .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

program.parse();

console.log(`cheese: ${program.opts().cheese}`);

/*

$ pizza-options
cheese: blue
$ pizza-options --cheese stilton
cheese: stilton
 */