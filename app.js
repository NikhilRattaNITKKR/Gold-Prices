const gold = require('./gold');
const express = require('express');
const hbs = require('hbs');

const app=express();

app.set('view engine','hbs')

gold('XAU','INR',console.log);

app.listen(port,()=>{             //to activate server/port number to listen and a callback
  console.log('the server is running');
})
