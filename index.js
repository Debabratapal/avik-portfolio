const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,'public')));
app.use(cors(corsOptions));


mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true });

const auth = require('./routes/auth');
const image = require('./routes/image');

app.use('/api/admin', auth);
app.use('/api/image', image);

if(process.env.NODE_ENV ==='production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app is running @${port}`);
  
})
