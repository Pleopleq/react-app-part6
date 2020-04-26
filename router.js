require('dotenv').config();
const express = require('express');
const Person = require('./models/person');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.use(cors());


app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/persons', (req, res) =>{
  Person.find({}).then(persons => {
    res.json(persons.map(person => person.toJSON()));
  })
})

app.listen(PORT || 3000, () =>{
    console.log(`Server running on port ${PORT}`)
})