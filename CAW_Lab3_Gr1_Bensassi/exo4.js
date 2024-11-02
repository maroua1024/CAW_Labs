const fs = require('fs');
const fileName = process.argv[2]; 
const content = process.argv[3];  
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("The file has been saved!");
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:\n" + data);
    });
});
