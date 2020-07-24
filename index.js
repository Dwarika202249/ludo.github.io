// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Family</title>
      <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
      <nav class="navigation">
          <div class="heading">
              <h3 id="heading-name">My Family</h3>
          </div>
          <div class="navbar">
              <ul>
                  <li><a href="#">ABOUT</a></li>
                  <li><a href="#">GALLERY</a></li>
                  <li><a href="#">SERVICES</a></li>
                  <li><a href="#">CONTACT</a></li>
              </ul>
          </div>
      </nav>
      <section class="container-1">
          <div class="mid">
              <h1 class="mid-1">Welcome To My Family</h1>
          </div>
          <div class="mid">
              <h3 class="mid-1">'''NirmalChand's Generation'''</h3>
          </div>
      </section>
  
      <section class="container-2">
          <h4>This is second section</h4>
  
      </section>
  
      <section class="container-3">
          <h4>This is third section</h4>
  
      </section>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});