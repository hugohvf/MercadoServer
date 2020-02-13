const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const app = express();
//const server = http.Server(app);

mongoose.connect('mongodb+srv://hugohvf:EdtsmipaYPgtUkkz@cluster0-c53fz.mongodb.net/MercadoList?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);