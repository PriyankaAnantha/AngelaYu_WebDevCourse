const fs =  require('fs'); // Importing the fs module to read the file system in Node.js environment

const hello = 'Hello from Node.js';
const newhello = 'New content';

// fs.writeFile('hello.txt', hello, (err) => { // Writing the content to the file
//     if (err) throw err;
//     console.log('File is created successfully.');
// });

// read and write can be done at the same time? 

fs.readFile('hello.txt', 'utf8', (err, data) => { // Reading the content from the file  
    if (err) throw err;
    console.log(data);
});

