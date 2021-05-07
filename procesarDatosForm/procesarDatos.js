// módulo para acceder a datos en el protocolo HTTP
const http = require('http');
// módulo para busqueda de String en la URL
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post'){
      //  Si la dirección de acceso es esta y el método de solicitud es post
      let allData = '';
      //  Lo siguiente es perseguir lo último, se recibe en una pequeña porción
      req.addListener('data', (fragmento) => {
          //  fragmento es de tipo búfer
          allData += fragmento;
          console.log(fragmento); // <Buffer 6e 61 6d 65 3d 25 45 36 25 39 39 25 41 46 25 45 36 25 42 34 25 41 41 26 25 45 37 25 39 34 25 42 37 3d 6f 6e>
      });
      //  Se reciben todos los fragmentos de formulario
      req.addListener('end', () => {
          let dataString = allData.toString();
          console.log(dataString);// name=%E6%99%AF%E6%B4%AA&%E7%94%B7=on
          let dataobj = querystring.parse(dataString);
          console.log(dataobj); 
          res.end('success');
      })
    }
});
server.listen(8080, '127.0.0.1'); 