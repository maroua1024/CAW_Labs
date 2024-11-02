const fs = require('fs');
const fileName = process.argv[2]; 
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});
