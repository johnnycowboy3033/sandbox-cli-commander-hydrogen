const commander = require('commander');
const program = new commander.Command();

program
    .requiredOption('-c, --cheese <type>', 'pizza must have cheese');

program.parse();

/*
$ pizza
error: required option '-c, --cheese <type>' not specified
 */