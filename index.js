// server/index.js
const path = require('path');
const express = require("express");
const { Server } = require('ws');

const PORT = process.env.PORT || 5000;

const server = express()
  // Have Node serve the files for our built React app
  server.use(express.static(path.resolve(__dirname, './client/public')));
  // All other GET requests not handled before will return our React app
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/public', 'index.html'));
  });
// const wss = new Server({ server });
// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client disconnected'));
// });
// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
