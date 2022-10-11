const express = require('express');
const fs = require('fs');
const server = express();
const bodyParser = require('body-parser');


var contacts;

fs.readFile('data.json', (err, data) => {

    contacts = JSON.parse(data);    
    
});

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true}));


server.get('/', (req, res) => {

    fs.readFile('/public/index.html', (err, data) => {

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();

    });


});


server.post('/', (req, res) => {

    contacts.push(req.body);


    var newJsonContent = JSON.stringify(contacts);

    fs.writeFile("data.json", newJsonContent, 'utf8', function (err) {

        res.end();

    })

});

server.get('/contacts', (req, res) => {

    res.send(JSON.stringify(contacts));

});

server.listen(8080);