// Task 3
const fs = require('fs');

// creating a function for word count 
function countWordsInFile(filename, callback) {
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return callback(err);
  }

  const wordArray = data.trim().split(/\s+/);
  const wordCount = wordArray.length;
  callback(null, wordCount);
});
}

// file name in this file all words are written in text form.
const filename = 'data.txt';

//words counter function call
countWordsInFile(filename, (err, wordCount) => {
if (err) {
  console.error('Error:', err.message);
} else {
  console.log('Total word count:', wordCount);
}
});