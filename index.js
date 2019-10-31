require(`dotenv`).config();
const express = require('express');

const server = express(); // creating an instance of an express server

console.log(process.env.MSG)

server.get('/', (req, res) => {
  res.status(200).json({ message: process.env.MSG });
});


const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n Server running on port ${port} \n`);
});
