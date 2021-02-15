const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vorellana:1a2s3d4F5G6H@cluster0.pxjyp.mongodb.net/minifacebook?retryWrites=true&w=majority";
//const uri2 = "mongodb://vorellana:1a2s3d4F5G6H_ZZZ@cluster0.pxjyp.mongodb.net/minifacebook?retryWrites=true&w=majority";
const uri2 = "mongodb://vorellana:1a2s3d4F5G6H@cluster0.pxjyp.mongodb.net/minifacebook";
const client = new MongoClient(uri, { useNewUrlParser: true });

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

mongoose.connect(uri,{
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

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
// app.set('view', path.join(__dirname, 'views')); // indicates the view forlder to the server

// middlewares
// configuramos para que por medio de mi funcion se imprima por consola 
app.use(morgan('dev'));
app.use(express.json()); // to understand json format
app.use(express.urlencoded({extended: false})); // to understand data from a form

app.use(cors());
// routes
// app.use(require('./routes/index'));
// app.use('/api/users' ,require('./routes/users.routes'));
// app.use('/api/posts' ,require('./routes/posts.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/posts.routes'));

// app.get('/', (req, res) => {
//     res.json({"Title":"Hello World"});
// });

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 