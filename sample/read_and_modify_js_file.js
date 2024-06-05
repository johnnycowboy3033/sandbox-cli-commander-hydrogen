const fs = require('fs');

async function readJSONAndModifyJSFile(jsonFilePath, jsFilePath) {
    try {
        // Read the JSON file
        const rawData = await fs.promises.readFile(jsonFilePath, 'utf8');
        const jsonData = JSON.parse(rawData);

        // Read the JavaScript file
        let jsFileData = await fs.promises.readFile(jsFilePath, 'utf8');

        // Replace the code in the JavaScript file
        jsFileData = jsFileData.replace(jsonData.codeToSearchFor, jsonData.codeToSearchFor + jsonData.codeToInsert);

        // Write the new code to the JavaScript file
        await fs.promises.writeFile(jsFilePath, jsFileData, 'utf8');

        console.log(`JavaScript file has been modified. New file: ${jsFilePath}`);
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

// Call the function
readJSONAndModifyJSFile('./config.json', './example.js');