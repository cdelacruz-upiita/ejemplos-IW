const http=require('http');

const servidor=http.createServer((request, response) => {
   const baseURL = 'http://' + request.headers.host + '/';
   const objetourl = new URL(request.url,baseURL); 
 
  let route=objetourl.pathname;
  console.log(route);
  if (route=='/')
    route='/numberList';
  router(request,response,route);
});

servidor.listen(5000);


function router (request,response,route) {   
  switch (route) {
    case '/numberList': {
      list(request,response);
      break;
    }	
    case '/tableList': {
      multiplicationTable(request,response);
      break;
    }			
    default : {  
       response.writeHead(404, {'Content-Type': 'text/html'});
       response.write('<!doctype html><html><head></head><body>El recurso solicitado no existe</body></html>');		
       response.end();
       
    }
  }	
}


function list(request,response) {
  const info = '';
  response.writeHead(200, {'Content-Type': 'text/html'});
  let page='<!doctype html><html><head></head><body>';
  page += '<h1> Ejemplo de rutas y peticiones GET </h1>';
  page += '<h1> Seleccione un número y observe la URL </h1>';
  for(let f=1;f<=5;f++) {
    page+=`<a href="tableList?num=${f}">${f}</a><br>`;
  }
  page+='</body></html>';
  response.end(page);
}

function multiplicationTable(request,response) {
  const baseURL = 'http://' + request.headers.host + '/';
  const objetourl = new URL(request.url,baseURL); 

  const values=objetourl.search.split("=");
  const value = values[values.length-1];
  console.log(value);

  response.writeHead(200, {'Content-Type': 'text/html'});
  let page='<!doctype html><html><head></head><body>';
  for(let f=1;f<=10;f++) {
    page+=`${value}*${f}=${value*f}<br>`;
  }		   
  page+='</body></html>';
  response.end(page);
}

console.log('Web Server On ...');