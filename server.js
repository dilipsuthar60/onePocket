
//Task 1.

//server initiated
const express = require('express');
const app = express();
const PORT = 3000; // port number

//default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// activate the server on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



