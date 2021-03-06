const express = require('express'); 
const Router = express.Router(); 

const DB = require('../db/users.js')
   
Router.route('/') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json'); 
    console.log('hit')
    next(); 
}) 
.get((req, res, next) => { 
    res.send('When a GET request is made to users, then this '
            + 'is the response sent to the client!'); 
}) 
.post((req, res, next) => { 
    console.log(req.body);
    res.status(200).send(req.body); 
}) 
.put((req, res, next) => { 
    res.send('When a PUT request is made, then this '
            + 'is the response sent to the client!'); 
}) 
.delete((req, res, next) => { 
    res.send('When a DELETE request is made, then this '
            + 'is the response sent to the client!'); 
}); 
   
module.exports = Router; 