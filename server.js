const express = require('express');
const fs = require('fs');
const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {

    fs.readFile('/public/index.html', (err, data) => {

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();

    });    

});

/*server.get('/cars', (req, res) => {

    var Cars = [{'Brand': 'Volco', 'Modell': 'V70'}, {'Brand': 'Audi', 'Modell': 'Q3'}];
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(JSON.stringify(Cars));

    res.end();

})*/

server.listen(8080);