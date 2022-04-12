//asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, printOutBreeds) {
  console.log('breedDetailsFromFile: Calline readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data. ");
    // Pass data into a callback to be executed when the file has been read
    //if (!error)  printOutBreeds(data);
    !error ?  printOutBreeds(data) : printOutBreeds(undefined);
  });
};

module.exports = breedDetailsFromFile;
