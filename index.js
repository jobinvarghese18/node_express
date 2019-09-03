const express = require('express');
const http = require('http');
const  hostname ='localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3003;



const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.all('/dishes',(req,res,next) => {

     res.statusCode=200;
     res.setHeader('Content-Type','text/plain');
     next();

});

app.get('/dishes', (req,res,next) => {

          res.end('Will send all the details to you');


});


app.put('/dishes', (req,res,next) =>{

        res.statusCode=403;
        res.end('Operation not supported');

});


app.post('/dishes', (req,res,next) => {

            res.end('will add this : '+req.body.name+ 'with the details: '+req.body.description);
});


app.delete('/dishes:/dishId' ,(req,res,next) => {

          res.end('Deleting all dishes!');

});

app.get('/dishes/:dishId', (req,res,next) => {

          res.end('Will send all the details to you');


});


app.put('/dishes/:dishId', (req,res,next) =>{

        res.write('Updating the dish: '+ req.params.dishId +'/n');
        res.end('Will update the dish :' + req.body.name +'with details '+req.params.description);

});


app.post('/dishes/:dishId', (req,res,next) => {

            res.end('will add this : '+req.body.name+ 'with the details: '+req.body.description);
});



app.delete('/dishes:/dishId' ,(req,res,next) => {

          res.end('Deleting all dishes!');

});




app.use(express.static(__dirname+ '/public'));





const server = http.createServer(app);


server.listen(port,hostname,() =>{

        console.log(`Server running at http://${hostname}:${port}`);

})
