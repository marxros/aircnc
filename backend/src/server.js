const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack9@ds211259.mlab.com:11259/omnistack9', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333,()=>{
  console.log('Server is started on port 3333');
});