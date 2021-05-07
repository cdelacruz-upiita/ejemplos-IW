
const http = require("http");
const hostname = '127.0.0.1';
// 80 o 8080
const port = '3000';

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  
  response.write("Ejemplo de servidor Web creado en Node.JS, versión: ");
  response.write(process.version);
  response.end();
});

server.listen(port, hostname, () => {    //callback
    console.log(`Server running at http://${hostname}:${port}/`);
})