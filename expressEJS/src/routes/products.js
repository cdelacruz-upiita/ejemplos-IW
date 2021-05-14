const express = require('express');
const router_p = express.Router();
const path = require('path');

let rootPath = path.normalize(__dirname + "/../.."); 

// Ruta para petición GET
router_p.get('/', (req,res)=>{
   res.render('productos',{
     'title':'Página de productos'
   });
});

  module.exports = router_p;