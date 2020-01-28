const express = require('express');
const app = express();
const {create,read,update,deleteB} =require('./booksController')
app.use(express.json());
app.use(express.static(__dirname + "./../build"));

app.get('/api/books',read);
app.post('/api/books',create);
app.put('/api/books/:id', update);
app.delete('/api/books/:id',deleteB);


const PORT = 4000;
app.listen(PORT, console.log(`Server in on ${PORT}`))