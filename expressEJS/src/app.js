/* Programa principal de la aplicación
 
   - configura propiedades de la aplicación y el servidor

*/

const express = require('express');
const path = require ('path');
const fs = require ('fs');
const  app = express();


let rootPath = path.normalize(__dirname + "/../"); 

/* Configura el uso de recursos estáticos: HTML, CSS, recursos*/
app.use(express.static('./public/'));

/* Configurar express para el uso de peticiones POST por medio de JSON */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Asociación de las rutas a la aplicación */
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));

/* Configuración del servidor y del motor de plantillas EJS */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(rootPath, 'views/pages/'));
app.set('view engine', 'ejs');

app.listen(app.get('port'),(req, res)=>{
  console.log('servidor iniciado en el puerto ' + app.get('port'));
})

