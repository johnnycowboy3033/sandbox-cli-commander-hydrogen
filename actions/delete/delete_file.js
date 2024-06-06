const fs = require('fs');

async function delete_file(file_name) {
    fs.unlink(file_name, (err) => {
        if (err) {
            console.error(`Error: ${err}`);
        } else {
            console.log(`File ${file_name} has been deleted`);
        }
    });
}

// replace with the path to the file you want to delete
delete_file('./console_file.js');
