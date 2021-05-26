const express = require ('express');
const mysql = require ('mysql');


const PORT = process.env.PORT || 3100;


/* propiedades de conexión a la BD*/
const con = mysql.createConnection({
  host:'localhost',
  user:'root', 
  password:'ScuMY21.',  
  database:'ingweb'
});

const app = express();

/* Configurar express para el uso de peticiones POST por medio de JSON */
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/* Prueba de conexión a MySQL */
con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

/* Rutas de acceso a la BD */
app.get('/',(req, res)=>{
  res.send('Welcome to API BD IngWeb ...');
});

app.get('/find', (req, res) =>{
   const sql = "select * from users";

   con.query(sql,(err, results)=>{ 
    if (err) throw err;
    if (results.length > 0) {
       res.json(results); 
    }else {
        res.send ('Not result');
    }    
   }); 
});

app.get('/find/:id', (req, res) =>{
  const { id } = req.params;

  const sql = `select * from users where id = ${id}` ;

  con.query(sql,(err, results)=>{
   if (err) throw err;
   if (results.length > 0) {
      res.json(results); 
   }else {
       res.send ('Not result');
   }   
  }); 
});

app.get('/findname/:name', (req, res) =>{
  const { name } = req.params;

  const sql = `select * from users where nameU = "${name}"`;

  console.log (sql);
  con.query(sql,(err, results)=>{
   if (err) throw err;
   if (results.length > 0) {
      res.json(results); 
   }else {
       res.send ('Not result');
   }   
  }); 
});


app.post('/insert',(req, res)=>{
  const sql = 'INSERT INTO users SET ?';
  const userObj = {
    "nameU": req.body.nameU,
    "passwdU": req.body.passwdU,  
    "typeU": req.body.typeU  
  }; 

  console.log(req.body);

  con.query(sql, userObj, error =>{
     if (error) throw error;
     res.send('User created'); 
  }); 
});

app.put('/update/:id', (req, res)=>{
  const {id} =  req.params;
  const {nameU, passwdU, typeU} = req.body;

  const sql = `UPDATE users SET nameU = '${nameU}', passwdU = '${passwdU}', typeU = '${typeU}' WHERE id = '${id}' `;
    
  console.log(sql);

  con.query(sql, error =>{
    if (error) throw error;
    res.send('User updated'); 
 }); 
});

app.delete('/delete/:id', (req, res)=>{
  const {id} = req.params;
  const sql = `DELETE FROM users WHERE id = ${id}`

  con.query(sql, error =>{
    if (error) throw error;
    res.send('User deleted'); 
 }); 

});

app.listen(PORT,()=>console.log('server running on port ' + PORT));