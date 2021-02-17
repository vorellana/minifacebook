const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

// ***** Conexion DB *****
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true, 
    useUnifiedTopology: true},(err) => {
        if(err){
            console.log("**** ERROR DE CONEXIÓN ****");
            console.log(err);
        }else{
            console.log("**** CONEXIÓN CORRECTA ****");
        }
     }
)

// ***** settings *****
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(morgan('dev')); // print console log
app.use(express.json()); // to understand json format
app.use(express.urlencoded({extended: false})); // to understand data from a form
app.use(cors());

// ***** routes *****
app.use(require('./routes/users.routes'));
app.use(require('./routes/posts.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 