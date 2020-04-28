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

app.get('/persons/:id', (req, res, next) =>{
  const id = req.params.id;
  Person.findById(id)
  .then(person =>{
    res.json(person.toJSON())
  })
  .catch(error => next(error))
})

//POST A NEW CONTACT ROUTE//

app.post('/persons', (req, res) =>{
  const body = req.body
  
  if(body.name === undefined || body.number === undefined){
    return res.status(400).json({error: 'Please fill all the fields!'})
  }
  const newPerson = new Person({
    name: body.name,
    number: body.number
  })

  newPerson.save().then(savedPerson =>{
    res.json(savedPerson.toJSON())
  })
})

//DELETE ROUTE//

app.delete('/persons/:id', (req, res, next ) =>{
  Person.findByIdAndRemove(req.params.id)
  .then(result =>{
    res.status(204).end()
  })
  .catch(error => next(error));
})

//EDIT ROUTE//

app.put('/persons/:id', (req, res, next) =>{
  const body = req.body;
  const id = req.params.id;
  const updatedPerson = {name: body.name, number: body.number};
  Person.findByIdAndUpdate(id, updatedPerson, { new: true })
  .then(updatedItem => {
    if(updatedItem){
      res.json(updatedItem.toJSON())
    } else {
      res.status(404).end();
    }
  })
  .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) =>{
  console.log(error.message)

  if(error.name === 'CastError'){
    return res.status(400).send({ error: 'malformated id'})
  }

  next(error)
}
//handle of request with result to errors
app.use(errorHandler)


app.listen(PORT || 3000, () =>{
    console.log(`Server running on port ${PORT}`)
})