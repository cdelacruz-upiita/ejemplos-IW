const express = require('express');
const path = require ('path');
const fs = require ('fs');
const  app = express();

let rootPath = path.normalize(__dirname + "/../"); 

app.use(express.static('./public/'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(rootPath, 'views/pages/'));
app.set('view engine', 'ejs');

app.listen(app.get('port'),(req, res)=>{
  console.log('servidor iniciado en el puerto ' + app.get('port'));
})

