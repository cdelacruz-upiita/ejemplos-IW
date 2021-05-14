const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para petición GET
router.get('/', (req,res)=>{
   res.render('index', { title:'Página de inicio'});
      
})
  
module.exports = router;