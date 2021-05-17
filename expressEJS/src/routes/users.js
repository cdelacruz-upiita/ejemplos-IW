const express = require('express');
const router_u = express.Router();

/* se requiere el uso del modulo usersModel */
const login = require('../model/usersModel');


// middleware that is specific to this router
router_u.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// Ruta para petición GET
router_u.get('/', (req,res)=>{
  res.json({
    status: 'ok',
    crud: 'read all'
  });
});

// Ruta con parámetro en la URL
// http://localhost:3000/users/1
router_u.get('/:id', (req,res)=>{
  res.json({
    status: 'ok',
    crud: 'read one'
  });
});

// end point para inicio de sesión
// http://localhost:3000/users/login
router_u.post('/login', (req, res)=> {  
  /* Recuperación de los datos del formulario login de la vista index.ejs */
  let user = req.body.usernamel;
  let passwd = req.body.passwordl;
  
  /* se ejecuta el modelo login del archivo usersModel.js */
  let resultado = login.login (user, passwd);  
  if (resultado == 1) {
    res.render('productos',{
      'title':'Página de productos'
    });
  } else {
    res.send('Usuario no registrado');
  }
});

module.exports = router_u;