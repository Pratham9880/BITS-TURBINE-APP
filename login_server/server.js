//mongodb
require('./config/db');


const app = require('express')();
const port = 2001;

const UserRouter = require('./api/User');

// For accepting post from data
const bodyParser = require('express').json;
app.use(bodyParser());

app.listen(port,()=>{
    console.log('Server Running on port ${port}');
})