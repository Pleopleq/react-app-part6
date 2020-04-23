const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
server.use(middlewares);
server.use(router);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 3000, () =>{
    console.log('Server up')
})