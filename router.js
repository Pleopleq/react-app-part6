const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.use(cors());
app.use(server)
app.use(middlewares);
app.use(router);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/persons', (res, req) =>{
  res.json(router)
})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server up')
})