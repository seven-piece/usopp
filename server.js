const http = require('http');
const fs = require('fs');

let html;
let css;
let js;

let swbcss;
let swbjs;

fs.readFile('./index.html', function (err, data) {
  if (err) {
    throw err;
  }
  html = data;
});

fs.readFile('./assets/css/style.css', function (err, data) {
  if (err) {
    throw err;
  }
  css = data;
});

fs.readFile('./assets/css/swiper-bundle.min.css', function (err, data) {
    if (err) {
      throw err;
    }
    swbcss = data;
  });

fs.readFile('./assets/js/main.js', function (err, data) {
  if (err) {
    throw err;
  }
  js = data;
});

fs.readFile('./assets/js/swiper-bundle.min.js', function (err, data) {
    if (err) {
      throw err;
    }
    swbjs = data;
  });

http.createServer((req, res) => {
  res.statusCode = 200;
  
  if(req.url.indexOf('style.css') != -1){
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(css);
   res.end();
   return;
  }

  if(req.url.indexOf('swiper-bundle.min.css') != -1){
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(swbcss);
    res.end();
    return;
   }

  if(req.url.indexOf('main.js') != -1){
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(js);
   res.end();
   return;
  }

  if(req.url.indexOf('swiper-bundle.min.js') != -1){
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(swbjs);
    res.end();
    return;
   }
  
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
}).listen(8080);