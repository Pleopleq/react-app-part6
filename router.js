const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');
const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(server)
app.use(middlewares);
app.use(router);
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/persons', (res, req) =>{
  res.json(router)
})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server up')
})