const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
// app.set('view', path.join(__dirname, 'views')); // indicates the view forlder to the server

// middlewares
// configuramos para que por medio de mi funcion se imprima por consola 
app.use(morgan('dev'));
app.use(express.json()); // to understand json format
app.use(express.urlencoded({extended: false})); // to understand data from a form

// routes
app.use(require('./routes/index'));
app.use('/api/users' ,require('./routes/users'));
// app.get('/', (req, res) => {
//     res.json({"Title":"Hello World"});
// });

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 