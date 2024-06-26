console.log(" Console Notebook Code Source JSON Generator");

const fs = require('fs');
const readline = require('readline');


async function create_object_with_display_code(filePathIn, filePathOut){
  // Function to write a line to the file
  function writeLineToFile(line) {
    fs.appendFileSync(filePathOut, line + '\n', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Line appended to file:', line);
      }
    });
  }

// Create a ReadStream for the file
  const fileStream = fs.createReadStream(filePathIn);

// Create the readline interface
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // Recognize all instances of CR LF ('\r\n') as a single line break.
  });

  const lines = []; // Array to hold the lines

  rl.on('line', (line) => {
    // Push each line from the file to the array
    lines.push(line);
  });

  rl.on('close', () => {
    // All lines are read, file is closed now.
    console.log('Array of lines:', lines);

    writeLineToFile('//This code has been generated by the Console Notebook Command-line Interface.');
    writeLineToFile(`data = {`);
    writeLineToFile(`fileName:"${filePathIn}",`);
    writeLineToFile(`numberOfLines:"${lines.length}",`);
    writeLineToFile(`raw:{`);

    for(let i = 0; i < lines.length;i++){
      writeLineToFile(`ln_${i}:"${lines[i]}",`);
    }
    writeLineToFile(`}`);
    writeLineToFile('};');

  });

// Handle any errors while reading the file
  rl.on('error', (error) => {
    console.error('Error reading the file:', error);
  });
}

create_object_with_display_code('binary.search.js', 'console_display_code.js');

