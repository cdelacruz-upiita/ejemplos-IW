const express = require('express');
const router_u = express.Router();
const login = require('../model/login');


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

router_u.get('/:id', (req,res)=>{
  res.json({
    status: 'ok',
    crud: 'read one'
  });
});

// end point para inicio de sesión
router_u.post('/login', (req, res)=> {  
  let user = req.body.usernamel;
  let passwd = req.body.passwordl;
  
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