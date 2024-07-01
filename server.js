//import './nmea.js'
//const nmea = require('./nmea.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());
let storedData = null

var qs = require('querystring');


app.post('/api/data', (request, response) => {
    if (request.method === 'POST') {
      let body = '';
  
      request.on('data', function (data) {
        body += data;
        // Consider limiting body size here to prevent memory issues
      });
  
      request.on('end', function () {
        try {
          // Check for expected Content-Type header (if applicable)
          if (request.headers['content-type'] === 'text/plain') {
            const post = qs.parse(body);
            RecievedData = body.split(" ");
            storedData = RecievedData
            console.log(RecievedData[0]);

            // Process the parsed data (access using post['key'])
            // Send a response based on processing results
            response.send('Data received successfully'); // Example response
          } else {
            // Handle unexpected Content-Type
            response.status(400).send('Error: Unsupported content type');
          }
        } catch (error) {
          // Handle potential errors during parsing or processing
          console.error('Error handling POST request:', error);
          response.status(500).send('Internal Server Error');
        }
      });
    } else {
      // Handle non-POST requests (optional)
      response.status(405).send('Method Not Allowed');
    }
  });
app.get('/api/data', (request, response) => {
  const responseData = storedData;
  response.json({data : responseData});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});