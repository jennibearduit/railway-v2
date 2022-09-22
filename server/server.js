const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let travellers = [ {
  id: 1,
  name: 'Jessica',
  phone: '88888888',
  passport: '7777777',
  timestamp: new Date()
}, {
  id: 2,
  name: 'James',
  phone: '98989898',
  passport: '0000000',
  timestamp: new Date()
}]

app.get('/api/travellers', (request, response) => {
  response.json(travellers)
})

app.delete('/api/travellers/:id', (request, response) => {
  const id = Number(request.params.id)
  travellers = travellers.filter(note => note.id !== id)
  response.status(204).end()
})

// Add travellers
app.post('/api/travellers', (request, response) => {
  const body = request.body
  const traveller = {
    id: body.id,
    name: body.name,
    phone: body.phone,
    passport: body.passport,
    date: body.date
  }

  travellers.concat(traveller)
  response.json(traveller)
})

app.get('/api/travellers/:id', (request, response) => {
  const id = Number(request.params.id)
  const traveller = travellers.find(t => t.id === id)

  if (traveller) {
    response.json(traveller)
  } else {
    response.status(400).end()
  }
})

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server running on ${PORT}`);
});