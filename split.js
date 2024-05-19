const { program } = require('commander');

program
    .option('--first')
    .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;

if(!program.args[0] || !options.separator) {
    console.log('Argument and Separator required');
    return;
}else{
    console.log(program.args[0].split(options.separator, limit));
}

// $ node split.js -s / --first a/b/c
