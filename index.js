const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,'public')))

mongoose.connect('mongodb://mogno:27017/portfolio');

app.get('/video', (req, res) => {
  let readStream = fs.createReadStream(path.resolve('public','video', 'video1.mp4'));
  res.setHeader('Content-Type', 'video/mp4')
  readStream.pipe(res)
})

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
