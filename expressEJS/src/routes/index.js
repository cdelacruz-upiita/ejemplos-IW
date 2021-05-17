const express = require('express');

const router = express.Router();

// Ruta para petición GET
router.get('/', (req,res)=>{
   res.render('index', { title:'Proyecto en express con EJS'});      
})
 
module.exports = router;