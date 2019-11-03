const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

/***
 * load env vars
 */
dotenv.config();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
/**
 * all middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,'public')));
app.use(cors(corsOptions));

/**
 * database connection
 */
mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true });

/**
 * all routes register to app
 */
const routesPath = path.resolve(__dirname, 'routes');
const dir = fs.readdirSync(routesPath);
dir.forEach(i => {
  let apiName = i.split('.')[0],
  api = require(`./routes/${apiName}`);  
  app.use(`/api/${apiName}`, api);
});

/**
 * production index.html 
 * always return index.html in production
 */

if(process.env.NODE_ENV ==='production') {
  const PRODUCTION_REPO_NAME= 'avik-portfiolio-client'
  app.use(express.static(path.resolve(__dirname, '..',PRODUCTION_REPO_NAME,'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', PRODUCTION_REPO_NAME, 'build', 'index.html'));
  })
}

/**
 * Server start
 */
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app is running @${port}`);
})
