const express = require('express');
const router_p = express.Router();
const path = require('path');
/*const products = require('../model/productsModel')*/

let rootPath = path.normalize(__dirname + "/../.."); 

// Ruta para petición GET
router_p.get('/', (req,res)=>{
   res.render('productos',{
     'title':'Página de productos'
   });
});

// Ruta para añadir producto seleccionado al carrito
router_p.get('/addCart/id/:id', (req, res)=>{
  res.send("producto "+ req.params.id +" añadido al carrito");
})

module.exports = router_p;